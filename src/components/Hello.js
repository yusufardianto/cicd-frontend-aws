import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const Home = () => {
  const [hello, getHello] = useState([]);

  useEffect(() => {
    getHello();
  }, []);

  return <h1>hello selasa</h1>;
  //   const getHello = async () => {
  //     const response = await axios.get("http://localhost:5000/helloo");
  //     setUser(response.data);
  //   };
};
export default Home;
