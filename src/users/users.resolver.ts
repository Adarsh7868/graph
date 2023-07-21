import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User2 } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import * as bcrypt from 'bcrypt';
// import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User2)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User2, { name: 'createUser' })
  async createUser(@Args('data') data: CreateUserInput) {
    const S_key = await bcrypt.genSalt(6);
    data.privateKey = S_key;
    return this.usersService.createUser(data);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [User2],{ name: 'getAllUsers' })
  findAll(){
    return this.usersService.findAll();
  }

  @Query(() => User2, { name: 'findOneUser' })
  findOne(@Args('username') username: string) {
    return this.usersService.findOne(username);
  }

  // @Mutation(() => User)
  // updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.usersService.update(updateUserInput.id, updateUserInput);
  // }

  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.remove(id);
  // }
}
