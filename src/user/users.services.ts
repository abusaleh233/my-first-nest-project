import { Injectable } from "@nestjs/common";

@Injectable()

export class UsersServices{
    private users:any[] = [];

    createUser(user:any){
        this.users.push(user)

        return {
            "message":"user create successfully",
            "data":user,
        }
    }
}