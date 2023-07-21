import { InputType, Field, Int} from '@nestjs/graphql';
import { Author2 } from 'src/author/author.schema';
import { Book2 } from '../schemas/book.schema';

@InputType()
export class CreateBookArgs{

  @Field(()=>String)
  title: string;

  @Field(()=>String)
  description: string;

  @Field((type) => Number )
  price: number;

  @Field((type) => Number)
  purchase: number;

  @Field(()=>String)
  authorid:string;


}