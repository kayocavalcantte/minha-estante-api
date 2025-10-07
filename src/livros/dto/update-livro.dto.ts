import { PartialType } from '@nestjs/mapped-types';
import { CreateLivrosDto } from "./create-livro.dto";

export class UpdateLivrosDto extends PartialType(CreateLivrosDto) {}
