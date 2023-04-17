import {useEffect, useState} from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0
  })
  const handleResize = () => {
    if (typeof window !== "undefined") {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return size
}