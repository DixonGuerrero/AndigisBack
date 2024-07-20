"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorMiddleware = function (err, req, res, next) {
    console.log('Error middleware');
    if (err instanceof Error) {
        return res.status(500).json({ message: err.message });
    }
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
};
exports.default = errorMiddleware;
