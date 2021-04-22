import s from './Movie.module.css'
export function Movie(props){

    const {
        Title:title,
        Year:year,
        imdbID:id,
        Type:type,
        Poster:poster
    } = props;

    return(
        <>
            <div>{title}</div><p>{year}</p>
            <br/>
            {poster === 'N/A' ? <img  src={`https://via.placeholder.com/300x444?text=${title}`}/> : <img src={poster} title={title}/>}

        </>
    )
}