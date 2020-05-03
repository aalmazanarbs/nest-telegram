"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidConfigurationException extends Error {
    constructor(invalidField, invalidCause) {
        super(`Options validation failed, "${invalidField}" invalid — ${invalidCause}`);
        this.invalidField = invalidField;
        this.invalidCause = invalidCause;
    }
}
exports.InvalidConfigurationException = InvalidConfigurationException;
//# sourceMappingURL=InvalidConfigurationException.js.map