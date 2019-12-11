import React, { useState } from "react"
import { Button, Comment, Form, Header } from "semantic-ui-react"
import { useUsers, useAuth, useComments } from "../../hooks"
const CommentComponent = props => {
  const id = props.id
  console.log(id)
  const { users } = useUsers()
  const { usernameEA } = useAuth()
  const { addComment, comments } = useComments()
  const [text, setText] = useState("")
  const user = users.find(user => user.username == usernameEA)
  console.log(user)
  const time = new Date()
  console.log(time)

  const handleSubmit = e => {
    e.preventDefault()

    const comment = {
      avatar: user.RecipeImages,
      author: user.username,
      text: text,
      meta: time.getDate()
    }

    addComment(comment, id)
    setText("")
  }
  console.log(comments)
  return (
    <div>
      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>
        {comments.length === 0
          ? ""
          : comments.map(comment => {
              return (
                <div>
                  <Comment>
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
          <Form.TextArea onChange={e => setText(e.target.value)} />
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
