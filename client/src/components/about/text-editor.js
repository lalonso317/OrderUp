// import React, { useState } from "react"
// import { Editor } from "@tinymce/tinymce-react"

// const TextEditor = props => {
//   const [textInput, setTextInput] = useState("")
//   const handleEditorChange = e => {
//     console.log("Content was updated:", e.target.getContent())
//     setTextInput(e.target.getContent())
//   }

//   const handleSubmit = e => {
//     e.preventDefault()
//   }
//   return (
//     <div>
//       <Editor
//         apiKey="qoxuhh2xt2mjvsrqf8jfcv9uk8f6vxan1jpathyv8k90m0z6"
//         initialValue=""
//         init={{
//           height: 500,
//           menubar: false,
//           plugins: "lists",
//           toolbar: "numlist"
//         }}
//         onChange={handleEditorChange}
//       />
//       <button onClick={handleSubmit}>Submit</button>
//       <>{textInput}</>
//     </div>
//   )
// }

// export default TextEditor
