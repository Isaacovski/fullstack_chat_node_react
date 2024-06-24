import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
  return (
    <div style={{height:'100vh'}}>
        <PrettyChatWindow
        projectId='2a9ad344-208d-4555-acd0-3bddcdcebc32'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />
    </div>
    )
}

export default ChatsPage