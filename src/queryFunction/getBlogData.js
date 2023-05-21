import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getBlogData = () => {
  const blogs = axios({
    method: "GET",
    url: "https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10",
  });
  return blogs;
};

export const useBlogsData = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: () => getBlogData(),
    refetchOnMount: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 1,
  });
};
