import api from "./api";


export async function uploadResume(file) {
  const formData = new FormData();

  formData.append("resume", file);

  const { data } = await api.post(
    "/resume/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
}

export async function getHistory() {
  const { data } = await api.get("/resume/history");
  return data;
}

export async function deleteResume(id) {
  const { data } = await api.delete(`/resume/${id}`);
  return data;
}

export async function getResume(id) {
  const { data } = await api.get(`/resume/${id}`);
  return data;
}