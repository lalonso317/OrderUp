import React, { useState } from "react"
import axios from "axios"
import { useFullRecipe } from "../../hooks"
const ImageUploader = props => {
  const { newImage, RecipeImages } = useFullRecipe()
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState("")
  const [imageCollection, setImageCollection] = useState([])
  console.log("this is the url array...", RecipeImages)

  //function to upload images
  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "default-preset")

    setLoading(true)
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dmmg147rn/image/upload/",
      {
        method: "POST",
        body: data
      }
    )
    const file = await res.json()
    const imageObj = { url: file.secure_url }
    newImage(imageObj)
    setLoading(false)
    // axios
    //   .get(
    //     "https://823552378968951:5MPzBSf8gSXBnc05eWzFCmA4vwo@api.cloudinary.com/v1_1/dmmg147rn/resources/image"
    //   )
    //   .then(resp => {
    //     setImageCollection(resp.data)
    //   })
    // DownloadImage()
  }

  // function to call the cloudinary database to get all picture URLs
  // const url =
  //   "https://823552378968951:5MPzBSf8gSXBnc05eWzFCmA4vwo@api.cloudinary.com/v1_1/dmmg147rn/resources/image"
  // const DownloadImage = () => {
  //   axios.post("/getImages", { url }).then(resp => {
  //     console.log(resp.data)
  //     setImageCollection(resp.data.resources)
  //   })
  // }

  console.log(image)
  return (
    <div className="submit-recipe-ipload-button">
      <div className="createTitle">Upload Image</div>
      <input
        className="createRHRecipeInput"
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <div>
          {/* <img src={image} style={{ width: "300px" }} /> */}
          {RecipeImages.map((image, i) => {
            return (
              <img
                key={image.public_id}
                src={image.url}
                style={{ width: "50px" }}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ImageUploader
