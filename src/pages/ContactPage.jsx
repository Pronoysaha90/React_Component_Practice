import React from "react";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";

export default function ContactPage() {
  let { number } = useParams();

  return (
    <div>
      <Menu />
      <p>Number: {number}</p>
      <h1>This is Contact Page.</h1>
    </div>
  );
}
