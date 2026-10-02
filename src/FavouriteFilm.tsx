interface FilmInfo {
  title: string
  director: string
  year: number
  studio: string
  poster: string
}

interface FavouriteFilmProps {
  data: FilmInfo;
}

const FavouriteFilm = ({ data }: FavouriteFilmProps) => {
  return (
    <>
      <h2>Любимий фільм</h2>
      <img src={data.poster} alt={data.title} />
      <h2>{data.title}</h2>
      <p><strong>Режисер:</strong> {data.director}</p>
      <p><strong>Рік виходу:</strong> {data.year}</p>
      <p><strong>Студія:</strong> {data.studio}</p>
    </>
  )
}

export default FavouriteFilm