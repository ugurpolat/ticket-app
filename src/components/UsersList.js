import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./UsersList.css";
export default function UsersList() {
  const { users } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <section className="admin-page">
      <div className="application-list__box">
        <div>
          <table className="flex-table">
            <thead className="flex-table__thead">
              <tr className="flex-table__thead-tr">
                <th>Users</th>
                <th>Date</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <td>{user.name}</td>
                  <td>{user.applicationDate}</td>
                  <td>
                    <button
                      className="button button-small"
                      onClick={() => navigate(`/admin/basvuru/${user.id}`)}
                    >
                      Show
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
