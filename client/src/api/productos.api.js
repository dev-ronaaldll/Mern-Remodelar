import axios from "axios";

export const getProductosRequest = async () =>
  await axios.get("http://192.168.1.101:3000/productos");

export const createProductoRequest = async (producto) =>
  await axios.post("http://192.168.1.101:3000/productos", producto);

export const deleteProductoRequest = async (codprod) =>
  await axios.delete(`http://192.168.1.101:3000/productos/${codprod}`);

export const getProductoRequest = async (codprod) =>
  await axios.get(`http://192.168.1.101:3000/productos/${codprod}`);
// TODO: STUDY THIS
export const updateProductoRequest = async (codprod, producto) =>
  await axios.put(`http://192.168.1.101:3000/productos/${codprod}`, producto);

export const toggleTaskDoneRequest = async (codprod, done) =>
  await axios.put(`http://192.168.1.101:3000/productos/${codprod}`, {
    done,
  });