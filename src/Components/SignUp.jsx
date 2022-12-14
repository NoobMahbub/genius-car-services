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
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import SocialLogin from '../Pages/Login/SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import useLoading from './hooks/useLoading.jsx';
import Skeleton from 'react-loading-skeleton';
import { Avatar } from '@mui/material';

const theme = createTheme();

const STATE_MACHINE_NAME = "State Machine 1";


let errorElement;

export default function Register({ checkLogin }) {
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const { rive, RiveComponent } = useRive({
        src: "520-990-teddy-login-screen.riv",
        autoplay: true,
        stateMachines: STATE_MACHINE_NAME
    })

    if (error) {

        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>

    }

    const navigate = useNavigate();
    if (user) {
        navigate('/');
        toast(<div>
            <p className='text-success'>Registered Successfully</p>
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

        // eslint-disable-next-line no-console
        createUserWithEmailAndPassword(email, password);
        // console.log("email " + email);
        // console.log("password " + password);
        // console.log("Confirm Password " + confirmPassword);

    };
    const [Loading] = useLoading();

    return (

        Loading? <div className='container'>
        
        <center>
        <Skeleton className='mt-3' variant="rounded" width={300} height={220}>
        <Avatar />
      </Skeleton>
            <Skeleton className='m-5' variant="rectangular" width={400} height={500} />
            <Skeleton className='mt-3' variant="rounded" width={300} height={50} />
            <Skeleton className='mt-3' variant="rounded"  width={300} height={50}/>
            
        
        </center>
        </div> :

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
                            <TextField
                                onChange={(event) => {
                                    setHangUp(true);
                                    setConfirmPassword(event.target.value);
                                    //setHangUp(false);
                                }}
                                //onFocus={() => setHangUp(true)}
                                //onE
                                value={confirmPassword}
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
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
                                    triggerSuccess()
                                } else {
                                    triggerFail();
                                }
                            }}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>

                        <p className='text-black'>Already Have an Account? <Link className='text-danger text-decoration-none' to="/login">Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </Box>
                </Box>
                {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
            </Container>
        </ThemeProvider>
    );
}