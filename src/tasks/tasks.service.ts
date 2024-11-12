import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  //Función para generar Id random
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  //Creamos la variable de Tasks
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Esta es la descripción de la tarea 1',
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Esta es la descripción de la tarea 2',
    },
    {
      id: '3',
      title: 'Task 3',
      description: 'Esta es la descripción de la tarea 3',
    },
  ];

  //Crearemos los diferentes métodos respecto a un CRUD

  //Función para obtener todas las tareas
  getAllTasksService(): Task[] {
    return this.tasks;
  }

  //Función para obtener una tarea por id
  getTaskByIdService(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  //Función para crear una tarea
  createTaskService(title: string, description: string): Task[] {
    const newTask = {
      id: this.generateId(),
      title,
      description,
    };

    this.tasks.push(newTask);

    return [newTask];
  }

  //Función para eliminar una tarea
  deleteTaskService(id: string): Task[] {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks;
  }

  //Función para actualizar una tarea por su id
  updateTaskService(id: string, updatedFields: UpdateTaskDto): Task[] {
    //Buscamo la tarea que se quiere actualizar
    const task = this.getTaskByIdService(id);
    //Combinamos los cambios
    const newTask = Object.assign(task, updatedFields);
    //Actualizamos la tarea en el arreglo en caso contrario lo deja como está
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return [newTask];
  }
}
