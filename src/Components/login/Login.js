import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import GoogleButton from 'react-google-button'
import { NavLink } from 'react-router-dom';


const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField label='Username' placeholder='Enter username' fullWidth required />
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                    <Typography variant='h6'>Or</Typography>
                    <GoogleButton
                        onClick={() => { console.log('Google button clicked') }}
                    />
                    <Typography > Do you have an account?
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            Sign Up
                        </NavLink>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    );
};

export default Login;