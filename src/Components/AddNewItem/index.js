// import React, { useState } from 'react';
// import axios from 'axios';

// //MATERIAL UI
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField"
// import FormControl from "@mui/material/FormControl"
// import MenuItem from "@mui/material/MenuItem"
// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import Select from '@mui/material/Select';

// const style = {
//     position: 'absolute',
//     display: "flex",
//     flexDirection: "column",
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 300,
//     bgcolor: 'background.paper',
//     border: '1px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };
  
// export default function AddNewItem() {
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     const [itemName, setItemName] = useState('')
    
//     //Add heroku endpoint 
//     const url = ''


//     // const handleSubmit = async (e) => {
//     //     e.preventDefault()
//     //     try {
//     //         const resp = await axios.post(url, {username: username, email: email, password: password, location: location});
//     //         console.log(resp.data);
//     //         } catch(error) {
//     //             console.log(error.response)
//     //         }  
//     // }
  
//     return (
//         <>
//         <Button onClick={handleOpen} sx={{mb:1}}>Add Item</Button>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style} component="form">
//           <FormControl sx={{ m: 1, minWidth: 120 }}>
//               <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
//               <Select
//                 native
//                 value={age}
//                 onChange={handleChange}
//                 input={<OutlinedInput label="Age" id="demo-dialog-native" />}
//               >
//                 <option aria-label="None" value="" />
//                 <option value={10}>Ten</option>
//                 <option value={20}>Twenty</option>
//                 <option value={30}>Thirty</option>
//               </Select>
//             </FormControl>
//             <FormControl sx={{ m: 1, minWidth: 120 }}>
//               <InputLabel id="demo-dialog-select-label">Age</InputLabel>
//               <Select
//                 labelId="demo-dialog-select-label"
//                 id="demo-dialog-select"
//                 value={age}
//                 onChange={handleChange}
//                 input={<OutlinedInput label="Age" />}
//               >
//                 <MenuItem value="">
//                   <em>None</em>
//                 </MenuItem>
//                 <MenuItem value={10}>Ten</MenuItem>
//                 <MenuItem value={20}>Twenty</MenuItem>
//                 <MenuItem value={30}>Thirty</MenuItem>
//               </Select>
//             </FormControl>
//             <Typography variant='h6' component="h4">
//                 Add New Item
//             </Typography>
//             {/* <TextField 
//             required
//             id="itemName"
//             name="itemName"
//             label="itemName"
//             size='small'
//             sx={{mb:1}}
//             onChange={(e) => setItemName(e.target.value)}
//           />
//             <TextField
//             id="password"
//             required
//             name="password"
//             label="Password"
//             type="password"
//             size='small'
//             sx={{mb:1}}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//             <TextField
//             id="repeatPassword"
//             name="repeatPassword"
//             required
//             label="Re-type Password"
//             type="password"
//             size='small'
//             sx={{mb:1}}
//             onChange={(e) => setRepeatPassword(e.target.value)}
//           />
//           <TextField
//             id="email"
//             name="email"
//             required
//             label="Email"
//             type="email"
//             size='small'
//             sx={{mb:1}}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//             <TextField
//             id="location"
//             name="location"
//             required
//             label="Location"
//             size='small'
//             sx={{mb:1}}
//             onChange={(e) => setLocation(e.target.value)}
//           /> */}
//           <Button variant='contained' onClick={handleSubmit}>Add image</Button>
//           <Button variant='contained' onClick={handleSubmit}>Submit</Button>
//           </Box>
//         </Modal>
//         </>
//     );
//   }
