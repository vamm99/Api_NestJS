import { IsNotEmpty, IsString } from 'class-validator';

//Creamos una clase createtaskDto
export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}

export class UpdateTaskDto {
  @IsString()
  title?: string; //el simbolo ? indica que es opcional
  @IsString()
  description?: string;
}
