import { Args, ID, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { AuthorService2 } from './author.service';
import { Author2 } from './author.schema';
import { CreateAuthorArgs } from './args/create.author.args';

@Resolver(() => Author2)
export class AuthorResolver2 {
  constructor(private readonly authorService: AuthorService2) {}

  @Query(() => [Author2])
  async authors(): Promise<Author2[]> {
    return this.authorService.findAll();
  }

//   aggregate lookup for book and author

  @Query(() => [Author2], {name:"getBookInAuthor"})
   authorsWithBooks(){
    return this.authorService.getBooksInAuthor();
    
  }
  @Mutation(() => Author2 ,{name:"createauthor"})
  createAuthor(@Args("CreateAuthorArgs") CreateAuthorArgs:CreateAuthorArgs) {
    return this.authorService.create(CreateAuthorArgs);
  }

//   @Mutation(() => Author2)
//   async updateAuthor( @Args('id') id: string,@Args('author') updateAuthor: CreateAuthorArgs): Promise<Author2> {
//     return this.authorService.updatebyid(id, updateAuthor);
//   }

//   @Mutation(() => Author2)
//  deleteAuthor(@Args('id') id: string): Promise<Author2> {
//     return this.authorService.deletebyid(id);
//   }
}
