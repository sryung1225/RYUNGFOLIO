import instance from './axiosInstance';

async function getWorkExperiences() {
  try {
    const response = await instance.get(`/works?select=*,works_projects(*)`);
    return response.data;
  } catch (error) {
    console.error('업무 경험 데이터 패칭 실패', error);
    return [];
  }
}

export default getWorkExperiences;
