import instance from './axiosInstance';

async function getProjects() {
  try {
    const response = await instance.get(`/projects`);
    return response.data;
  } catch (error) {
    console.error('프로젝트 데이터 패칭 실패', error);
    return [];
  }
}

export async function getProjectDetail({ id }: { id: string }) {
  try {
    const response = await instance.get(
      `/projects?id=eq.${id}&select=*,posts(*),features(*)`,
    );
    return response.data[0];
  } catch (error) {
    console.error('개별 프로젝트 데이터 패칭 실패', error);
    return [];
  }
}

export default getProjects;
