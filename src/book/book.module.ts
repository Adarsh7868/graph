import { Module } from '@nestjs/common';
import { BookService2 } from './book.service';
import { MongooseModule} from '@nestjs/mongoose'
import { BookSchema2 } from './schemas/book.schema';
import { BookResolver } from './book.resolver';


@Module({
  imports : [  
    MongooseModule.forFeature([{name:'Book2', schema: BookSchema2}]),
],
  controllers: [],
  providers: [BookService2,BookResolver]
})
export class BookModule{}
