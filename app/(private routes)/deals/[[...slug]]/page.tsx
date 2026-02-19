import { fetchDeals } from "@/lib/api/serverApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import DealsClient from "./Deals.client";

interface DealsProps {
  params: Promise<{ slug: string[] }>;
}

async function DealsPage({ params }: DealsProps) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["deals"],
    queryFn: fetchDeals,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DealsClient />
    </HydrationBoundary>
  );
}

export default DealsPage;
