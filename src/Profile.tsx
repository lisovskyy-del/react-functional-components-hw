interface ProfileInfo {
  name: string
  phone: number
  email: string
  city: string
  experience: string
  skills: string
  photo: string
}

interface ProfileInfoProps {
  data: ProfileInfo
}

const Profile = ({ data }: ProfileInfoProps) => {
  return (
    <>
      <h2>Персональна сторінка</h2>
      <img src={data.photo} alt={data.name}/>
      <p>Ім'я: {data.name}</p>
      <p>Телефон: {data.phone}</p>
      <p>Пошта: {data.email}</p>
      <p>Місце: {data.city}</p>
      <p>Досвід роботи: {data.experience}</p>
      <p>Навички: {data.skills}</p>
    </>
  )
}

export default Profile