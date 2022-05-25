import { useCallback, useState } from "react";
const useHttp = (requestParams, DataTransfomer) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const sendRequest = useCallback(async () => {
    setIsLoading(true);
    try {
      const { url: requestUrl, method: requestMethod } = requestParams();
      const respone = await fetch(requestUrl, {
        method: requestMethod,
      });
      // Checking if error acourd during the request
      if (!respone.ok) {
        throw new Error("Request Faild!");
      }

      const data = await respone.json();
      DataTransfomer(data);
    } catch (err) {
      setHasError(err.message || "Something went worng!");
    }
    setIsLoading(false);
  }, [DataTransfomer, requestParams]);

  return {
    isLoading,
    hasError,
    sendRequest,
  };
};

export default useHttp;
