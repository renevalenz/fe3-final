import React from "react";
import { useDoctorStates } from "../Components/utils/DoctorContext";
import "./main.css";
import avatar from "../Components/assets/images/doctor.jpg";
import { FaRegSadCry } from "react-icons/fa";

export const Favs = () => {
  const { doctorState } = useDoctorStates();
  console.log(doctorState);
  
  // Verificar si hay doctores favoritos
  const hasFavorites = doctorState.favs && doctorState.favs.length > 0;

  return (
    <main className="home">
      <div>
        <h1>
          <strong>Your favorite Doctors</strong>
        </h1>
      </div>
      <div className="card-grid">
        {!hasFavorites ? (
			
          <div className="no-favorites-message">
			<FaRegSadCry className="sadface"/>
            <p>No favorite doctors selected yet.</p>
          </div>
        ) : (
          // Renderizar las cards si hay doctores favoritos
          doctorState.favs.map((doctor) => (
            <div
              className="card2"
              key={doctor.id}
              style={{ maxWidth: "250px" }}>
              <img src={avatar} alt="" />
              <h3>Name: {doctor.name}</h3>
              <h4>User: {doctor.username}</h4>
              <h5>Id: {doctor.id}</h5>
            </div>
          ))
        )}
      </div>
    </main>
  );
};
