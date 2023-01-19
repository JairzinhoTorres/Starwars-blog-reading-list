
import React,{useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = ({ nombrePersonaje, generoPersonaje,ColorOjosPersonaje,id }) => {

const{actions}=useContext(Context)


// function obtenerInfoPersonajes() {
//     fetch("https://swapi.dev/api/people/"+id)
//       .then((res) => res.json())
//       .then((data) => setPersonajes(data.results))
//       .catch((err) => console.error(err));
//   }
// useEffect(() => {
//     obtenerInfoPersonajes
// },[])
   

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://funkilandia.com/wp-content/uploads/2022/08/funkilandia_img_285.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title"> {nombrePersonaje} </h5>
        <p className="card-title"> {generoPersonaje} </p>
        <p className="card-title">{ColorOjosPersonaje}</p>
        <p className="card-text mt-2"> 10, 00 US$. </p>
        <Link to={"/viewCharacters/"+id} className="btn bg-dark text-white"> Detalles del personaje:{id}</Link>
        <button className="btn bg-warning text-dark border border-0 mt-3" onClick={()=>actions.agregarFavorito(nombrePersonaje)}>
          <i className="fa fa-heart"> </i>
          </button>
      </div>
    </div>
  );
};


