import { Box } from '@mui/material'
import { pink } from '@mui/material/colors'
import React, { useState } from 'react'
import ChatArea from '../components/chat/ChatArea'
import ListOfUsers from '../components/chat/ListOfUsers'
import Welcome from '../components/chat/Welcome'
import { useUser } from '../contexts/UserContext'

const Chats = () => {
    const { user } = useUser()
    const [selectedUser, setSelectedUser] = useState(null)
    // users to talk with: must get to the db users
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'username 1',
        },
        {
            id: 2,
            username: 'username 2',
        },
    ])

    return (
        <Box sx={{ background: pink[100], height: '80vh', mt: 5 }} display={'flex'} width='80%' m='auto'>
            {/* list of users */}
            <ListOfUsers users={users} setSelectedUser={setSelectedUser} />

            {
                selectedUser ?
                    <ChatArea selectedUser={selectedUser} /> :
                    <Welcome user={user} />
            }

        </Box>
    )
}

export default Chats