import { Form, Formik } from "formik";
import { useState } from "react";
import { useProductos } from "../context/productos/ProductoContext";
function Search() {
  const { searchProductos } = useProductos();
  const [search, setSearch] = useState({
    search: "",
  })
  return (
    <div>
      <Formik
        initialValues={search}
        enableReinitialize={true}
        onSubmit={async(values,actions) => {          
          const res = await searchProductos(values);
          console.log("🚀 ~ file: Search.jsx ~ line 15 ~ onSubmit={async ~ res", res);          
          actions.resetForm();
        }}
      >
        {({handleChange,handleSubmit,values}) => (
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              placeholder="search"
              onChange={handleChange}
              value={values.search}
            />
            <button hidden type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default Search;
