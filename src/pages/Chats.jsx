import React, { useState } from 'react'
import { useUser } from '../contexts/UserContext'
import { Box, Typography } from '@mui/material'
import ListOfUsers from '../components/chat/ListOfUsers'
import { pink } from '@mui/material/colors'

const Chats = () => {
    const { user } = useUser()
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
        <Box sx={{ background: pink[100] }} display={'flex'} width='80%' m='auto'>
            {/* list of users */}
            <Box>
                <ListOfUsers users={users} />
            </Box>

            {/* if no user selected */}
            <Box width={'100%'} display={'flex'} alignItems='center' justifyContent='center'>
                <Typography variant='h3'>
                    Welcome, {user?.username}
                </Typography>
            </Box>

            {/* if selected */}
        </Box>
    )
}

export default Chats