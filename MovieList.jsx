import { useState } from 'react';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState('');
    const [count, setCount] = useState(0)

    function addMovie() {
        setMovies([...movies, movie])
        setMovie("")
        setCount(count + 1 )

    }

    return (
        <>
            <text> Count: {count} </text>
            <input value={movie} onChange={e => setMovie(e.target.value)} />
            <button onClick={addMovie}>Add Movie</button>
            <ul>
                {movies.map((m, index) => <li key={index}>{m}</li>)}
            </ul>
        </>
    )

}

export default MovieList;

