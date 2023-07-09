import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import useSWR, { SWRConfiguration } from 'swr';

type Args = {
  url: string;
  axiosOptions?: AxiosRequestConfig;
  swrConfig?: SWRConfiguration;
};

type Response<T> = {
  data: AxiosResponse<T>;
};

export const useFetch = <T>({ url, axiosOptions, swrConfig }: Args): Response<T> => {
  const fetcher = (): Promise<AxiosResponse<T>> => {
    return axios.get(url, axiosOptions);
  };

  const { data } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
    revalidateOnMount: false,
    ...swrConfig,
    suspense: true,
  });

  return { data };
};
