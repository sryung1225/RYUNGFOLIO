import axios, { AxiosInstance } from "axios";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const instance: AxiosInstance = axios.create({
  baseURL: supabaseUrl,
  timeout: 10000, // 요청 타임아웃 시간 설정 (밀리초)
  headers: {
    apikey: supabaseKey,
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
