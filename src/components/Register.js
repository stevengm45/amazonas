import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { registerAsync } from "../redux/actions/actionRegister";


function Register() {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { email, name, password1, password2 } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(registerAsync(email, password1, name));
    reset();
  };

  return (
    <div className="div-main-login">
      <img
        className="logo-login"
        src="https://res.cloudinary.com/dainl1ric/image/upload/v1650866521/AMAZONAS_rscnk3.png"
        alt="logo"
      ></img>
      <div>
        <h1 className="h1">Registrarse</h1>

        <form className="" onSubmit={handleSubmit}>
          <div className="">
            <label className="block">Name</label>
            <input
              className="w-96 input-name"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block">Email</label>
            <input
              className="w-96 input-email"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block">Password</label>
            <input
              className="w-96 input-passwd"
              type="password"
              name="password1"
              placeholder="Password"
              value={password1}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block">Password</label>
            <input
              className="w-96 input-passwd"
              type="password"
              name="password2"
              placeholder="Password"
              value={password2}
              onChange={handleInputChange}
            />
          </div>
          <Link to="/login" className="registrar">¿Ya tienes cuenta?</Link>
          <button className="login mt-4" type="submit">
            SingUp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;