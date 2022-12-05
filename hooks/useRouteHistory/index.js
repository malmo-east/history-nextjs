import * as React from "react";
import { useRouter } from "next/router";

export const HistoryContext = React.createContext();
export const useHistoryContext = () => React.useContext(HistoryContext);

export const usePreviousRoute = () => {
  const { asPath } = useRouter();
  const [history, setHistory] = React.useState([asPath]);
  const lastHistoryIndex = history.length - 2;
  const previousRoute = history[lastHistoryIndex > 0 ? lastHistoryIndex : 0];

  const removeHistoryItem = React.useCallback(
    (prevHistory, item) => prevHistory.filter((_, index) => index !== item),
    []
  );

  const removeHistory = () => {
    setHistory((prevHistory) =>
      prevHistory.length > 1
        ? removeHistoryItem(prevHistory, prevHistory.length - 1)
        : prevHistory
    );
  };

  React.useEffect(() => {
    setHistory((prevHistory) =>
      prevHistory[prevHistory.length - 1] !== asPath
        ? [
            ...(prevHistory.length > 9
              ? removeHistoryItem(prevHistory, 0)
              : prevHistory),
            asPath
          ]
        : prevHistory
    );
  }, [asPath, removeHistoryItem]);

  return { history, previousRoute, removeHistory };
};

export const HistoryProvider = ({ children }) => {
  const historyProps = usePreviousRoute();

  return (
    <HistoryContext.Provider
      value={{
        ...historyProps
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
