import { Body, Controller,Post } from "@nestjs/common";
import { UsersServices } from "./users.services.js";

@Controller('users')

export class UsersController{
    constructor(private usersServices: UsersServices){}
    @Post()
      createUser(@Body() body:any){
        return {
            name:body.name,
            email:body.email
        }
      }
}