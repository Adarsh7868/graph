import { PassportStrategy } from "@nestjs/passport";
import { Strategy,ExtractJwt} from 'passport-jwt';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtPayload } from "./JWT.payload";
import { JwtService } from "@nestjs/jwt";
import { constants } from "buffer";
import { jwtConstants } from "./dto/constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt') {
    
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret
        });
    }

    async validate(payload:JwtPayload):Promise<any>{
    const {email,password} = payload;

    const user = await this.userService.findOne(email);
    if (!user || user.password !== password) {
        throw new UnauthorizedException('Invalid token');
      }   
     return { email:payload.email,
         password:payload.password,
         privateKey:payload.privateKey};
    }
}