import React from "react";
import { Link } from "react-router-dom";
import { useDoctorStates } from "./utils/DoctorContext";
import "../Routes/main.css";
import avatar from "./assets/images/doctor.jpg";
import { FaStar } from 'react-icons/fa';

const Card = () => {
  const { doctorState, doctorDispatch } = useDoctorStates();

  const addFav = (doctor) => {
    const isDoctorInFavorites = doctorState.favs
      .map((favDoctor) => favDoctor.id)
      .includes(doctor.id);

    if (isDoctorInFavorites) {
      doctorDispatch({
        type: "REMOVE_FAV",
        payload: doctor,
      });
    } else {
      doctorDispatch({
        type: "ADD_FAV",
        payload: doctor,
      });
    }
  };

  return (
    <div className="card-grid">
      {doctorState.doctorList.map((doctor) => {
        const isFavorite = doctorState.favs.some((favDoctor) => favDoctor.id === doctor.id);

        return (
          <div className="card" key={doctor.id}>
            <Link to={"/detail/" + doctor.id}>
              <img src={avatar} alt={doctor.name} />
              <h3>{doctor.name}</h3>
              <h4>{doctor.username}</h4>
            </Link>
            <button
              onClick={() => addFav(doctor)}
              className="favButton"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {isFavorite ? (
                <FaStar color='gold' size={24} />
              ) : (
                <FaStar color='darkgray' size={24} />
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
