import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { editAsync } from "../redux/actions/actionProducts";
import "../styles/Modal.css";

function EditProduct({ modal, close }) {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    id: modal.id,
    name: modal.name,
    price: modal.price,
    description: modal.description,
  });

  const handleClose = () => {
    // popUp.classList.remove("show");
    // console.log(popUp)
    close(false)
    // popUp.classList.add("hidden");
    reset();
  };

  const { id, name, price, description } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editAsync(id, values));
    handleClose();
  };

  return (
    <div className="popUpBg">
      <div className="popUp ">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="price">Precio</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="description">Descripcion</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={description}
              onChange={handleInputChange}
            />
          </div>
          <div className="button-container">
            <button
              type="submit"
              className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Editar
            </button>
            <button
              type="button"
              className="m-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleClose}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;