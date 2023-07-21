import { Field, InputType, Int } from '@nestjs/graphql';
import { Author2 } from '../author.schema';
import { Book2 } from 'src/book/schemas/book.schema';

@InputType()
export class CreateAuthorArgs{

  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field()
  profession: string;

  // @Field()
  // bookid:string

}


