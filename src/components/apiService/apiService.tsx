import { useAuthStore } from "../../store/useAuthStore";

import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

interface ApiServiceTypes {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
<<<<<<< HEAD
  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
=======
  post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>>;
  put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>>;
  delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>>;
>>>>>>> e8c39de7ae0721d1512598278a8259f69db83b85
}

class ApiService implements ApiServiceTypes {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    });

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          useAuthStore.getState().signOut();
        }
        console.error("Response Error:", error);
        return Promise.reject(error);
<<<<<<< HEAD
      },
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
=======
      }
    );
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
>>>>>>> e8c39de7ae0721d1512598278a8259f69db83b85
    return this.axiosInstance.get<T>(url, config);
  }

  async post<T>(
    url: string,
    data?: unknown,
<<<<<<< HEAD
    config?: AxiosRequestConfig,
=======
    config?: AxiosRequestConfig
>>>>>>> e8c39de7ae0721d1512598278a8259f69db83b85
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data, config);
  }

  async put<T>(
    url: string,
    data?: unknown,
<<<<<<< HEAD
    config?: AxiosRequestConfig,
=======
    config?: AxiosRequestConfig
>>>>>>> e8c39de7ae0721d1512598278a8259f69db83b85
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config);
  }

<<<<<<< HEAD
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
=======
  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
>>>>>>> e8c39de7ae0721d1512598278a8259f69db83b85
    return this.axiosInstance.delete<T>(url, config);
  }
}

export default ApiService;
