import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import type { CreateLivrosDto } from "./dto/create-livro.dto";
import { LivrosService } from "./livros.service";
import { UpdateLivrosDto } from "./dto/update-livro.dto";
import { AuthGuard } from "src/auth/auth.guard";

@UseGuards(AuthGuard)
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
  @Patch(':id')
    update(@Param('id') id: string, @Body() updateLivroDto: UpdateLivrosDto) {
      return this.livrosService.update(+id, updateLivroDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.livrosService.remove(+id);
    }
}
