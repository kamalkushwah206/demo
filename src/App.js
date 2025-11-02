
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import './App.css';
import Authantication from './components/Authantication';
import { db } from './config/firebase';
import { useEffect, useState } from 'react';
import Add from './components/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function App() {

  const [movieList, setMovielist] = useState([])
  const [tittle, SetTittle] = useState('')

  const moviesCollection = collection(db, "movies",)

  const deleteMovie = async (id) => {


    const movieDoc = doc(db, "movies", id)

    await deleteDoc(movieDoc)

  }

  const updateMovie = async (id) => {


    const movieDoc = doc(db, "movies", id)

    await updateDoc(movieDoc,{tittle:tittle})

  }

  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesCollection);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,

      }))
      setMovielist(filterData);
    }
    catch (err) {
      console.error(err)
    }
  }

  useEffect(() => { getMovieList() }, [])

  return (
    <div className="App"  >
      <div style={{ fontSize: 20, fontWeight: 500 }}>Firebase</div>

      <Authantication />

      <Add />

      <div>
        {movieList?.map((movie) => (
          <div>

            <h1 style={{ color: movie.recivedAnOscar ? 'green' : 'red' }} >{movie.tittle}</h1>
            <div>
              <TextField onChange={(e) => SetTittle(e.target.value)} size="small" label="Update Tittle" variant="outlined" />

              <Button onClick={() => updateMovie(movie.id)} style={{ marginLeft: 5, height: 39 }} color="primary" variant='contained' >Update</Button>

            </div>
            <p>{movie.releaseDate}</p>

            <button onClick={() => deleteMovie(movie.id)} >Delete Movie</button>

          </div>

        ))}
      </div>

    </div>
  );
}

export default App;
