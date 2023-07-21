import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Args, Mutation } from '@nestjs/graphql';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { User2 } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service';
// import { LoginResponse } from './dto/loginResponse';
// import { LoginInput } from './dto/login-user.input';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { JwtPayload } from './JWT.payload';
import mongoose from 'mongoose';
import { Auth } from './dto/entity';

@Injectable()
export class AuthService {
    
    constructor(
      private readonly userService: UsersService,
        private readonly jwtService: JwtService){}
      // @InjectModel(Auth.name)
      //   private authModel : mongoose.Model<Auth>,
      
    // async validate(email:String ,password:String):Promise<any>{
    //     console.log(email)
    //     const user = await this.userService.findOne(email)

    //     if(user && user.email === email){
    //         const {password, email , ...userData} = user
    //         return user
    //     }
    //     return null
    // } 
    
    async login(email: string, password: string): Promise<string> {
        const user = await this.userService.findOne(email);
    
        if (!user || user.password!==password) {
          throw new UnauthorizedException('Invalid credentials');
        }
        const payload : JwtPayload = { 
            email: user.email,
            password: user.password,
            privateKey:user.privateKey
           };

        const token = this.jwtService.sign(payload);
        console.log(token)
        return token;
        // await this.userService.findOne(user.email);
        // await this.tokenService.createToken({ email: user.email, token, refreshToken: "" });
        
      }
}
