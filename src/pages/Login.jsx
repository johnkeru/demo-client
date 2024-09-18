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
        // console.log(data)
    }

    console.log(errors)
    return (
        <Box sx={{ width: 300, m: 'auto', mt: 10 }}>
            <Typography variant='h4' mb={2}>
                Sign In
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    error={errors?.username?.message ? true : false}
                    id="outlined-text"
                    label="Username"
                    placeholder='Enter Username'
                    fullWidth
                    {...register('username', { required: 'Username is required', })}
                />
                <Typography color='error'>{errors?.username?.message}</Typography>
                <TextField
                    error={errors?.password?.message ? true : false}
                    id="outlined-text"
                    label="Password"
                    placeholder='**********'
                    fullWidth
                    {...register('password', { required: 'Password is required', })}
                />
                <Typography color='error'>{errors?.password?.message}</Typography>
                <Button type="submit" sx={{ mt: 5 }} variant='contained' fullWidth>Submit</Button>
            </form>
            <Link to='/register'>Don't have an account?</Link>
        </Box>
    )
}

export default Login