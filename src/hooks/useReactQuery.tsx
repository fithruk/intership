import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ApiService from "../components/apiService/apiService";

type RegistrationTypes = {
  email: string;
  password: string;
  name: string;
};

type NewsItemsEnum =
  | "title"
  | "link"
  | "content"
  | "pubDate"
  | "creator"
  | "category"
  | "guid";

type NewsItems = Record<NewsItemsEnum, string | string[]>;

const serverUrl = import.meta.env.VITE_SERVER_URL;
const apiService = new ApiService(serverUrl);

const useRegistrationPost = () => {
  return useMutation({
    mutationFn: async (registrationData: RegistrationTypes) => {
      const { name, email, password } = registrationData;
      const resp = await apiService.post<{ message: string }>(
        "/auth/routes/registration",
        { name, email, password }
      );
      return resp.data;
    },
    onSuccess: (data) => {
      alert(`${data.message}`);
    },
  });
};

const useLoginPost = () => {
  return useMutation({
    mutationFn: async (loginData: Omit<RegistrationTypes, "name">) => {
      const { email, password } = loginData;
      const resp = await apiService.post<{ name: string }>(
        "/auth/routes/login",
        { email, password }
      );
      return resp.data;
    },
    onSuccess: (data) => {
      console.log("Вход выполнен:", data.name);
    },
  });
};

const useFeedURLPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      url,
      force,
    }: {
      url: string;
      force: boolean;
    }): Promise<NewsItems[]> => {
      const { data } = await apiService.post<{ items: NewsItems[] }>(
        "/feedParser/routes/feedURL",
        { url, force }
      );
      debugger;
      return data.items;
    },
    onSuccess: (data: NewsItems[]) => {
      queryClient.setQueryData(["articlesPreview"], data);
    },
  });
};

const useLoadArticlesPreview = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["articlesPreview"],
    queryFn: () => {
      return queryClient.getQueryData<NewsItems[]>(["articlesPreview"]) || [];
    },
  });
};

export {
  useFeedURLPost,
  useLoginPost,
  useRegistrationPost,
  useLoadArticlesPreview,
};
