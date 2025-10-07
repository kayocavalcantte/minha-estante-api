"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroService = void 0;
const common_1 = require("@nestjs/common");
const autores_service_1 = require("../autores/autores.service");
let LivroService = class LivroService {
    autoresService;
    livros = [];
    idCounter = 1;
    constructor(autoresService) {
        this.autoresService = autoresService;
    }
    async create(createLivroDto) {
        const autor = await this.autoresService.findOne(createLivroDto.autorId);
        if (autor.id === null) {
            throw new common_1.NotFoundException(`Autor com id ${createLivroDto.autorId} não encontrado.`);
        }
        const livro = {
            id: this.idCounter++,
            titulo: createLivroDto.titulo,
            autor,
            ano: createLivroDto.ano,
            genero: createLivroDto.genero,
        };
        this.livros.push(livro);
        return livro;
    }
    findAll() {
        return this.livros;
    }
    findOne(id) {
        const livro = this.livros.find(livro => livro.id === id);
        if (!livro) {
            throw new common_1.NotFoundException(`Livro com id ${id} não encontrado.`);
        }
        return livro;
    }
    async update(id, updateLivroDto) {
        const livroIndex = this.livros.findIndex(livro => livro.id === id);
        if (livroIndex === -1) {
            throw new common_1.NotFoundException(`Livro com id ${id} não encontrado.`);
        }
        let livroAtual = this.livros[livroIndex];
        if (updateLivroDto.autorId !== undefined) {
            const novoAutor = await this.autoresService.findOne(updateLivroDto.autorId);
            if (!novoAutor) {
                throw new common_1.NotFoundException(`Autor com id ${updateLivroDto.autorId} não encontrado.`);
            }
            livroAtual = { ...livroAtual, autor: novoAutor };
        }
        const { autorId, ...outros } = updateLivroDto;
        this.livros[livroIndex] = { ...livroAtual, ...outros };
        return this.livros[livroIndex];
    }
    remove(id) {
        const livroIndex = this.livros.findIndex(livro => livro.id === id);
        if (livroIndex === -1) {
            throw new common_1.NotFoundException(`Livro com id ${id} não encontrado.`);
        }
        this.livros.splice(livroIndex, 1);
        return "Livro com id " + id + " removido com sucesso.";
    }
};
exports.LivroService = LivroService;
exports.LivroService = LivroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => autores_service_1.AutoresService))),
    __metadata("design:paramtypes", [autores_service_1.AutoresService])
], LivroService);
//# sourceMappingURL=livro.service.js.map