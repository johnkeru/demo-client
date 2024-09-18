import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (<Box sx={{ width: 300, m: 'auto', mt: 10 }}>
        <Typography variant='h4' mb={2}>
            Sign Up
        </Typography>

        <TextField
            id="outlined-text"
            label="Username"
            placeholder='Enter Username'
            fullWidth
        />
        <TextField
            id="outlined-text"
            label="Password"
            placeholder='**********'
            fullWidth
        />
        <Button sx={{ mt: 5 }} variant='contained' fullWidth>Submit</Button>
        <Link to='/login'>Already have an account?</Link>
    </Box>
    )
}

export default Register