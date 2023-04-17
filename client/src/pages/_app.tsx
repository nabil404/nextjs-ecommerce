import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonInfrastructure from "@/components/CommonInfrastructure"
import {wrapper} from "@/store";

function App({Component, ...rest}: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <CommonInfrastructure>
        <Component {...props.pageProps} />
      </CommonInfrastructure>
    </Provider>
  )
}

export default App