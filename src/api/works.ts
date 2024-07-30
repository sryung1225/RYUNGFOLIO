import instance from './axiosInstance';

async function getWorks() {
  try {
    const response = await instance.get(`/works?select=*,works_projects(*)`);
    console.log('데이터 패칭 성공', response.data);
    return response.data;
  } catch (error) {
    console.error('데이터 패칭 실패', error);
    return [];
  }
}

export default getWorks;
