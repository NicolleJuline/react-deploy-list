import React from "react";
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../tasks";

export const TaskContext = createContext(); // nombre del contexto para que todos los componetes puedan usar los valrs y las funciones

export function ContainerContextProvider(props) {
  const [tasks, setTasks] = useState([]); // inicando array vacio (array tasks)

  // Funcion para agregar nueva tarea
  function createNewTask(task) {
    // pasando parametro en lugar de objeto
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length, // para hacer dinamico el id usamos la longitud del array
        description: task.description,
      },
    ]);
  }

  // 3. Eliminar una tarea del arreglo
  function deleteTask(task_Id) {
    // pasando parametro en lugar de objeto
    console.log(task_Id);
    // 3.1 hacemos un filter para encontrar en el array el id que queremos eliminar
    //tasks.filter(n => n.id !== task_Id)
    //3.2 Actualizando el array sin el id que queremos eliminar
    setTasks(tasks.filter((n) => n.id !== task_Id));
  }
  // 1. Guargando el contenido del fichero tasks(Array) que importamos cuando cargue el componente app / se usa el alias para evitar confuncion
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value = {{
        tasks,
        deleteTask,
        createNewTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
