import React, { useState } from "react";

export default function ToDo() {

    const [list, setList] = useState([])
    const [item, setItem] = useState("");

    const addList = () => {
        list.push(item)
        setList([...list])
    }

    const removeItem = (i) => {
        list.splice(i,1)
        setList([...list]);
    }

    return(
        <div className="p-2">

            <table>
                <tbody>
                    {
                        list.length !==0 ? (
                            list.map((element, i) => {
                                return(
                                    <tr className="bg-taupe-800 text-amber-50" >
                                        <td>{element}</td>
                                        <td><button onClick={() => {removeItem(i)}} className="bg-blue-800 text-white px-3 py-1 m-1">Remove</button></td>
                                    </tr>
                                )
                            })
                        ) : (<tr></tr>)
                    }
                </tbody>
            </table>

            <input type="text" placeholder="Enter Item Name:" className="border-2 p-0.5 mr-2" onChange={(e) => {setItem(e.target.value)}} />

            <button className="bg-amber-950 text-white px-3 py-1" onClick={addList}>Add</button>
        </div>
    )
}