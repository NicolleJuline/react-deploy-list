// Añadir tarea dentro de la lista de tareas (desde un formulario)
import { useState, useContext } from "react";
import { TaskContext } from "../context/Container";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createNewTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newTask ={ // creando el objeto para añadir al arreglo de objetos de esta forma nos da err porqu el id seria el mismo
    //     title,
    //     id:4,
    //     description:'algo nuevo'
    // }
    //pasarle el nuevo objeto como valor a la funcion que recibimos como props encargada de agregar un elemento al array
    //createTask(newTask) // como la func esta creada en app si tiene acceso al array por lo que puede alterarlo

    createNewTask({ title, description }); // pasamos title como parametro en lugar del obj newTask
    setTitle(""); // vaciar el input
    setDescription(""); // vaciar el text area
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-100 p-10 mb-4">
      <h1 className="text-2xl text-gray font-bold mb-3">Crea tu tarea</h1>
        <input
          placeholder="Agregar tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la descripcionde la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
