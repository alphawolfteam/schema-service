"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.receiveDataFromRabbit = exports.sendDataToRabbit = exports.initRabbit = void 0;
const menashmq_1 = __importDefault(require("menashmq"));
exports.initRabbit = () => __awaiter(void 0, void 0, void 0, function* () {
    // get ip and queue name from config
    yield menashmq_1.default.connect('amqp://localhost:5672');
    yield menashmq_1.default.declareQueue('queue-name');
});
exports.sendDataToRabbit = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return menashmq_1.default.send('queue-name', data);
});
exports.receiveDataFromRabbit = (msg) => {
    const data = msg.getContent();
    console.log(data);
    msg.ack();
};
// const main = async() => {
//     await initRabbit();
//     await menash.queue('instances-queue').activateConsumer(receiveDataFromRabbit: ConsumerMessage);
// }
// const main = async() => {
//     await initRabbit();
// }
