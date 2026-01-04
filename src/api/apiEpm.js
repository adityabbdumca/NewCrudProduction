import { END_POINT, httpClient } from "./httpClient";

export const addStudent = async (emp) => {
  const { data } = await httpClient.post(END_POINT, emp);
  return data;
};

export const upDateStudent = async ({ id, empData }) => {
  const { data } = await httpClient.put(`${END_POINT}/${id}`, empData);
  return data;
};
export const deleteStudentData = async (id) => {
  const { data } = await httpClient.delete(`${END_POINT}/${id}`);
  return data;
};
