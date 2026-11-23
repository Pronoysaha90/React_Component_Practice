import React, { useRef } from "react";

export default function New() {

  let apiData = useRef(null);
  let des = useRef();
  let n = useRef();

  const callAPI = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");

    apiData.current = await res.json();
  }

  const showData = () => {
    des.current.innerText = JSON.stringify(apiData.current)
  }

  const showData2 = () => {
    n.current.innerText = JSON.stringify(apiData.current)
  }

  return(
    <div>
      <p ref={des}></p>
      <button onClick={callAPI} > Call API </button>
      <button onClick={showData} > Show Data </button>
      <p ref={n} ></p>
      <button onClick={showData2} > Show n Data </button>
    </div>
  )
}