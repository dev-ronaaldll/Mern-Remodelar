import axios from "axios";

const remodelarApi = axios.create({ baseURL: "http://192.168.1.101:3000" });

export const getProductosRequest = async () =>
  await remodelarApi.get("/productos");

export const createProductoRequest = async (producto) =>
  await remodelarApi.post("/productos", producto);

export const deleteProductoRequest = async (codprod) =>
  await remodelarApi.delete(`/productos/${codprod}`);

export const getProductoRequest = async (codprod) =>
  await remodelarApi.get(`/productos/${codprod}`);
// TODO: STUDY THIS
export const updateProductoRequest = async (codprod, producto) =>
  await remodelarApi.put(`/productos/${codprod}`, producto);

// export const toggleTaskDoneRequest = async (codprod, done) =>
//   await remodelarApi.put(`/productos/${codprod}`, {
//     done,
//   });

export const lastCodeRequest = async () =>
  await remodelarApi.get("/productos/last");

export const searchProductosRequest = async (listInput) =>
  await remodelarApi.post("/productos/search", listInput);
