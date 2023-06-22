import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Login.css";
import CopyButton from "./CopyButton";
import { application } from "../Redux/Store";


const Login = () => {
  const [key, setKey] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (key === application.key) {
      navigate("/Weather", { replace: true });
      sessionStorage.setItem("key", key);
    } else {
      alert("hatalı key girdiniz");
    }
  };

  return (
    <div className="custom-bg d-flex align-items-center justify-content-center vh-100">
      <div className="d-grid gap-2">
        <input
          type="password"
          className="form-control"
          value={key}
          placeholder="Key Giriniz"
          onChange={(e) => setKey(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Login
        </button>
        <CopyButton />
      </div>
    </div>
  );
};

export default Login;
