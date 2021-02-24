import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData"

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event){
      // console.log(event.target.value)
      event.preventDefault()
      setFirstName(event.target.value)
  }

  function handleLastNameChange(event){
      // console.log(event.target.value)
      event.preventDefault()
      setLastName(event.target.value)
  }

  return (
    // <form>
    //   <input onChange={handleFirstNameChange} type="text" value={firstName} />
    //   <input onChange={handleLastNameChange} type="text" value={lastName} />
    //   <button type="submit">Submit</button>
    // </form>

      <div>
        <Form 
          firstName={firstName}
          lastName={lastName}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
        />
        <DisplayData firstName={firstName} lastName={lastName}/>
      </div>

  );
}

export default ParentComponent;
