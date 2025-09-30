import { CreateAutoresDto } from './dto/create-autores.dto';
import { UpdateAutoreDto } from './dto/update-autores.dto';
import { Autor } from './entities/autores.entity';
import { Repository } from 'typeorm';
export declare class AutoresService {
    private autoresRepository;
    constructor(autoresRepository: Repository<Autor>);
    create(createAutoreDto: CreateAutoresDto): Promise<Autor>;
    findAll(): Promise<Autor[]>;
    findOne(id: number): Promise<Autor>;
    update(id: number, updateAutoresDto: UpdateAutoreDto): Promise<Autor>;
    remove(id: number): Promise<void>;
}
