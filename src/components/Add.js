import FormControlLabel from "@mui/material/FormControlLabel"

import TextField from "@mui/material/TextField"
import Radio from '@mui/material/Radio';
import { useState } from "react"
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";


export default function Add() {

    const [tittle, SetTittle] = useState('')
    const [year, setYear] = useState('')
    const [recivedAnOscar, setRecivedAnOscar] = useState(false)

    const moviesCollection = collection(db, "movies")

    

    const onSubmitMovie = async () => {

        try {
            await addDoc(moviesCollection, {
                tittle: tittle,
                releaseDate: year,
                recivedAnOscar: recivedAnOscar,

            })
        }
        catch (err) {

            console.error(err)
        }

    }

    return (<div style={{ marginTop: 10 }}>

        <h1>Add New Record</h1>

        <TextField onChange={(e) => SetTittle(e.target.value)} size="small" label="Enter Tittle" variant="outlined" />
        <TextField onChange={(e) => setYear(e.target.value)} style={{ marginLeft: 5 }} size="small" label="Enter Year" variant="outlined" />

        <FormLabel style={{ marginRight: 10, marginLeft: 10 }} id="demo-radio-buttons-group-label">Recived An Oscar</FormLabel>

        <FormControlLabel onChange={(e) => { setRecivedAnOscar(e.target.checked) }} value="male" control={<Radio />} label="Yes" />

        <Button onClick={onSubmitMovie} style={{ marginLeft: 5, height: 39 }} color="primary" variant='contained' >Add</Button>

    </div>)
}