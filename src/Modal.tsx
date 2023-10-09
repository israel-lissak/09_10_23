import {useState, useRef} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

function ModalComp() {

    const [open, setOpen] = useState(false);
    const handleOpen = () =>{
            setOpen(true);
            setTitle(titleRef.current!.value)
            setText(textRef.current!.value)
        } 
    const handleClose = () => setOpen(false);

    const titleRef = useRef<HTMLInputElement | null>(null)
    const [title, setTitle] = useState("title")
    const textRef = useRef<HTMLInputElement | null>(null)
    const [text, setText] = useState("text")

  return (
    <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <br />
        <TextField id="outlined-basic" label="enter title" variant="outlined" inputRef={titleRef}/>
        <TextField id="outlined-basic" label="enter text" variant="outlined" inputRef={textRef}/>


        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {text}
            </Typography>
        </Box>
        </Modal>
    </div>
  )
}

export default ModalComp