import React, { useState } from "react"
import { useUsers, useFullRecipe } from "../../hooks"
import UploadPictures from "../pictureUpload/upload-pictures"
import { withRouter } from "react-router-dom"

const EditProfile = props => {
  const user_name = props.match.params.username

  const { update, users } = useUsers()
  const user = users.find(user => user.username === user_name)

  const { RecipeImages } = useFullRecipe()
  // const realImages = [...RecipeImages, ...images]
  const [fname, setFName] = useState(`${user.firstName}`)
  const [lname, setLName] = useState(`${user.lastName}`)
  const [email, setEmail] = useState(`${user.email}`)
  const [tagline, setTagline] = useState(`${user.tagline}`)
  const [about, setAbout] = useState(`${user.about}`)

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
      update(email, fname, lname, tagline, about, user_name, URL)
      const redirect = () => props.history.push("/")
      redirect()
    }
  }

  return (
    <>
      <div className="userFormContainer">
        <div className="userUpdateMain">
          <h2 className="userProfile">{user_name}</h2>
          <form className="userProfileForm" onSubmit={handleEditProfile}>
            <UploadPictures />
            <br></br>
            <label className="profileLabel">First Name</label>
            <input
              className="profileInput"
              type="text"
              value={fname}
              onChange={e => setFName(e.target.value)}
              required
            ></input>
            <label className="profileLabel">Last Name</label>
            <input
              className="profileInput"
              type="text"
              value={lname}
              onChange={e => setLName(e.target.value)}
              required
            ></input>
            <label className="profileLabel">Email</label>
            <input
              className="profileInput"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            ></input>
            <label className="profileLabel">Tagline</label>
            <input
              className="profileInput"
              type="text"
              value={tagline}
              onChange={e => setTagline(e.target.value)}
              required
            ></input>
            <label className="profileLabel">About you</label>
            <textarea
              className="profileInputTextarea"
              value={about}
              onChange={e => setAbout(e.target.value)}
              required
            ></textarea>
            <button className="submitEdit" type="submit">
              Submit Edit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default withRouter(EditProfile)
