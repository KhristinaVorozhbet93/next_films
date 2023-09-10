import { useState } from "react"
import OneFilm from "./OneFilm";

export default function FetchFilms({ search }) {
    const
        [films, setFilms] = useState(null),
        [error, setError] = useState(null),
        onClick = async () => {
            async function f() {
                try {
                    const
                        response = await fetch("https://www.omdbapi.com/?apikey=a2b07930&s=" + {search});
                    if (!response.ok) throw new Error('fetch ' + response.status);
                    setFilms(await response.json());
                } catch (err) {
                    setError(err);
                }
            }
        };

    if (error) return <>Error = {error}</>
    if (films) {
        return <>{films.map((film) => <OneFilm film={film} />)}</>
    }

    return <><button onClick={onClick}>Поиск</button></>
}