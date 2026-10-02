interface CurrentTimeProps {
  data: Date;
}

const CurrentTime = ({ data }: CurrentTimeProps)=> {
  const formattedTime = data.toLocaleTimeString()

  return (
    <>
      <h2>Поточний час</h2>
      <h2>{formattedTime}</h2>
    </>
  )
}

export default CurrentTime