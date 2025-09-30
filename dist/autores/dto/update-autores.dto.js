"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutoreDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_autores_dto_1 = require("./create-autores.dto");
class UpdateAutoreDto extends (0, mapped_types_1.PartialType)(create_autores_dto_1.CreateAutoresDto) {
}
exports.UpdateAutoreDto = UpdateAutoreDto;
//# sourceMappingURL=update-autores.dto.js.map