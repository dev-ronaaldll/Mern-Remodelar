import { useContext, useState, createContext } from "react";
import {
  createProductoRequest,
  deleteProductoRequest,
  getProductosRequest,
  getProductoRequest,
  updateProductoRequest,
} from "../../api/productos.api";
export const ProductoContext = createContext();
export const useProductos = () => {
  const context = useContext(ProductoContext);
  if (!context) {
    throw new Error(
      "useProductos debe estar dentro de un ProductoContextProvider"
    );
  }
  return context;
};
export const ProductoContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  async function loadProductos() {
    const res = await getProductosRequest();
    setProductos(res.data);
  }
  const deleteProducto = async (codprod) => {
    try {
      const res = await deleteProductoRequest(codprod);
      console.log(res);
      // TODO : study this REFRESH LIST OF PRODUCTOS
      setProductos(
        productos.filter((producto) => producto.codprod !== codprod)
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: ProductoCard.jsx ~ line 8 ~ handleDelete ~ error",
        error
      );
    }
  };
  const createProducto = async (producto) => {
    try {
      const res = await createProductoRequest(producto);
      // add new producto to the list
      // setProductos([...productos, res.data]);
      // # se envian datos pero al navigate se demora en actualizar y ya se tienen los ultimos productos en el array
      console.log(
        "🚀 ~ file: ProductoContext.jsx ~ line 42 ~ createProducto ~ res",
        res
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: ProductoForm.jsx ~ line 32 ~ onSubmit = ~ error",
        error
      );
    }
  };
  // useState guarda lo asignado
  const [codProd, setCodProd] = useState(-1);
  // TODO : CACHE  CODPROD MAX
  // async function startVal() {
  const startCodProd = async () => {
    const res = await getProductosRequest();
    setCodProd(parseInt(res.data[0].codprod) + 1);
  };
  const getProducto = async (codprod) => {
    try {
      const res = await getProductoRequest(codprod);
      return res.data;
    } catch (error) {
      console.log(
        "🚀 ~ file: ProductoContext.jsx ~ line 67 ~ getProducto ~ error",
        error
      );
    }
  };
  const updateProducto = async (codprod, producto) => {
    try {
      console.log(codprod, producto);
      const res = await updateProductoRequest(codprod, producto);
      console.log(
        "🚀 ~ file: ProductoContext.jsx ~ line 79 ~ updateProducto ~ res",
        res
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: ProductoContext.jsx ~ line 67 ~ getProducto ~ error",
        error.response
      );
    }
  };
  return (
    <ProductoContext.Provider
      value={{
        productos,
        loadProductos,
        deleteProducto,
        createProducto,
        startCodProd,
        codProd,
        getProducto,
        updateProducto,
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
};