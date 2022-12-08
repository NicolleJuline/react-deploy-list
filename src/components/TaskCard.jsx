import { ContainerContextProvider } from "../context/Container";
import { TaskContext } from "../context/Container"; // imp nombre del contexto
import { useContext } from "react";

function TaskCard({ task }) {
  // function showAlert(){
  //   alert(task.id)
  // }
  const { deleteTask } = useContext(TaskContext);
  // console.log(valor);

  return (
    <ContainerContextProvider>
      <div className="bg-slate-800 text-white p-4 rounded-md">
        <h1 className="text-xl font-bold capitalize">{task.title}</h1>
        <p className="text-gray-500 text-sm">{task.description}</p>
        <button className="bg-red-500 px-2 py-1 rounded-sm mt-4 hover:bg-red-400" onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>
    </ContainerContextProvider>
  );
}
/*nota el event click del btn esta accediendo al arreglo de las tareas mediante la func eliminar.Esta funcion la ejecutamos 
  dentro de una func anonima para poder pasar un parametro(task.id). esta forma tambin hace que solo se ejecuta la funcion cuando se hace clic*/
export default TaskCard;
