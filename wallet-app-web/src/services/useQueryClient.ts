import toast from "react-hot-toast";
import { QueryClient } from "react-query";

const onFetchData = () => {
  toast.loading("Carregando...", { id: "request" });
};

const onSendData = () => {
  toast.loading("Enviando dados...", { id: "request" });
};

const onFetchError = (error: any) => {
  const msg = error?.response?.data?.message || error?.message || "Error";
  toast.error(msg, { id: "request" });
};

const onSendError = (error: any) => {
  const msg = error?.response?.data?.message || error?.message || "Error";
  toast.error(msg, { id: "request" });
};

const onSendSuccess = (error: any) => {
  toast.success("Dados salvos", { id: "request" });
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      onError: onFetchError,
      behavior: { onFetch: onFetchData },
    },
    mutations: {
      retry: false,
      onError: onSendError,
      onSuccess: onSendSuccess,
      onMutate: onSendData,
    },
  },
});
