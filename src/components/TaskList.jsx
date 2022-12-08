import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/Container"; // nombre del contexto

function TaskList() {
  // Creando una lista de tareas
  const { tasks } = useContext(TaskContext); // utilizando el contexto que creamos para las tareas

  // si el array no tiene nada
  if (tasks.length === 0) {
    return <h1 className="text-center text-white text-4xl">No hay tareas aun</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((item) => (
        <TaskCard key={item.id} task={item} />
      ))}
    </div>
  );
}

export default TaskList;
