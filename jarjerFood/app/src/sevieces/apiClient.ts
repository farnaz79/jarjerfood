import axios, { AxiosError, AxiosHeaders, RawAxiosRequestHeaders } from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    // headers: { "Content-Type": "application/json" },
});
type Headers = AxiosHeaders | RawAxiosRequestHeaders;

class APIClient {
    async post<S = any>(url: string, data: any, headers?: Headers) {
        try {
            const res = await axiosInstance.post<S>(url, data, {
                headers,
            });
            return res.data;
        } catch (e) {
            if (e instanceof AxiosError) throw e.response?.data;
            throw e;
        }
    }
    async get<S>(url: string, params?: any, headers?: Headers) {
        try {
            const res = await axiosInstance.get<S>(url, {
                params,
                headers,
            });
            return res.data;
        } catch (e) {
            if (e instanceof AxiosError) throw e.response?.data;
            throw e;
        }
    }
    async patch<S>(url: string, data: any, headers?: Headers) {
        try {
            const res = await axiosInstance.patch<S>(url, data, {
                headers,
            });
            return res.data;
        } catch (e) {
            if (e instanceof AxiosError) throw e.response?.data;
            throw e;
        }
    }
    async delete<S>(url: string) {
        try {
            const res = await axiosInstance.delete<S>(url);
            return res.data;
        } catch (e) {
            if (e instanceof AxiosError) throw e.response?.data;
            throw e;
        }
    }
}

const ApiClient = new APIClient();
export default ApiClient;
