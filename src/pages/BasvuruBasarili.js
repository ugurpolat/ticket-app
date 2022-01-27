import React, { useEffect, useState } from "react";
import "./BasvuruBasarili.css";
export default function BasvuruBasarili() {
  const data = JSON.parse(localStorage.getItem("applicationNumber"));

  const [number, setNumber] = useState();
  useEffect(() => {
    setNumber(data);
  }, [number]);
  return (
    <section className="user-page">
      <div className="user-page__user">
        <h2>Application successful</h2>
        <p>Application number : {number}</p>
      </div>
    </section>
  );
}
