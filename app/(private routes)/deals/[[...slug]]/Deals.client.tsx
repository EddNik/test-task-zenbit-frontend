"use client";

import Deals from "@/components/Deals/Deals";
import { fetchDeals } from "@/lib/api/clientApi";
import { useQuery } from "@tanstack/react-query";

function DealsClient() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["deals"],
    queryFn: fetchDeals,
  });
  if (isLoading) return <div>Loading deals...</div>;
  if (isError || !data) return <div>Error loading deals.</div>;

  return (
    <>
      <Deals deals={data?.data || []} />
    </>
  );
}

export default DealsClient;
