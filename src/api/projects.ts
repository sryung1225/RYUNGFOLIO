import { instance } from "./axiosInstance";

export async function getProjects() {
  try {
    const response = await instance.get(`/projects`);
    console.log("데이터 패칭 성공", response.data);
    return response.data;
  } catch (error) {
    console.error("데이터 패칭 실패", error);
    return [];
  }
}
