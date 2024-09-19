import { Box } from '@mui/material'
import React from 'react'

const ChatArea = ({ selectedUser }) => {
    return (
        <Box width={'100%'}>
            You selected: {selectedUser.username}
        </Box>
    )
}

export default ChatArea