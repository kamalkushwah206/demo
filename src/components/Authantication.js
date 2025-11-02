import { auth, googleprovider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import gi from '../assets/google.png'

import Avatar from '@mui/material/Avatar'



export default function Authantication() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = () => { alert(`email: ${auth?.currentUser?.email}, name: ${auth?.currentUser?.displayName}`) 

        console.log(auth?.currentUser)

    }

    const singIn = async () => {

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('with email password')

        }
        catch (err) {
            alert(err);
        }
    }

    const singInWithGoogle = async () => {

        try {
            await signInWithPopup(auth, googleprovider);
            console.log('with Google provider')
        }

        catch (err) {
            console.error(err);
        }
    }

    const logOut = async () => {

        try {
            await signOut(auth);
            user()
        }

        catch (err) {
            console.log(err)
        }

    }

    return <div style={{ marginTop: 15 }}>

        <div style={{marginBottom:19}}>
            <TextField onChange={(e) => setEmail(e.target.value)} size="small" label="Email Id" variant="outlined" />
            <TextField onChange={(e) => setPassword(e.target.value)} style={{ marginLeft: 5 }} size="small" label="Password" variant="outlined" />
        </div>

        <div>
            <Button onClick={singIn} style={{ marginLeft: 5, height: 39 }} variant='contained' >sign in</Button>

            <Button onClick={singInWithGoogle} style={{ marginLeft: 5, height: 39 }} startIcon={<Avatar style={{ width: 25, height: 25 }} src={gi} alt="button image" />} variant='outlined' >sign in with google</Button>

            <Button onClick={logOut} style={{ marginLeft: 5, height: 39 }} color="error" variant='contained' >sign Out</Button>
            <Button onClick={user} style={{ marginLeft: 5, height: 39 }} color="secondary" variant='contained' >user info</Button>
            <div style={{width:200,height:200,border :"1px solid black"}}> nav bar </div>
        </div>
    </div>
    
}