import Button from "./Button"

const Header = ({titulo, onAdd, mostrarForm}) => {

const onClick = () =>{
  console.log("click");
}



  return (
    <header className="header">
        <h1>{titulo}</h1>
        <Button texto={mostrarForm ? "Cerrar" : "agregar"} color={mostrarForm ? "#E33E5A" : "#1D565E"} onClick={onAdd}/>
       
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