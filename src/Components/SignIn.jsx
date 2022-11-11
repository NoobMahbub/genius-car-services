import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRive, useStateMachineInput } from 'rive-react';
import { useEffect, useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import SocialLogin from '../Pages/Login/SocialLogin/SocialLogin';
import { toast } from 'react-toastify';




const theme = createTheme();

const STATE_MACHINE_NAME = "State Machine 1";
let errorElement;
export default function SignIn({ checkLogin }) {
    const [
        signInWithEmailAndPassword, user, error
    ] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );


    const { rive, RiveComponent } = useRive({
        src: "520-990-teddy-login-screen.riv",
        autoplay: true,
        stateMachines: STATE_MACHINE_NAME
    })

    if (error) {

        errorElement =
            <p className='text-danger'>Invalid email and password combination</p>
    }

    const navigate = useNavigate();
    if (user) {
        navigate('/');
        toast(<div>
            <p className='text-success'>Logged in successfully</p>
        </div>);
    }

    useEffect(() => {
        setLook();
    }, [email])




    const stateSuccess = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'success'
    )
    const stateFail = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'fail'
    )
    const stateHandUp = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'hands_up'
    )

    const stateCheck = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'Check'
    )
    const stateLook = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'Look'
    )


    const triggerSuccess = () => {
        stateSuccess && stateSuccess.fire();


    }
    const triggerFail = () => {
        stateFail && stateFail.fire();


    }


    const setHangUp = (hangUp) => {
        stateHandUp && (stateHandUp.value = hangUp);
    }

    const setLook = () => {
        if (!stateLook || !stateCheck || !setHangUp) {
            return;
        }
        setHangUp(false)
        setCheck(true);
        let nbChars = 0;
        if (email) {
            nbChars = parseFloat(email.split('').length);
        }

        let ratio = nbChars / parseFloat(41);
        console.log("ratio " + ratio);

        let lookToSet = ratio * 100 - 25
        console.log("lookToSet " + Math.round(lookToSet));
        stateLook.value = Math.round(lookToSet);
    }
    const setCheck = (check) => {
        if (stateCheck) {
            stateCheck.value = check;
        }

    }




    // if (rive) {
    //     console.log(rive.contents);
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

        // console.log(error);
        // console.log(error?.message);
        // if (error) {
        //     return (
        //         <div>
        //             <p>Error: {error.message}</p>
        //         </div>
        //     );
        // }
        // if (loading) {
        //     return <p>Loading...</p>;
        // }
        // console.log(error)
        // console.log(error?.message)


    };


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div >
                        <RiveComponent
                            style={{ width: '300px', height: '300px' }} src="520-990-teddy-login-screen.riv" />
                    </div>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <div autoComplete="off">
                            <TextField
                                onFocus={() => setHangUp(false)}

                                onChange={(event) => setEmail(event.target.value)}
                                value={email}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus

                            />
                            <TextField
                                onChange={(event) => {
                                    setHangUp(true);
                                    setPassword(event.target.value);
                                    //setHangUp(false);
                                }}
                                //onFocus={() => setHangUp(true)}
                                //onE
                                value={password}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </div>

                        <div style={{ color: 'red' }}>{errorElement}</div>
                        <Button
                            onMouseOver={() => setHangUp(false)}
                            onFocus={() => setHangUp(false)}
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={() => {

                                setCheck(true);
                                if (checkLogin(email, password)) {
                                    triggerSuccess();
                                } else {
                                    triggerFail();
                                }

                            }}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>




                    </Box>
                </Box>
                <p className='text-black'>New to The Car Doctor? <Link className='text-primary text-decoration-none' to="/register">Create an Account</Link></p>
                <p className='text-black'>Forgotten password?<Link className='btn btn-link text-danger text-decoration-none' to="/reset">Reset Password</Link></p>
                <SocialLogin></SocialLogin>
                {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
            </Container>
        </ThemeProvider>
    );
}