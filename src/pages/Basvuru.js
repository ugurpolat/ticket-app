import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../context/UserContext";
import "./BasvuruBasarili.css";
export default function Basvuru() {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  const user = users.find((u) => u.applicationNumber == id);

  return (
    <section className="user-page">
      <div className="user-page__user">
        <h3>{id} Application Number</h3>
        <div className="user-page__info">
          <img className="user-img" src={user.attach} alt="user-picture" />
          <h4>Name: {user.name} </h4>
          <h4>Surname: {user.surname}</h4>
          <h4>Age: {user.age}</h4>
          <h4>TC: {user.tc}</h4>
          <h4>Address: {user.address}</h4>
          <h4>Reason Of Application: {user.reasonOfApp}</h4>
          <h4>Application Date : {user.applicationDate}</h4>
          <h4>Application Status: {user.applicationStatus}</h4>
        </div>
      </div>
    </section>
  );
}
