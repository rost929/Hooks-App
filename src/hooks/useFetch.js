import { useEffect, useState } from "react";

const initialValues = {
  data: null,
  isLoading: true,
  hasError: false,
  error: null,
};

const localCache = {};

export const useFetch = (url) => {

  console.log("url", url);
  const [state, setState] = useState(initialValues);

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState(initialValues);
  };

  const getFetch = async () => {

    if (localCache[url]) {
        console.log('Usando caché');
        setState({
          data: localCache[url],
          isLoading: false,
          hasError: false,
          error: null,
        });
        return;
      }

    setLoadingState();

    const response = await fetch(url);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!response.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: response.status,
          message: response.statusText,
        },
      });
      return;
    }
    const data = await response.json();
    setState({
        data: data,
        isLoading: false,
        hasError: false,
        error: null,
    });

    localCache[url] = data;
    
};

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
