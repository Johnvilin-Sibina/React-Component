import Card from "./Card"
//Basic example to create a component and exporting and importing it 
/*function App(){
  return (
    <div><Card/></div>
  )
}
export default App*/

//Example for reusable components
/*function App(){
  return (
    <div>
      <Card place="World"/>
      <Card place="Earth"/>
      <Card place="Mars"/>
    </div>
  )
}
export default App*/

//Example of reusable component using loop
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
