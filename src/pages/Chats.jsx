import React, { useState } from 'react'
import { useUser } from '../contexts/UserContext'
import { Box, Typography } from '@mui/material'
import ListOfUsers from '../components/chat/ListOfUsers'
import { pink } from '@mui/material/colors'
import Welcome from '../components/chat/Welcome'
import ChatArea from '../components/chat/ChatArea'

const Chats = () => {
    const { user } = useUser()
    const [selectedUser, setSelectedUser] = useState(null)
    // users to talk with
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