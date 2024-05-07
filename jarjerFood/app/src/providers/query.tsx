"use client";

import {ReactNode} from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";


const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 180000 } },
});


const Query = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
            {children}
        </QueryClientProvider>
    );
};

export default Query;