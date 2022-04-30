import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAsync, listAsync } from "../redux/actions/actionProducts";
import EditProduct from "./EditProduct";

function Main() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [enviarDatosModal, setEnviarDatosModal] = useState([]);

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(listAsync());
  }, [dispatch]);

  useEffect(() => {
    if (modal) {
      // setModal(false);
    } else {
      // setModal(true);
    }
  }, [modal]);

  const navigate = useNavigate();

  const edit = (product) => {
    setEnviarDatosModal(product);
    setModal(true);
  };

  return (
    <div className="">
      {products.map((product) => (
        <div
          className=""
          key={product.id}
        >
          <img
            className=""
            src={product.image}
            alt="product"
          />
          <div className="">
            <div className="">{product.name}</div>
            <div className="">$ {product.price}</div>
            <p className="">{product.description}</p>
          </div>
          <div className="">
            <span className="">
              {product.category}
            </span>
          </div>
          <div className="">
            <button
              className=""
              onClick={() => {
                localStorage.setItem("product", JSON.stringify(product));
                navigate("/description");
              }}
            >
              descripción
            </button>
            <button
              className=""
              onClick={() => edit(product)}
            >
              Editar
            </button>
            <button
              className=""
              onClick={() => {
                dispatch(deleteAsync(product.id));
              }}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
      {modal === true ? <EditProduct modal={enviarDatosModal} close={setModal} /> : ""}
    </div>
  );
}

export default Main;