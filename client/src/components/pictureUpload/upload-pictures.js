import React, { useState } from "react"
import { useFullRecipe } from "../../hooks"

const ImageUploader = props => {
  const { newImage, RecipeImages } = useFullRecipe()

  const [loading, setLoading] = useState("")

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
  }

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
          {RecipeImages.map((image, i) => {
            return (
              <img
                key={image.public_id}
                src={image.url}
                style={{ width: "50px" }}
                alt=""
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ImageUploader
