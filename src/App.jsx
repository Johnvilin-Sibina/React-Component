import Card from "./Card"
function App() {
  let places = [
    {
      name : "World"
    },
    {
      name : "Earth"
    },
    {
      name : "Mars"
    }
  ]
    return (
    <div>
      {
       places.map((p,index)=>{
        return <Card key={index} place = {p.name}/>
       }) 
      }
    </div>
  )
}

export default App
