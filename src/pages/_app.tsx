import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import store from "redux/store";
import GlobalStyle from "styles/GlobalStyle";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}
