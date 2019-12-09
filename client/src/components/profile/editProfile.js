import React, { useState } from "react"
import { useUsers } from "../../hooks"

const EditProfile = props => {
  const username = props.match.params.username
  const { update } = useUsers()
  const [fname, setFName] = useState("")
  const [lname, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [tagline, setTagline] = useState("")
  const [about, setAbout] = useState("")

  const handleEditProfile = e => {
    e.preventDefault()
    if (
      fname == "" ||
      lname == "" ||
      email == "" ||
      tagline == "" ||
      about == ""
    ) {
      return alert("Fields Cannots be Blank")
    } else {
      update(username, fname, lname, email, tagline, about)
    }
  }

  return (
    <>
      <div className="userFormContainer">
        <h2 className="userProfile">{username}</h2>
        <form className="userProfileForm" onSubmit={handleEditProfile}>
          <label className="profileLabel">First Name</label>
          <input
            className="profileInput"
            type="text"
            value={fname}
            onChange={e => setFName(e.target.value)}
          ></input>
          <label className="profileLabel">Last Name</label>
          <input
            className="profileInput"
            type="text"
            value={lname}
            onChange={e => setLName(e.target.value)}
          ></input>
          <label className="profileLabel">Email</label>
          <input
            className="profileInput"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></input>
          {/* <label>Display Name</label>
        <input
          type="text"
          value={display}
          onChange={e => setDisplay(e.target.value)}
        ></input> */}
          <label className="profileLabel">Tagline</label>
          <input
            className="profileInput"
            type="text"
            value={tagline}
            onChange={e => setTagline(e.target.value)}
          ></input>
          <label className="profileLabel">About you</label>
          <textarea
            className="profileInputTextarea"
            value={about}
            onChange={e => setAbout(e.target.value)}
          ></textarea>
          <button className="submitEdit" type="submit">
            Submit Edit
          </button>
        </form>
      </div>
    </>
  )
}

export default EditProfile
