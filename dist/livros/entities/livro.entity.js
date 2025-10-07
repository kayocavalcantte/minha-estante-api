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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const typeorm_1 = require("typeorm");
const autores_entity_1 = require("../../autores/entities/autores.entity");
let Livro = class Livro {
    id;
    titulo;
    autor;
    ano;
    genero;
};
exports.Livro = Livro;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Livro.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Livro.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => autores_entity_1.Autor),
    __metadata("design:type", autores_entity_1.Autor)
], Livro.prototype, "autor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Livro.prototype, "ano", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Livro.prototype, "genero", void 0);
exports.Livro = Livro = __decorate([
    (0, typeorm_1.Entity)()
], Livro);
//# sourceMappingURL=livro.entity.js.map