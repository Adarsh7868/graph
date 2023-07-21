import { InputType, Field, Int } from '@nestjs/graphql';
import { User2 } from '../entities/user.entity';

@InputType()
export class CreateUserInput {

  
  @Field()
  name : string;

  @Field()
  email : string
  
  @Field()
  password : string;

  @Field()
  privateKey: string;
 
}
