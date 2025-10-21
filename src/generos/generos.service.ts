import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genero } from './entities/generos.entity';
import { CreateGenerosDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GenerosService {
  constructor(
    @InjectRepository(Genero)
    private readonly generoRepository: Repository<Genero>,
  ) {}

  create(createGeneroDto: CreateGenerosDto) {
    const genero = this.generoRepository.create(createGeneroDto);
    return this.generoRepository.save(genero);
  }

  findAll() {
    return this.generoRepository.find({ relations: ['livros'] });
  }

  findOne(id: number) {
    return this.generoRepository.findOne({
      where: { id },
      relations: ['livros'],
    });
  }

  async update(id: number, updateGeneroDto: UpdateGeneroDto) {
    await this.generoRepository.update(id, updateGeneroDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.generoRepository.delete(id);
  }
}