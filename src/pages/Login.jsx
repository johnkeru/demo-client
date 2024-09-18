import { Box, Typography, Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <Box sx={{ width: 300, m: 'auto', mt: 10 }}>
            <Typography variant='h4' mb={2}>
                Sign In
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    id="outlined-text"
                    label="Username"
                    placeholder='Enter Username'
                    fullWidth
                    {...register('username')}
                />
                <TextField
                    id="outlined-text"
                    label="Password"
                    placeholder='**********'
                    fullWidth
                    {...register('password')}
                />
                <Button type="submit" sx={{ mt: 5 }} variant='contained' fullWidth>Submit</Button>
            </form>
            <Link to='/register'>Don't have an account?</Link>
        </Box>
    )
}

export default Login