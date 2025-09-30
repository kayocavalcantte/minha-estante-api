import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAutoresDto } from './dto/create-autores.dto';
import { UpdateAutoreDto } from './dto/update-autores.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from './entities/autores.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutoresService {
  constructor(
    @InjectRepository(Autor)
    private autoresRepository: Repository<Autor>,
  ) {}


  async create(createAutoreDto: CreateAutoresDto): Promise<Autor> {
    const autor = this.autoresRepository.create(createAutoreDto);
    return await this.autoresRepository.save(autor);
  }

  async findAll(): Promise<Autor[]> {
    return await this.autoresRepository.find();
  }

  async findOne(id: number): Promise<Autor> {
    const autor = await this.autoresRepository.findOneBy({ id });
    
    // Esta linha informa ao TypeScript que `autor` não será nulo a partir daqui.
    if (!autor) {
      throw new NotFoundException(`Autor com o ID ${id} não encontrado.`);
    }
    
    return autor; // Retorna um `Autor` e não `Autor | null`
  }

  async update(id: number, updateAutoresDto: UpdateAutoreDto): Promise<Autor> {
    const autor = await this.autoresRepository.preload({
      id: id,
      ...updateAutoresDto,
    });

    if (!autor) {
      throw new NotFoundException(`Autor com o ID ${id} não encontrado.`);
    }

    // Salva a entidade atualizada no banco.
    return this.autoresRepository.save(autor);
  }

  async remove(id: number): Promise<void> {
    // Como `findOne` agora garante um `Autor` ou lança um erro,
    // a variável `autor` aqui nunca será `null`.
    const autor = await this.findOne(id);
    await this.autoresRepository.remove(autor);
  }
}
