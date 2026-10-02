interface PetInfo {
  name: string
  type: string
  age: number
}

interface PetProps {
  data: PetInfo
}

const Pet = ({ data }: PetProps) => {
  return (
    <>
      <h2>Домашній улюбленець</h2>
      <p>Ім'я: {data.name}</p>
      <p>Тип: {data.type}</p>
      <p>Років: {data.age}</p>
    </>
  )
}

export default Pet