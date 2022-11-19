import { Form, Formik } from "formik";
import { useState } from "react";
import { useProductos } from "../context/productos/ProductoContext";
function Search() {
  const { searchProductos } = useProductos();
  const [search, setSearch] = useState({
    search: "",
  });
  return (
    <div>
      <Formik
        initialValues={search}
        enableReinitialize={true}
        onSubmit={async(values) => {
          const res = await searchProductos(values);            
          console.log("🚀 ~ file: Search.jsx ~ line 16 ~ onSubmit={async ~ res", res);         
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              placeholder="search"
              onChange={handleChange}
              value={values.search}          
              className="border-2 border-gray-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
            />
            <button hidden type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default Search;
