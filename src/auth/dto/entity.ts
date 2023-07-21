import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Token } from 'graphql';
import { User2 } from 'src/users/entities/user.entity';

@ObjectType()
export class Auth{
    
  @Field(() => String , {nullable: true})
  token : string;
  
  @Field(()=>String, {nullable: true})
  user2 : User2;

}
export const authSchema = SchemaFactory.createForClass(Auth);

