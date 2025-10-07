import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './entities/livro.entity';
import { AutoresService } from '../autores/autores.service';
export declare class LivroService {
    private readonly autoresService;
    private livros;
    private idCounter;
    constructor(autoresService: AutoresService);
    create(createLivroDto: CreateLivroDto): Promise<Livro>;
    findAll(): Livro[];
    findOne(id: number): Livro;
    update(id: number, updateLivroDto: UpdateLivroDto): Promise<Livro>;
    remove(id: number): String;
}
