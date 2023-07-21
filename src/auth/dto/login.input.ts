import { ObjectType, Field, Int, InputType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User2 } from 'src/users/entities/user.entity';

@InputType()
export class LoginInput {

//  @Field()
// _id: string

  @Field(() => String)
  token : string;
  
  @Field(() => String)
   user2 : User2;
}

