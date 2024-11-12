import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  UploadedFile,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task.dto';

//Con el nombre del decorador @Controller('tasks') es que vamos a llamrlo en la ruta
@Controller('tasks')
export class TasksController {
  //Inyección de dependencias
  constructor(private readonly tasksService: TasksService) {}

  //Función para obtener todos los tareas
  @Get()
  getAllTasksController() {
    return this.tasksService.getAllTasksService();
  }

  //Función para crear una nueva tarea
  @Post()
  createTaskController(@Body() task: CreateTaskDto) {
    return this.tasksService.createTaskService(task.title, task.description);
  }

  //Función para eliminar una tarea
  @Delete(':id')
  deleteTaskController(@Param('id') id: string) {
    return this.tasksService.deleteTaskService(id);
  }

  //Función para actualizar una tarea
  @Patch(':id')
  updateTaskController(
    @Param('id') id: string,
    @Body() UploadedFile: CreateTaskDto,
  ) {
    return this.tasksService.updateTaskService(id, UploadedFile);
  }
}
