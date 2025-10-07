import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import type { CreateLivrosDto } from "./dto/create-livro.dto";
import { LivrosService } from "./livros.service";

@Controller("livros")
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Post()
  create(@Body() createLivrosDto: CreateLivrosDto) {
    return this.livrosService.create(createLivrosDto);
  }

  @Get()
  findAll() {
    return this.livrosService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.livrosService.findOne(+id);
  }
}
