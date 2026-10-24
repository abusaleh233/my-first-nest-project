import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller.js";
import { UsersServices } from "./users.services.js";

@Module({
    controllers:[UsersController],
    providers:[UsersServices]
})

export class UsersModuls{}