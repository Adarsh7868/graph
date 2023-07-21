import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
// import { User2 } from 'src/users/entities/user.entity';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { Auth } from './dto/entity';
import { PromiseOrValue } from 'graphql/jsutils/PromiseOrValue';
import { User2 } from '../users/entities/user.entity';

@Resolver(()=>User2)
export class AuthResolver {

    constructor(private authService:AuthService){}
    
    @Mutation(() => String)
     async login(@Args('email') email: string, @Args('password') password: string) {
    // return this.authService.login(email, password);
  }
    
    }
    

