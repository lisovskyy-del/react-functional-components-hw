import React from "react"
import FavouriteFilm from "./FavouriteFilm"
import Profile from "./Profile"
import CurrentTime from "./CurrentTime"
import Pet from "./Pet.tsx"

const App = () => {
  const filmData = {
    title: "Інтерстеллар",
    director: "Крістофер Нолан",
    year: 2014,
    studio: "Paramount Pictures / Warner Bros.",
    poster: "https://upload.wikimedia.org/wikipedia/uk/b/bb/Interstellar_film_poster.jpg",
  }

  const profileData = {
    name: "Олександра Коваленко",
    phone: 380971234567,
    email: "o.kovalenko.dev@gmail.com",
    city: "Ужгород",
    experience: "2 роки кодингу, робота над навчальними React/TypeScript проєктами",
    skills: "JavaScript, TypeScript, React, HTML5, CSS3, Git",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
  }

  const petData = {
    name: "Барсик",
    type: "Кіт",
    age: 3,
  }

  const [currentTime, setCurrentTime] = React.useState(new Date())

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <>
      <FavouriteFilm data={filmData}/>
      <Profile data={profileData}/>

      <CurrentTime data={currentTime}/>

      <Pet data={petData}/>
    </>
  )
}

export default App