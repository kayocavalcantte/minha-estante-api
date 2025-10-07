
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLivroDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsNumber()
  autorId: number;

  @IsNotEmpty()
  @IsNumber()
  ano: number;

  @IsNotEmpty()
  @IsString()
  genero: string;
}
