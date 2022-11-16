// form auto complete done v 0.2
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useProductos } from "../../context/productos/ProductoContext";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProductoRequest } from "../../api/productos.api";
//TODO : CAMPOS AUTOMATICOS NO ENVIARLOS
// TODO MANEJO DE ERRORES VIA CACHE
function ProductoForm() {
  const params = useParams();
  // console.log(params);
  const navigate = useNavigate();
  const { createProducto, startCodProd, codProd, getProducto, updateProducto } =
    useProductos();
  const today = new Date().toJSON().slice(0, 10);
  const [producto, setProducto] = useState({
    codprod: "",
    codbar: "",
    nomprod: "",
    exiprod: "",
    venprod: "",
    undfra: "",
    pvenfra: "",
  });
  // useEffect se ejecuta de primero
  useEffect(() => {
    const loadProducto = async () => {
      if (params.codprod) {
        const producto = await getProducto(params.codprod);
        setProducto({
          codprod: producto.codprod,
          codbar: producto.codbar,
          nomprod: producto.nomprod,
          exiprod: producto.exiprod,
          venprod: producto.venprod,
          undfra: producto.undfra,
          pvenfra: producto.pvenfra,
        });
        console.log("undefined", "undefined", "undefined", producto.fecapa);
      }
    };
    loadProducto();
    startCodProd();
    // {!params.codprod ?  window.location.reload(false) : null}
  }, []);
  //   function renderMain (){
  //   if(productos.length > 0){
  //     return productos.map((producto) => (
  //       <ProductoCard key={producto.codprod} producto={producto} />
  //     ));
  //   } else {
  //     return <p>No hay productos</p>
  //   }
  // }
  // }, [codProd === -1 ]);
  // if ( producto. === undefined ) {
  if (params.codprod && producto.codprod === "") {
    // center text in div
    return (
      <div className="grid h-screen place-items-center ">
        <p className="text-2xl">Producto no encontrado</p>
      </div>
    );
  } else {
    if (codProd === -1) {
      return <div>Cargando...</div>;
    }
  }
  return (
    <>
      <div className="flex justify-between items-center">
        <h2>{params.codprod ? "Editar Producto" : "Crear Producto"}</h2>
        {!params.codprod ? null : (
          <button
            onClick={() => {
              confirm("Delete?", deleteProductoRequest(producto.codprod)),
                navigate("/");
            }}
          >
            Delete
          </button>
        )}
        {
          <>
            {/* TODO: promp Search  */}
            {/* <button onClick={() =>window.prompt("Do you really want to leave?")}>Exit</button> */}
            {/* <button
              onClick={() => {
                if (window.confirm("Delete the item?")) {
                  deleteProductoRequest(producto.codprod);
                }
              }}
            >
              Sup
            </button> */}
            <button
              onClick={() => {
                window.confirm("Delete the item?") &&
                  (deleteProductoRequest(producto.codprod), navigate("/"));
              }}
            >
              Supprimer
            </button>
          </>
        }
      </div>
      <hr className="mb-5" />
      <Formik
        initialValues={
          params.codprod
            ? producto
            : {
                codprod: codProd,
                codbar: codProd,
                nomprod: "",
                exiprod: "",
                venprod: "",
                fecapa: today,
                undfra: 1,
                pvenfra: 0,
              }
        }
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.codprod) {
            // updateProducto(params.codprod,values).then((res) => console.log(res));
            await updateProducto(params.codprod, values);
          } else {
            // # se envian datos pero al navigate se demora en actualizar y ya se tienen los ultimos productos en el array
            await createProducto(values);
            console.log(
              "🚀 ~ file: ProductoForm.jsx ~ line 53 ~ onSubmit={ ~ values",
              values
            );
          }
          actions.resetForm();
          navigate("/");
          // refresca los campos  despues de enviar
          // setProducto({
          //   codprod: "",
          //   codbar: "",
          //   nomprod: "",
          //   exiprod: "",
          // })
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          // console.log(values),
          // values.codprod = codProd,
          <Form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-y-2 items-center">
              {/* values.x establece valores desde initialValues */}
              {params.codprod
                ? null
                : codProd === values.codbar
                ? null
                : window.location.reload(false)}
              {/* {!params.codprod ?( codProd===values.codbar ? null: window.location.reload(false)) : null} */}
              <label>codprod</label>
              <input
                onChange={handleChange}
                type="number"
                name="codprod"
                placeholder="codprod"
                className="col-span-4"
                required
                readOnly
                value={values.codprod}
                // value={codProd}
              />
              <label>codbar</label>
              <input
                defaultValue={values.codbar}
                onChange={handleChange}
                type="number"
                name="codbar"
                placeholder="codbar"
                className="col-span-4"
                required
              />
              <label>nomprod</label>
              <input
                value={values.nomprod}
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
                value={values.exiprod}
                onChange={handleChange}
                type="number"
                name="exiprod"
                required
                placeholder="exiprod"
                className="col-span-4"
              />
              <label>venprod</label>
              <input
                value={values.venprod}
                onChange={handleChange}
                type="number"
                name="venprod"
                required
                placeholder="venprod"
                className="col-span-4"
              />
              <label>undfra</label>
              <input
                value={values.undfra}
                onChange={handleChange}
                type="number"
                name="undfra"
                placeholder="undfra"
                className="col-span-4"
                required
              />
              <label>pvenfra</label>
              <input
                value={values.pvenfra}
                onChange={handleChange}
                type="number"
                name="pvenfra"
                placeholder="pvenfra"
                className="col-span-4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-zinc-700 w-full"
              disabled={isSubmitting}
              // onClick={() => window.location.reload(false)}
            >
              {isSubmitting ? "Cargando..." : "Crear Producto"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default ProductoForm;
