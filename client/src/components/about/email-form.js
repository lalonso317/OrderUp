import React, { useState } from "react"
import { withRouter } from "react-router-dom"
const EmailForm = props => {
  console.log(props)
  const [feedback, setFeedback] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = () => {
    const templateId = "template_hTGPIrVN"
    sendFeedback(templateId, {
      message_html: feedback,
      from_name: name,
      reply_to: email
    })
    setFeedback("")
    setName("")
    setEmail("")
    const redirecting = () => props.history.push("/")
    redirecting()
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!")
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      )
  }
  return (
    <form className="contact-form">
      <h1>Let us know how we are doing!</h1>
      <div className="contact-form-boxes">
        <label>Name</label>
        <input type="text" required onChange={e => setName(e.target.value)} />
        <label>Email</label>
        <input type="email" required onChange={e => setEmail(e.target.value)} />
        <label>Your Message</label>
        <textarea
          id="test-mailing"
          name="test-mailing"
          onChange={e => setFeedback(e.target.value)}
          placeholder=""
          required
          value={feedback}
          style={{ width: "100%", height: "100px" }}
        />
      </div>
      <input
        type="button"
        value="Submit"
        className="contact-form-submit-button"
        onClick={handleSubmit}
      />
    </form>
  )
}

export default withRouter(EmailForm)
