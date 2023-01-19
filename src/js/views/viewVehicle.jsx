
import React,{useEffect,useState } from "react";
// import { useParams } from "react-router";
import "../../styles/home.css";
import { useParams } from "react-router-dom";

export const ViewVehicle = () => {
  
  const [detalleVehiculo, setdetalleVehiculo] = useState([]);
const params= useParams()
  function obtenerInfoDeUnVehiculo() {
    fetch("https://swapi.dev/api/vehicle/"+params.theid)
      .then((res) => res.json())
      .then((data) => setdetalleVehiculo(data))
      .catch((err) => console.error(err));
  }
  console.log(detalleVehiculo);
  console.log(params.theid);
  
  useEffect(() => {
    obtenerInfoDeUnVehiculo() 
},[])

  return(
<div>
  <div className="card mb-3 border-0" >
  <div className="row g-0">
    <div className="col-md container">
      <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+(params.theid)+".jpg"} style={{ width:"800px", height: "600px" }} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{detalleVehiculo.name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<div>
<hr style={{ height: "5px",color: "red" }} />
</div>
<div>
  <p>aca va la tabla</p>
</div>

</div>

);
}