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
    return await this.livrosRepository.find({
      relations: ['autor', 'genero']
    });
  }

  async findOne(id: number): Promise<Livro> {
    const livro = await this.livrosRepository.findOneBy({ id });

    if (!livro) {
      throw new NotFoundException(`Livro com o ID ${id} não encontrado.`);
    }

    return livro;
  }

  async update(id: number, updateLivroDto: UpdateLivrosDto): Promise<Livro> {

    const livro = await this.livrosRepository.preload({
      id: id,
      ... updateLivroDto
    });
      if (!livro) {
      throw new NotFoundException(`Livro com o ID ${id} não encontrado.`);
    }

    // Salva a entidade atualizada no banco.
    return this.livrosRepository.save(livro);
  }

  async remove(id: number): Promise<void> {
    const livroIndex = await this.findOne(id);

    await this.livrosRepository.remove(livroIndex);
  }
}
