import React, { useState } from "react";

export default function Form() {

    let [formObj, setFormObj] = useState({
        fName: "",
        lName: "",
        city: "",
        gender: ""
    })

    const inputOnChange = (property, value) => {
        setFormObj(prevObj => ({
            ...prevObj,
            [property]:value
        }))
    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(formObj);
    }

    return(

        <div>

            <form onSubmit={formSubmit}>
                <input onChange={(e) => {inputOnChange("fName", e.target.value)}} value={formObj.fName} type="text" placeholder="First Name" /> <br/>

                <input onChange={(e) => {inputOnChange("lName", e.target.value)}} value={formObj.lName} type="text" placeholder="Last Name "/> <br/>

                <select onChange={(e) => {inputOnChange("city", e.target.value)}} value={formObj.city} >
                    <option value="">Choose City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Tangail">Tangail</option>
                    <option value="Satkhira">Satkhira</option>
                </select>
                 <br/>

                <input onChange={(e) => {inputOnChange("gender", 'Male')}} checked={formObj.gender === "Male"} type="radio" name="gender" /> Male

                <input onChange={(e) => {inputOnChange("gender", 'Female')}} checked={formObj.gender === "Female"} type="radio" name="gender" /> Female <br/>

                <button>Submit</button>
            </form>
        </div>
    )
}