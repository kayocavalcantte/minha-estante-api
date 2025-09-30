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
exports.AutoresController = void 0;
const common_1 = require("@nestjs/common");
const autores_service_1 = require("./autores.service");
const create_autores_dto_1 = require("./dto/create-autores.dto");
const update_autores_dto_1 = require("./dto/update-autores.dto");
let AutoresController = class AutoresController {
    autoresService;
    constructor(autoresService) {
        this.autoresService = autoresService;
    }
    create(createAutoreDto) {
        return this.autoresService.create(createAutoreDto);
    }
    findAll() {
        return this.autoresService.findAll();
    }
    findOne(id) {
        return this.autoresService.findOne(+id);
    }
    update(id, updateAutoreDto) {
        return this.autoresService.update(+id, updateAutoreDto);
    }
    remove(id) {
        return this.autoresService.remove(+id);
    }
};
exports.AutoresController = AutoresController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_autores_dto_1.CreateAutoresDto]),
    __metadata("design:returntype", void 0)
], AutoresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AutoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_autores_dto_1.UpdateAutoreDto]),
    __metadata("design:returntype", void 0)
], AutoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutoresController.prototype, "remove", null);
exports.AutoresController = AutoresController = __decorate([
    (0, common_1.Controller)('autores'),
    __metadata("design:paramtypes", [autores_service_1.AutoresService])
], AutoresController);
//# sourceMappingURL=autores.controller.js.map