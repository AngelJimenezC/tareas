import Button from "./Button"

const Header = ({titulo}) => {

const onClick = () =>{
  console.log("click");
}



  return (
    <header className="header">
        <h1>{titulo}</h1>
        <Button texto="agregar" color="black" onClick={onClick}/>
       
    </header>
  )
}


Header.defaultProps = {
  titulo: 'Tareas'
}

/* const estilo = {
  color:"red"
  
} */

export default Header