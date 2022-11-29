import React from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import './Login.css';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' style={{ backgroundColor: "#212121" }}>
            <Grid alignItems='center' xs={6}>
                <Box padding={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ borderColor: "purple", color: "purple", fontWeight: 'bold' }}>Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth ></TextField>
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button variant="outlined" style={{ borderColor: "purple", backgroundColor: "#212121", color: "purple" }}>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ borderColor: "purple", color: "purple" }}>
                                Não tem uma conta?
                            </Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' style={{ color: "purple", fontWeight: 'bold' }}>
                            Cadastre-se
                        </Typography>
                    </Box>

                </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://i.imgur.com/d5bMdDJ.jpg)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>


            </Grid>
        </Grid>
    )
}

export default Login;