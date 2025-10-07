import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Livro } from "./entities/livro.entity";
import type { CreateLivrosDto } from "./dto/create-livro.dto";
import type { UpdateLivrosDto } from "./dto/update-livro.dto";

@Injectable()
export class LivrosService {
  constructor(
    @InjectRepository(Livro)
    private livrosRepository: Repository<Livro>,
  ) {}

  async create(createLivrosDto: CreateLivrosDto): Promise<Livro> {
    const livro = this.livrosRepository.create(createLivrosDto);
    return await this.livrosRepository.save(livro);
  }

  async findAll(): Promise<Livro[]> {
    return await this.livrosRepository.find();
  }

  async findOne(id: number): Promise<Livro> {
    const livro = await this.livrosRepository.findOneBy({ id });

    if (!livro) {
      throw new NotFoundException(`Livro com o ID ${id} não encontrado.`);
    }

    return livro;
  }
}
