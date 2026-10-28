import { Body, Controller,Get,HttpException,Post } from "@nestjs/common";
import { UsersServices } from "./users.services.js";

@Controller('users')

export class UsersController{
    constructor(private usersServices: UsersServices){}
    @Post()
      createUser(@Body() body:any){
        return this.usersServices.createUser(body)
      }

    @Get('test')
    testExcep(){
      throw new HttpException(
        "something want worg",
        404
      )

    }

}