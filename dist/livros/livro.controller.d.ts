import { LivroService } from './livro.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
export declare class LivroController {
    private readonly livroService;
    constructor(livroService: LivroService);
    create(createLivroDto: CreateLivroDto): Promise<import("./entities/livro.entity").Livro>;
    findAll(): import("./entities/livro.entity").Livro[];
    findOne(id: string): import("./entities/livro.entity").Livro;
    update(id: string, updateLivroDto: UpdateLivroDto): Promise<import("./entities/livro.entity").Livro>;
    remove(id: string): String;
}
