import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { END_POINT, httpClient } from "../api/httpClient";

import { addStudent, upDateStudent, deleteStudentData } from "../api/apiEpm";

export const useGetData = () => {
  return useQuery({
    queryKey: ["emp"],
    queryFn: () => httpClient.get(END_POINT).then((res) => res.data),
  });
};

export const useAddTheData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (empData) =>
      httpClient.post(END_POINT, empData).then((res) => res.data),
    onSuccess: () => queryClient.invalidateQueries(["emp"]),
  });
};
export const useUpDateData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: upDateStudent,
    onSuccess: () => queryClient.invalidateQueries(["emp"]),
  });
};

export const useDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) =>
      httpClient.delete(`${END_POINT}/${id}`).then((res) => res.data),
    onSuccess: () => queryClient.invalidateQueries(["emp"]),
  });
};
