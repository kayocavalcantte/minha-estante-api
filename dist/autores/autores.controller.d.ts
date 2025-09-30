import { AutoresService } from './autores.service';
import { CreateAutoresDto } from './dto/create-autores.dto';
import { UpdateAutoreDto } from './dto/update-autores.dto';
export declare class AutoresController {
    private readonly autoresService;
    constructor(autoresService: AutoresService);
    create(createAutoreDto: CreateAutoresDto): Promise<import("./entities/autores.entity").Autor>;
    findAll(): Promise<import("./entities/autores.entity").Autor[]>;
    findOne(id: string): Promise<import("./entities/autores.entity").Autor>;
    update(id: string, updateAutoreDto: UpdateAutoreDto): Promise<import("./entities/autores.entity").Autor>;
    remove(id: string): Promise<void>;
}
