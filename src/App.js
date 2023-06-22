import "bootstrap/dist/css/bootstrap.css";
import MyRouter from "./Router/MyRouter";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { application } from "./Redux/Store";
function App() {
  const navigate = useNavigate();
  const Key = sessionStorage.getItem("key");
  useEffect(() => {
    if (Key === application.key) {
      navigate("/Weather", { replace: true });
    } else {
      navigate("/Login", { replace: true });
    }
  }, [Key,navigate]);
  return (
    <div className="App">
      <MyRouter />
    </div>
  );
}
export default App;
