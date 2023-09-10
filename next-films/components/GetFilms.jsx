import FetchFilms from "./FetchFilms";

export default function GetFilms({search}) {
    return (
        <>   
           {<FetchFilms  search = {search}/>}
        </>
    )
}