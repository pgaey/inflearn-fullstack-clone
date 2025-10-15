"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as JotaiProvieer } from 'jotai';

const queryClient = new QueryClient();

export default function Providers({
  children
}: React.PropsWithChildren) {
  return (
    <JotaiProvieer>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </JotaiProvieer>
  )
}