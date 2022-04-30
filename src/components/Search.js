import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteAsync, listAsync } from "../redux/actions/actionProducts";
import EditProduct from "./EditProduct";

function Search() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [enviarDatosModal, setEnviarDatosModal] = useState([]);

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(listAsync());
  }, [dispatch]);

  const navigate = useNavigate();
  const params = useParams();
  //   const { search } = useLocation();
  //   const query = new URLSearchParams(search);
  //   const searchQuery = query.get("search");
  // console.log(params.search);

  const edit = (product) => {
    setModal(true);
    setEnviarDatosModal(product);
  };

  return (
    <div className="flex flex-wrap justify-center items-center">
      {products.map((product) => {
        if (product.name.toLowerCase().includes(params.search.toLowerCase())) {
          return (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg m-4"
              key={product.id}
            >
              <img
                className="w-full"
                src={product.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <div className="font-semibold text-xl mb-2">
                  $ {product.price}
                </div>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {product.category}
                </span>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button
                  className="m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    localStorage.setItem("product", JSON.stringify(product));
                    navigate("/description");
                  }}
                >
                  descripción
                </button>
                <button
                  className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => edit(product)}
                >
                  Editar
                </button>
                <button
                  className="m-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => dispatch(deleteAsync(product.id))}
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      {modal === true ? (
        <EditProduct modal={enviarDatosModal} close={setModal} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;