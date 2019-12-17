import React, { useState } from "react"
import { Button, Comment, Form, Header } from "semantic-ui-react"
import { useUsers, useAuth, useComments, useSingleRecipe } from "../../hooks"
const CommentComponent = props => {
  const id = props.id
  const { users } = useUsers()
  const { usernameEA, isAuthenticated } = useAuth()
  const { addComment, comments } = useComments()
  const { SpecificComments, getSingleRecipeComment } = useSingleRecipe()
  const [text, setText] = useState("")
  const user = users.find(user => user.username === usernameEA)
  const time = new Date()


  const handleSubmit = e => {
    e.preventDefault()

    if (isAuthenticated) {
      const comment = {
        avatar: user.RecipeImages,
        author: user.username,
        text: text,
        meta: time.getDate()
      }
      addComment(comment, id)
      setTimeout(() => {
        getSingleRecipeComment(id)
      }, 2000)

      setText("")
    } else {
      alert("please login or register to make a comment")
      setText("")
    }
  }


  return (
    <div>
      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>
        {SpecificComments.length === 0
          ? ""
          : SpecificComments.map(comment => {
              return (
                <div className="comment-container">
                  <Comment style={{ color: "white" }} className="comments">
                    <Comment.Avatar src={comment.avatar} />
                    <Comment.Content>
                      <Comment.Author as="a">{comment.author}</Comment.Author>
                      <Comment.Metadata>
                        <div>{comment.meta}</div>
                      </Comment.Metadata>
                      <Comment.Text>{comment.text}</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </div>
              )
            })}
        <Form reply onSubmit={handleSubmit}>
          <Form.TextArea value={text} onChange={e => setText(e.target.value)} />
          <Button
            type="submit"
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </Comment.Group>
    </div>
  )
}
export default CommentComponent
