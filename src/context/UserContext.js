import Spinner from "../helpers/Spinner";
import React from "react";
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
const FIVE_MB = 5120;
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [baseImage, setBaseImage] = useState("");
  useEffect(() => {
    fetchUsers();
  }, []);

  // fetch users
  const fetchUsers = async () => {
    const response = await fetch(
      "https://61e2ed2c3050a10017682308.mockapi.io/api/users"
    );
    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };

  //get user applicationNumber
  const getApplication = async (aplicatioNumber) => {
    const response = await fetch(
      `https://61e2ed2c3050a10017682308.mockapi.io/api/users?applicationNumber=${aplicatioNumber}`
    );
    const searchData = await response.json();
    return searchData;
  };

  //get user
  const getUser = async (userId) => {
    const response = await fetch(
      `https://61e2ed2c3050a10017682308.mockapi.io/api/users/${userId}`
    );
    const searchData = await response.json();
    return searchData;
  };

  // Add user
  const addUser = async (newUser) => {
    const response = await fetch(
      "https://61e2ed2c3050a10017682308.mockapi.io/api/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }
    );

    const data = await response.json();

    // newTodo.id = uuidv4();
    setUsers([data, ...users]);
  };

  // update user
  const updateUser = async (id, updUser) => {
    if (
      window.confirm(
        `Are you sure you want to update ${
          updUser.name + " " + updUser.surname
        }  user?`
      )
    ) {
      const response = await fetch(
        `https://61e2ed2c3050a10017682308.mockapi.io/api/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updUser),
        }
      );

      const data = await response.json();
      setUsers(
        users.map((user) => (user.id === id ? { ...user, ...data } : user))
      );
    }
  };

  // delete user
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await fetch(
        `https://61e2ed2c3050a10017682308.mockapi.io/api/users/${id}`,
        {
          method: "DELETE",
        }
      );
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // img to base64

  const uploadImage = async (e) => {
    const file = e.target.files[0];

    const base64 = await convertBase64(file);

    const imageSize =
      base64.length * (3 / 4) - (base64[base64.length - 2] == "=" ? 2 : 1);

    imageSize < FIVE_MB ? setBaseImage(base64) : setBaseImage("");
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <UserContext.Provider
      value={{
        users,
        baseImage,
        addUser,
        updateUser,
        getApplication,
        deleteUser,
        getUser,
        uploadImage,
      }}
    >
      {!isLoading ? children : <Spinner />}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UserContext;
