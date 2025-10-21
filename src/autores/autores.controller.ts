import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { CreateAutoresDto } from './dto/create-autores.dto';
import { UpdateAutoreDto } from './dto/update-autores.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Post()
  create(@Body() createAutoreDto: CreateAutoresDto) {
    return this.autoresService.create(createAutoreDto);
  }

  @Get()
  findAll() {
    return this.autoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutoreDto: UpdateAutoreDto) {
    return this.autoresService.update(+id, updateAutoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autoresService.remove(+id);
  }
}
