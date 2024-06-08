import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
  return (
    <div style={{height:'100vh'}}>
        <PrettyChatWindow
        projectId='a52e55ae-b89c-4401-a3d0-556d65dc8cd4'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />
    </div>
    )
}

export default ChatsPage