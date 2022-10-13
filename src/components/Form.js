import React, { useState } from "react";
import Submissions from './Submissions';

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submissionsList, setSubmissions] = useState("")
console.log(submissionsList)
  function submitName(e) {
    e.preventDefault()
    const newSubmissions = [...submissionsList, `${firstName} ${lastName}`]
    setSubmissions(newSubmissions)
    setFirstName("")
    setLastName("")
    console.log(submisionsList)
  }

const handleFname = (value) => setFirstName(value)
const handleLname = (value) => setLastName(value)

  return (
    <div>
      <form onSubmit={e => submitName(e)}>
        <input type="text" onChange={e => handleFname(e.target.value)} value={firstName} />
        <input type="text" onChange={e => handleLname(e.target.value)} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      <p>Who Have Been Here:</p>
      <Submissions list={submissionsList}/>
    </div>
  );
}

export default Form;
