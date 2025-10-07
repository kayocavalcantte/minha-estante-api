import { PartialType } from '@nestjs/mapped-types';
import { CreateGenerosDto } from './create-generos.dto';

export class UpdateGeneroDto extends PartialType(CreateGenerosDto) {}