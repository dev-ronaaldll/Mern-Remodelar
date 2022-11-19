import { useEffect } from "react";
import ProductoCard from "../../components/ProductoCard";
import { useProductos } from "../../context/productos/ProductoContext";
import Search from "../../components/Search";
function Productos() {  
  const {productos,loadProductos}=useProductos()
  useEffect(() => {    
    loadProductos();
  }, []);
  function renderMain (){
    // TODO : STUDY THIS
    if(productos.length > 0){
      return productos.map((producto) => (
        <ProductoCard key={producto.codprod} producto={producto} />
      ));
    } else {
      return <p>No hay productos</p>
    }
  }
  return (
    <div className="text-lg md:text-2xl">
      <Search />
      <h2>Productos</h2>
      <div className="grid grid-cols-3 text-center">
        <p>Codigo</p>
        <p>Costo</p>
        <p>Precio</p>
        <p></p>
      </div>    
      {renderMain()}
    </div>
  );
}
export default Productos;
