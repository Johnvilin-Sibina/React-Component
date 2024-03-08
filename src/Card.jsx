//Basic example to create a component and exporting and importing it
/*function Card(){
    return <h1>Hello World!</h1>
}
export default Card */
/*function Card(){
    return <h1>Hello {1+1}</h1> //JS inside HTML
}
export default Card*/

//Conditional Rendering
/*function Card(){
    let a=5;
    return <h1>Hello { a>=5 ? <span>Greater</span> : <span>Smaller</span>} World!</h1>
}
export default Card*/

//Example for inline CSS
/*function Card(){
    let price =500
    return <h1>Product Name: <span style={{color:"red"}}>{price}</span> </h1>
}
export default Card*/

//Conditional Rendering:
/*function Card(){
    let price =501
    return (
        <h1>
            Product Name: <span style={{color:`${price>500 ? "red" : "blue"}`}}>{price}</span> 
        </h1>
    )
}
export default Card*/

//Example for Reusable Component:
/*function Card(props){
    return <h1>Hello {props.place}!</h1>
}
export default Card*/
/*function Card(props){
    return <h1>Hello <span style={{color: "red"}}>{props.place}</span>!</h1>
}
export default Card*/

//Example of Reusable components using Loop
function Card({place}){ //object destructuring
    return (
    <h1>
        Hello <span style={{color: "red"}}>{place}</span>!
    </h1>
  );
}
export default Card

