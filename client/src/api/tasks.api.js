import axios from "axios";

export const getTasksRequest = async () =>
  await axios.get("http://192.168.1.101:3000/tasks");

export const createTaskRequest = async (task) =>
  await axios.post("http://192.168.1.101:3000/tasks", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://192.168.1.101:3000/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`http://192.168.1.101:3000/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://192.168.1.101:3000/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://192.168.1.101:3000/tasks/${id}`, {
    done,
  });
