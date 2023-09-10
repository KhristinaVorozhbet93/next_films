import FetchFilms from "./FetchFilms";

export default function GetFilms({search}) {
    console.log('GetFilms')
    return (
        <>   
           {<FetchFilms  search = {search}/>}
        </>
    )
}