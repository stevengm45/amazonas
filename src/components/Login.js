import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import {
  loginEmailPassAsync,
  loginFacebook,
  loginGoogle,
} from "../redux/actions/actionLogin";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("debe ser de tipo email ana@gmail.com")
    .min(5, "email muy corto")
    .max(50, "excede el máximo")
    .required("El email es obligatorio"),
  password: Yup.string()
    .min(5, "Mínimo 5 caracteres")
    .max(20, "Máximo 20 caracteres")
    .required("Password is required"),
});

function Login() {
  const dispatch = useDispatch();

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };

  const handleFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
    <div className="div-main-login">
      
      <img
        className="logo-login"
        src="https://res.cloudinary.com/dainl1ric/image/upload/v1650866521/AMAZONAS_rscnk3.png"
        alt="logo"
      ></img>
      <div>
        <h1 className="h1">Iniciar Sesión</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            dispatch(loginEmailPassAsync(values.email, values.password));
          }}
        >
          {({ errors, touched, handleReset }) => (
            <Form className="w-96">
              <div className="">
                <label className="block">Email</label>
                <Field
                  className="w-96 input-email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />{" "}
                {errors.email && touched.email ? (
                  <div className="">{errors.email}</div>
                ) : null}
              </div>
              <div>
                <label className="block">Password</label>
                <Field
                  className="w-96 input-passwd"
                  name="password"
                  type="password"
                  placeholder="Password"
                />{" "}
                {errors.password && touched.password ? (
                  <div className="">{errors.password}</div>
                ) : null}
              </div>
              <button className="login" type="submit">
                Login
              </button>
              <button
              type="button"
                className="login"
                onClick={handleReset}
              >
                Reset
              </button>
              <br/>
              <Link to="/signup" className="registrar">¿Eres nuevo en Amazonas?</Link>
            </Form>
          )}
        </Formik>
        <div className="social-media">
          <button className="login-google login-social" onClick={handleGoogle}>
          <img
                src="https://res.cloudinary.com/dainl1ric/image/upload/v1650869325/google-mas_mnhg2o.png"
                alt="logo"
                className="logo-social"
              ></img>
          </button>
          <button
            className="login-facebook login-social"
            onClick={handleFacebook}
          >
              <img
                src="https://res.cloudinary.com/dainl1ric/image/upload/v1650869325/facebook_lfphj7.png"
                alt="logo"
                className="logo-social"
              ></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;