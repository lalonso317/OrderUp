import React, { useState } from "react"
import { useUsers, useFullRecipe } from "../../hooks"
import UploadPictures from "../pictureUpload/upload-pictures"

const EditProfile = props => {
  const username = props.match.params.username
  const { update } = useUsers()
  const { RecipeImages } = useFullRecipe()
  const [fname, setFName] = useState("")
  const [lname, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [tagline, setTagline] = useState("")
  const [about, setAbout] = useState("")
  console.log("username from edit profile", username)

  const handleEditProfile = e => {
    e.preventDefault()
    const URL = RecipeImages[0].url
    if (
      fname === "" ||
      lname === "" ||
      email === "" ||
      tagline === "" ||
      about === ""
    ) {
      return alert("Fields Cannots be Blank")
    } else {
      update(email, fname, lname, tagline, about, username, URL)
    }
  }

  return (
    <>
      <div className="userFormContainer">
        <h2 className="userProfile">{username}</h2>
        <form className="userProfileForm" onSubmit={handleEditProfile}>
          <UploadPictures />
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
