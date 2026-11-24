import React from "react";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  let { id, name } = useParams();

  return (
    <div>
      <Menu />
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <h1>This is Products Page.</h1>
    </div>
  );
}
