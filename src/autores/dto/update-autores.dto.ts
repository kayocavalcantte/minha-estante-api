import { PartialType } from '@nestjs/mapped-types';
import { CreateAutoresDto } from './create-autores.dto';

export class UpdateAutoreDto extends PartialType(CreateAutoresDto) {}
