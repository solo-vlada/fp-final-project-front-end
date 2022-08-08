import * as React from 'react';
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField"

const style = {
    position: 'absolute',
    display: "flex",
    flexDirection: "column",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  export default function Login() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen}>Login</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography variant='h6' component="h4">
                Login
            </Typography>
            <TextField 
            required
            id="username"
            label="Username"
            size='small'
          />
            <TextField
            id="password"
            required
            label="Password"
            type="password"
            size='small'
          />
          <TextField
            id="email"
            required
            label="Email"
            type="email"
            size='small'
          />
          <Button variant='contained'>Login</Button>
          </Box>
        </Modal>
      </div>
    );
  }
