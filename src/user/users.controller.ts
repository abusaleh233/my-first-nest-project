import { Controller,Get } from "@nestjs/common";
import { UsersServices } from "./users.services.js";

@Controller('users')

export class UsersController{
    constructor(private usersServices: UsersServices){}
    @Get()
       getUser(){
        return this.usersServices.getuser();
       }
}