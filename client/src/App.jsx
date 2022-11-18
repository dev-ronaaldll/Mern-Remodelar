import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Productos from "./pages/producto/Page.productos";
import ProductoForm from "./pages/producto/Form.productos";
import UProductoForm from "./pages/producto/Create.productos";
import { ProductoContextProvider } from "./context/productos/ProductoContext";
function App() {
  return (
    <div className="text-white bg-zinc-900 min-h-screen">
      <div className="">
        <Navbar />
        <div className="mx-auto py-4 px-5 lg:px-20">
          {/* TODO: FIX */}
          <ProductoContextProvider>
            <Routes>
              <Route path="/" element={<Productos />} />
              <Route path="/new" element={<ProductoForm />} />
              <Route path="/uNew" element={<UProductoForm />} />
              <Route path="/edit/:codprod" element={<ProductoForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ProductoContextProvider>
        </div>
      </div>
    </div>
  );
}
export default App;
