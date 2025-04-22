"use client";

import { DefaultToastOptions, Toaster } from "react-hot-toast";
import { QueryClientProvider } from "react-query";
import { queryClient } from "src/services/useQueryClient";

const toastOptions: DefaultToastOptions = {
  duration: 8000,
  style: { minWidth: "20rem" },
};

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster toastOptions={toastOptions} />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
