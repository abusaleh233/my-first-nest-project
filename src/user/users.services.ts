import { Injectable } from "@nestjs/common";

@Injectable()

export class UsersServices{
    getuser(){
        return ["saleh","Ahmad","fahim"]
    }
}