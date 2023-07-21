import { Module } from '@nestjs/common';
import { AuthorService2 } from './author.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema2, Author2 } from './author.schema';
import { AuthorResolver2 } from './author.resolver';

@Module({
  imports:[
    MongooseModule.forFeature([ {name:'Author2',schema: AuthorSchema2 }])
  ],
  controllers: [],
  providers: [AuthorService2,AuthorResolver2]
})
export class AuthorModule {}
