import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required />
                <TextField label='Email' placeholder='Enter email' fullWidth required />
                <TextField label='Password' placeholder='Enter Password' fullWidth required />
                <TextField label='Confirm Password' placeholder='Enter password' type='password' fullWidth required />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
                <Typography > Are you already registered?
                    <NavLink style={{ textDecoration: 'none' }} to="/login">
                        Sign In
                        </NavLink>
                        </Typography>
                    </Paper>
                </Grid>
                );
};

export default Register;