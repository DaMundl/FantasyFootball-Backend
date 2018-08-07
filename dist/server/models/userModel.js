"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
exports.User = mongoose.model('User', exports.userSchema);
exports.default = exports.User;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy91c2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBc0M7QUFDdEMscUNBQWtDO0FBVXJCLFFBQUEsVUFBVSxHQUFZLElBQUksaUJBQU0sQ0FBQztJQUU5QyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7SUFDckMsUUFBUSxFQUFHLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQ3pDLFNBQVMsRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztJQUN6QyxTQUFTLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFDO0NBQ3pDLENBQUMsQ0FBQztBQUdVLFFBQUEsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQWMsTUFBTSxFQUFFLGtCQUFVLENBQUMsQ0FBQztBQUNwRSxrQkFBZSxZQUFJLENBQUMiLCJmaWxlIjoibW9kZWxzL3VzZXJNb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXJTY2hlbWEgZXh0ZW5kcyBtb25nb29zZS5Eb2N1bWVudCB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGNyZWF0ZWRfYXQ/OiBzdHJpbmc7ICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJTY2hlbWEgOiBTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuXHJcbmVtYWlsOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXHJcbnBhc3N3b3JkIDoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG5maXJzdE5hbWU6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuY3JlYXRlZEF0OiB7dHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3d9XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWw8SVVzZXJTY2hlbWE+KCdVc2VyJywgdXNlclNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcblxyXG4iXX0=