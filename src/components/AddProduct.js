import React from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { FileUp } from "../helpers/FileUp";
import { useForm } from "../hooks/useForm";
import { addAsync } from "../redux/actions/actionProducts";
import "../styles/AddProducts.css";

const AddProduct = () => {
  const dispatch = useDispatch()
  const [values, handleInputChange, reset] = useForm({
    id: "",
    name: "",
    price: "",
    description: "",
    color: "",
    marca: "",
    image: "",
    category: ""
  })

  const { name, price, description, category, color, marca } = values;

  const handleSubmit = (e) => {
    values.id = uuid();
    e.preventDefault();
    dispatch(addAsync(values));
    reset();
    e.target.reset();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    FileUp(file)
      .then((result) => {
        console.log(result);
        values.image = result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="div-add-products">
      <form onSubmit={handleSubmit} className="form-add-products">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="marca">Marca:</label>
          <input
            type="text"
            className="form-control"
            id="marca"
            name="marca"
            value={marca}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            className="form-control"
            id="color"
            name="color"
            value={color}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoria:</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={category}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripcion:</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Imagen:</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleFileChange}
          />
        </div>

        <button
          type="submit"
          className="btn-add-product"
        >
          Agregar
        </button>
      </form>
      <div>
      <img
                src="https://res.cloudinary.com/dainl1ric/image/upload/v1651096371/box_utfnpd.png"
                alt="logo"
                className="img-add-product"
              >
          </img>
      </div>
    </div>
  );
}

export default AddProduct;


