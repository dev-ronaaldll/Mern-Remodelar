import { TaskContextProvider } from "./context/tasks/TaskProvider";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/task/TasksPage";
import TaskForm from "./pages/task/TaskForm";
import NotFound from "./pages/NotFound";
import Productos from "./pages/producto/ProductosPage";
import ProductoForm from "./pages/producto/ProductoForm";
import { ProductoContextProvider } from "./context/productos/ProductoContext";
function App() {
  return (
    <div className="text-white bg-zinc-900 min-h-screen">
      <div className="">
        <Navbar />
        <div className="mx-auto py-4 px-5 lg:px-20">
          {/* TODO: FIX */}
          <ProductoContextProvider>
            <TaskContextProvider>
              <Routes>
                <Route path="/" element={<Productos />} />
                <Route path="/new" element={<ProductoForm />} />
                <Route path="/edit/:codprod" element={<ProductoForm />} />
                <Route path="/tasks/" element={<TasksPage />} />
                <Route path="/tasks/new" element={<TaskForm />} />
                <Route path="/tasks/edit/:id" element={<TaskForm />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </TaskContextProvider>
          </ProductoContextProvider>
        </div>
      </div>
    </div>
  );
}
export default App;
