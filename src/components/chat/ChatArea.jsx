import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const ChatArea = ({ selectedUser }) => {
    return (
        <Box width={'100%'} sx={{ background: 'gray' }}>
            {/* header */}
            <Typography variant='h4'>{selectedUser.username}</Typography>
            {/* chat area */}
            <Box height='82.5%' sx={{ background: 'lightgray' }}>
                <Typography variant='body2'>
                    Hello,
                </Typography>
            </Box>
            {/* input & send button */}
            <Box display='flex' sx={{ background: 'white' }}>
                <TextField fullWidth placeholder='Send message...' />
                <Button variant='contained'>Send</Button>
            </Box>
        </Box>
    )
}

export default ChatArea