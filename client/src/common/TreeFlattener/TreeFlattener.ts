import {cloneDeep, omit} from 'lodash'

export interface BaseFlatData {
  id: string
  url?: string
}

export interface FlatTreeData<T extends BaseFlatData> {
  item: T
  path: string[]
  level: number
}

export interface TreeData<T extends BaseFlatData> {
  id: string
  children?: T[]
}

export interface MappedTreeData<T extends BaseFlatData> {
  [key: string]: FlatTreeData<T>
}

export class TreeFlattener<T extends BaseFlatData> {
  private _flatTreeData: FlatTreeData<T>[] = []
  private _path: string[] = []

  constructor(treeData: TreeData<T>[]) {
    this._flatTree(treeData)
  }

  get treeDataFlat() {
    return this._flatTreeData
  }

  private _flatTree(treeData: TreeData<T>[]) {
    treeData.forEach(element => {
      this._path.push(element.id)
      this._flatTreeData.push(this._getTreeData(element))
    })
  }

  private _getTreeData(data: TreeData<T>): FlatTreeData<T> {
    let dataCopy = cloneDeep(data)
    dataCopy = omit(dataCopy, ['children'])
    const hasChild = !!data?.children?.length
    const flatData: FlatTreeData<T> = {
      item: dataCopy as T,
      path: [...this._path],
      level: 0,
    }
    if (hasChild) this._flatTree(data.children!)
    this._path.pop()
    flatData.level = flatData.path.length - 1
    return flatData
  }

  public mapTreeData(): MappedTreeData<T> {
    const mappedData: MappedTreeData<T> = {}
    this._flatTreeData.forEach(d => {
      if (d.item.url) {
        mappedData[d.item.url] = d
      } else {
        mappedData[d.item.id] = d
      }
    })
    return mappedData
  }
}
