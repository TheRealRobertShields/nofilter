import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="7cf9a6a8-fecb-4a35-8372-f01f9d8bcb48"
            userName="Bobocado"
            userSecret="Secret050214!"
        />
    )
}

export default App