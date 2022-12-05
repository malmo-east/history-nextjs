import * as React from "react";
import HistoryContext from "../hooks/useRouteHistory";

const App = ({ Component, pageProps }) => (
  <HistoryContext>
    <Component {...pageProps} />
  </HistoryContext>
);

export default App;
