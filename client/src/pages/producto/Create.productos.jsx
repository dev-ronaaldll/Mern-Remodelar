import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useProductos } from "../../context/productos/ProductoContext";

function UProductoForm() {
  const { createProducto, lastCodProd } = useProductos();
  const today = new Date().toJSON().slice(0, 10);
  const [producto, setProducto] = useState({
    codprod: "",
    codbar: "",
    nomprod: "",
    exiprod: "",
    venprod: "",
    fecapa: "",
    undfra: "",
    pvenfra: "",
  });
  useEffect(() => {
    const loadProducto = async () => {
      const codProd = await lastCodProd();
      console.log(codProd);
      setProducto({
        codprod: codProd,
        codbar: codProd,
        nomprod: "",
        exiprod: "",
        venprod: "",
        fecapa: today,
        undfra: 0,
        pvenfra: 0,
      });
    };
    loadProducto();
  }, []);
  //   if (codProd === -1) {
  //     console.log("loading");
  //     return <div>Cargando...</div>;
  //   }
  return (
    <Formik
      initialValues={producto}
      enableReinitialize={true}
      onSubmit={async (values, actions) => {
        // console.log(values.codprod)
        try {
          await createProducto(values);
          console.log(
            "🚀 ~ file: ProductoForm.jsx ~ line 53 ~ onSubmit={ ~ values",
            values
          );
        } catch (error) {
          console.log(
            "🚀 ~ file: UproductoForm.jsx ~ line 26 ~ onSubmit={ ~ error",
            error
          );
        }
        actions.resetForm(); // genera los valores iniciales
      }}
    >
      {/* 1 handleChange  : cambia el estado de initialValues */}
      {/* 2 handleSunbmit : envia los datos actualues al  */}
      {/* 3 values : genera los valores iniciales despues de enviar */}
      {({ handleChange, handleSubmit, values, isSubmiting }) => (
        <Form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-y-2 items-center">
            <label>codprod</label>
            <input
              onChange={handleChange}
              //   onChange={(handleChange,console.log(values.codprod))}
              type="number"
              name="codprod"
              placeholder="codprod"
              className="col-span-4"
              required
              value={values.codprod}
            />
            <label>codbar</label>
            <input
              onChange={handleChange}
              type="number"
              name="codbar"
              placeholder="codbar"
              className="col-span-4"
              value={values.codbar}
              required
            />
            <label>nomprod</label>
            <input
              onChange={handleChange}
              type="text"
              name="nomprod"
              required
              placeholder="nomprod"
              className="col-span-4"
              autoFocus
            />
            <label>exiprod</label>
            <input
              onChange={handleChange}
              type="number"
              name="exiprod"
              required
              placeholder="exiprod"
              className="col-span-4"
              value={values.exiprod}
            />
            <label>venprod</label>
            <input
              onChange={handleChange}
              type="number"
              name="venprod"
              required
              placeholder="venprod"
              className="col-span-4"
              value={values.venprod}
            />
            <button
            type="submit"
            className="bg-zinc-700 w-full col-span-5"
            disabled={isSubmiting}
          >
            {isSubmiting ? "Saving" : "Crear Producto"}
          </button>
            <label>undfra</label>
            <input
              onChange={handleChange}
              type="number"
              name="undfra"
              placeholder="undfra"
              className="col-span-4"
              required
              value={values.undfra}
            />
            <label>pvenfra</label>
            <input
              onChange={handleChange}
              type="number"
              name="pvenfra"
              placeholder="pvenfra"
              className="col-span-4"
              required
              value={values.pvenfra}
            />
          </div>
          {/* <button
            type="submit"
            className="bg-zinc-700 w-full"
            disabled={isSubmiting}
          >
            {isSubmiting ? "Saving" : "Crear Producto"}
          </button> */}
        </Form>
      )}
    </Formik>
  );
}
export default UProductoForm;
