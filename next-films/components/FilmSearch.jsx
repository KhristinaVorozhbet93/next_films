import { useState } from "react"
import GetFilms from "./GetFilms"

export default function FilmSearch({searchFilm}) {
    const
        [value, setValue] = useState() 
    return (
        <>
            <input value={value} onInput={evt => setValue(evt.target.value)} />
            <GetFilms search = {value}/>
        </>
    )
}