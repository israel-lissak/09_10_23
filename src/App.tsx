import './App.css'
import { useRef, useState } from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';

import Checkbox from '@mui/material/Checkbox';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function App() {

  const titleRef = useRef<HTMLInputElement | null>(null)
  const [title, setTitle] = useState("title")

  function handleClick () {
      setTitle(titleRef.current!.value)
      titleRef.current!.value = ''
  }

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <h1>{title}</h1>

      <TextField id="outlined-basic" label="insert new title" variant="outlined" inputRef={titleRef} sx={{backgroundColor: 'lightgreen'}}/>

      <br /> <br />

      <Button variant="contained" onClick={handleClick}>cange title</Button>

      <br /> <br /> <br />

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="female" control={<Radio sx={{'& .MuiSvgIcon-root':{fontSize: '45px'}}}/>} label="Female" />
          <FormControlLabel value="male" control={<Radio sx={{'& .MuiSvgIcon-root':{fontSize: '45px'}}}/>} label="Male" />
        </RadioGroup>
      </FormControl>

      <br /> <br />

      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked sx={{'&.Mui-checked': {color: 'green'}}}/>} label="Label" />
        <FormControlLabel required control={<Checkbox sx={{'&.Mui-checked': {color: 'green'}}}/>} label="Required" />
        <FormControlLabel disabled control={<Checkbox sx={{'&.Mui-checked': {color: 'green'}}}/>} label="Disabled" />
      </FormGroup>

      <br /> <br />

      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{backgroundColor: 'lightgreen'}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </>
  )
}

export default App
