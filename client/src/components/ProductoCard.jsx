import { useProductos } from "../context/productos/ProductoContext";
import { useNavigate } from "react-router-dom";
function ProductoCard({ producto }) {
  const { deleteProducto } = useProductos();
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="bg-zinc-600 p-1 text-center rounded-md w-full border-none font-semibold"
        onClick={() => navigate(`/edit/${producto.codprod}`)}
        // #TODO: CREAR DELETE EN EDIT -Agregar confirmación
        // onClick={() => deleteProducto(producto.codprod)}
      >
        {producto.nomprod}
      </button>
      <div className="grid grid-cols-3 text-center">
        <p>{producto.codprod}</p>
        <p>{producto.cosulc}</p>
        <p>
          {producto.venprod.toLocaleString()}
          {producto.pvenfra.toLocaleString() > 0 ? `-${producto.pvenfra}` : ""}
        </p>
      </div>
    </div>
  );
}
export default ProductoCard;
