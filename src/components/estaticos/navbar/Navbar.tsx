import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Box style={{ cursor: "pointer" }} >
                    <Typography variant="h5" color="inherit">
                        BlogPessoal
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            <Button color="inherit">home</Button>
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            <Button color="inherit">postagens</Button>
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            <Button color="inherit">temas</Button>
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            <Button color="inherit">cadastrar tema</Button>
                        </Typography>
                    </Box>
                    <Link to='/login' className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer", color: 'white' }}>
                            <Typography variant="h6" color="inherit">
                                <Button color="inherit">logout</Button>
                            </Typography>
                        </Box>
                    </Link>

                </Box>

            </Toolbar>
        </AppBar>
    );
}

export { Navbar }