import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ApiService from "../components/apiService/apiService";

type RegistrationTypes = {
  email: string;
  password: string;
  name: string;
};

<<<<<<< HEAD
export type NewsItems = {
  title: string;
  link: string;
  content: string[];
  pubDate: string;
  creator: string;
  category: string;
  guid: string;
  enclosure: string;
};

const serverUrl = import.meta.env.VITE_SERVER_URL;
// const apiService = new ApiService(serverUrl);/api
const apiService = new ApiService("/api");
=======
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
>>>>>>> e8c39de7ae0721d1512598278a8259f69db83b85

const useRegistrationPost = () => {
  return useMutation({
    mutationFn: async (registrationData: RegistrationTypes) => {
      const { name, email, password } = registrationData;
<<<<<<< HEAD
      const resp = await apiService.post<{ message: string }>("/auth/routes/registration", {
        name,
        email,
        password,
      });
=======
      const resp = await apiService.post<{ message: string }>(
        "/auth/routes/registration",
        { name, email, password }
      );
>>>>>>> e8c39de7ae0721d1512598278a8259f69db83b85
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
<<<<<<< HEAD
      const resp = await apiService.post<{ name: string }>("/auth/routes/login", {
        email,
        password,
      });
=======
      const resp = await apiService.post<{ name: string }>(
        "/auth/routes/login",
        { email, password }
      );
>>>>>>> e8c39de7ae0721d1512598278a8259f69db83b85
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
<<<<<<< HEAD
    mutationFn: async ({ url, force }: { url: string; force: boolean }): Promise<NewsItems[]> => {
      const { data } = await apiService.post<{ items: NewsItems[] }>("/feedParser/routes/feedURL", {
        url,
        force,
      });

=======
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
>>>>>>> e8c39de7ae0721d1512598278a8259f69db83b85
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

<<<<<<< HEAD
const useLoadArticle = (guid: string) => {
  return useQuery({
    queryKey: ["fullArticle", guid],
    queryFn: async () => {
      const { data } = await apiService.get<{
        articleImg: string;
        articleTitle: string;
        articleTextContent: string;
      }>(`/feedParser/routes/feedArticle`, {
        params: { url: guid },
      });
      return data;
    },
    enabled: !!guid,
  });
};

=======
>>>>>>> e8c39de7ae0721d1512598278a8259f69db83b85
export {
  useFeedURLPost,
  useLoginPost,
  useRegistrationPost,
  useLoadArticlesPreview,
<<<<<<< HEAD
  useLoadArticle,
=======
>>>>>>> e8c39de7ae0721d1512598278a8259f69db83b85
};
