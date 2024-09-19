import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const ChatArea = ({ selectedUser }) => {
    return (
        <Box width={'100%'} sx={{ background: 'gray' }}>
            {/* header */}
            <Typography variant='h5' sx={{ p: 1, color: 'white' }}>{selectedUser.username}</Typography>
            {/* chat area */}
            <Box sx={{ background: 'lightgray', p: 1, height: '80%', width: '100%' }}>
                <Typography sx={{ background: 'black', px: 2, py: 1, color: 'white', borderRadius: 5, width: 'fit-content' }} variant='body2'>
                    Hello,
                </Typography>

                <Typography sx={{ background: 'blue', px: 2, ml: 'auto', py: 1, color: 'white', borderRadius: 5, width: 'fit-content' }} variant='body2'>
                    awefawefawefawe
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