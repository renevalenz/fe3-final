import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDoctorStates } from "../Components/utils/DoctorContext";
import axios from "axios";
import "../Routes/main.css";
import avatar from "../Components/assets/images/doctor.jpg";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { doctorState, doctorDispatch } = useDoctorStates();
  const { id } = useParams();
  const urlDoctorId = `https://jsonplaceholder.typicode.com/users/` + id;

  useEffect(() => {
    axios(urlDoctorId)
      .then((res) => {
        doctorDispatch({
          type: "GET_DOCTOR_DETAIL",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Detail Doctor</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div
        className="card-grid"
        style={{ display: "grid", placeItems: "center" }}
      >
        {doctorState.doctorDetail.id && (
          <div
            className="card2"
            style={{
              maxWidth: "350px",
            }}
          >
            <img
              src={avatar}
              key={doctorState.doctorDetail.id}
              alt="img-avatar"
            />
            <h4>Name: {doctorState.doctorDetail.name}</h4>
            <h5>Email: {doctorState.doctorDetail.email}</h5>
            <h5>Phone: {doctorState.doctorDetail.phone}</h5>
            <h5>Website: {doctorState.doctorDetail.website}</h5>
            <Link to={"/"}>
              <button>Back to Home</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
