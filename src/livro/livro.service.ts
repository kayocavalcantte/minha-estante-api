import { Injectable, NotFoundException, Inject, forwardRef } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './entities/livro.entity';
import { Autor } from '../autores/entities/autores.entity';
import { AutoresService } from '../autores/autores.service';

@Injectable()
export class LivroService {
  private livros: Livro[] = [];
  private idCounter = 1;

  constructor(
    @Inject(forwardRef(() => AutoresService))
    private readonly autoresService: AutoresService,
  ) {}

  async create(createLivroDto: CreateLivroDto): Promise<Livro> {
    const autor = await this.autoresService.findOne(createLivroDto.autorId);

    if (autor.id === null ) {
      throw new NotFoundException(`Autor com id ${createLivroDto.autorId} não encontrado.`);
    }

    const livro: Livro = {
      id: this.idCounter++,
      titulo: createLivroDto.titulo,
      autor,
      ano: createLivroDto.ano,
      genero: createLivroDto.genero,
    };
    this.livros.push(livro);
    return livro;
  }


  findAll(): Livro[] {
    return this.livros;
  }


  findOne(id: number): Livro {
    const livro = this.livros.find(livro => livro.id === id);
    if (!livro) {
      throw new NotFoundException(`Livro com id ${id} não encontrado.`);
    }
    return livro;
  }


  async update(id: number, updateLivroDto: UpdateLivroDto): Promise<Livro> {
    const livroIndex = this.livros.findIndex(livro => livro.id === id);
    if (livroIndex === -1) {
      throw new NotFoundException(`Livro com id ${id} não encontrado.`);
    }
    let livroAtual = this.livros[livroIndex];

    if (updateLivroDto.autorId !== undefined) {
      const novoAutor = await this.autoresService.findOne(updateLivroDto.autorId);
      if (!novoAutor) {
        throw new NotFoundException(`Autor com id ${updateLivroDto.autorId} não encontrado.`);
      }
      livroAtual = { ...livroAtual, autor: novoAutor };
    }
    const { autorId, ...outros } = updateLivroDto;
    this.livros[livroIndex] = { ...livroAtual, ...outros };
    return this.livros[livroIndex];
  }

  remove(id: number): String {
    const livroIndex = this.livros.findIndex(livro => livro.id === id);
    if (livroIndex === -1) {
      throw new NotFoundException(`Livro com id ${id} não encontrado.`);
    }
    this.livros.splice(livroIndex, 1);
    return "Livro com id " + id + " removido com sucesso.";
  }
}
