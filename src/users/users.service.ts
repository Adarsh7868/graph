import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
// import { UpdateUserInput } from './dto/update-user.input'
import { User2 } from './entities/user.entity';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Args } from '@nestjs/graphql';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User2.name)
    private userModel : mongoose.Model<User2>){}

  async createUser(createUser: CreateUserInput): Promise<User2> {
    return await this.userModel.create(createUser);
  }
  
  async findAll():Promise<User2[]> {
     return await this.userModel.find()
  }

  async findOne(@Args('email') email: String): Promise<User2>{
    return this.userModel.findOne({ email: email });
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
