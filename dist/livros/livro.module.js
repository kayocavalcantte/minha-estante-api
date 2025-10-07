"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroModule = void 0;
const common_1 = require("@nestjs/common");
const livro_service_1 = require("./livro.service");
const livro_controller_1 = require("./livro.controller");
const autores_module_1 = require("../autores/autores.module");
let LivroModule = class LivroModule {
};
exports.LivroModule = LivroModule;
exports.LivroModule = LivroModule = __decorate([
    (0, common_1.Module)({
        imports: [autores_module_1.AutoresModule],
        controllers: [livro_controller_1.LivroController],
        providers: [livro_service_1.LivroService],
    })
], LivroModule);
//# sourceMappingURL=livro.module.js.map