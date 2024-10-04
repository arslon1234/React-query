import { useParams } from "react-router-dom"

const Index = () => {
    const {id} = useParams()
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Product detail: {id}</h1>
    </div>
  )
}

export default Index
