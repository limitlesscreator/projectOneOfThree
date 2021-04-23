import s from './Movie.module.sass'

export function Movie(props) {

    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return (
        <>
            <div className={s.hoverCard}>
                <div className={s.card}>
                    {poster === 'N/A' ? <img className={s.imgCard} src={`https://via.placeholder.com/280x400?text=${title}`}/> :
                        <img className={s.imgCard} src={poster} title={title}/>}
                    <div>{title}</div>
                    <p>{year}</p><p className={s.type}>{type}</p>
                </div>
            </div>
        </>
    )
}