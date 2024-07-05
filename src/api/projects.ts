import { supabase } from "./supabase";

export async function getProjects() {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) {
    console.error("데이터 패칭 실패", error);
    return [];
  }
  console.log("데이터 패칭 성공!", data.length);
  return data;
}
