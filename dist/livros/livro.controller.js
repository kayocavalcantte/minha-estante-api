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
exports.LivroController = void 0;
const common_1 = require("@nestjs/common");
const livro_service_1 = require("./livro.service");
const create_livro_dto_1 = require("./dto/create-livro.dto");
const update_livro_dto_1 = require("./dto/update-livro.dto");
let LivroController = class LivroController {
    livroService;
    constructor(livroService) {
        this.livroService = livroService;
    }
    create(createLivroDto) {
        return this.livroService.create(createLivroDto);
    }
    findAll() {
        return this.livroService.findAll();
    }
    findOne(id) {
        return this.livroService.findOne(+id);
    }
    update(id, updateLivroDto) {
        return this.livroService.update(+id, updateLivroDto);
    }
    remove(id) {
        return this.livroService.remove(+id);
    }
};
exports.LivroController = LivroController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_livro_dto_1.CreateLivroDto]),
    __metadata("design:returntype", void 0)
], LivroController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LivroController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LivroController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_livro_dto_1.UpdateLivroDto]),
    __metadata("design:returntype", void 0)
], LivroController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LivroController.prototype, "remove", null);
exports.LivroController = LivroController = __decorate([
    (0, common_1.Controller)('livros'),
    __metadata("design:paramtypes", [livro_service_1.LivroService])
], LivroController);
//# sourceMappingURL=livro.controller.js.map