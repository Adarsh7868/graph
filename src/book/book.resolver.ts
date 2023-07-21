import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { BookService2 } from './book.service';
import { Book2 } from './schemas/book.schema';
import { CreateBookArgs } from './args/create.book.args';

@Resolver(()=>Book2)
export class BookResolver{
  constructor(public readonly bookService: BookService2){}

  // Query to get all books
  @Query(() => [Book2])
   getAllBooks(){
   return  this.bookService.getAllBooks();
  }

  // Query to get a book by ID
  @Query(() => Book2)
   findBookById(@Args("id") id: string){
    return this.bookService.findone(id);
  }

  // Mutation to create a book
    @Mutation(()=>Book2,{name:"addBook"})
  createBook(@Args("addBook") addBook:CreateBookArgs){
    const book = this.bookService.createBook(addBook)
    return book
}

  // Mutation to update a book by ID
  @Mutation(() => Book2 ,{name:"UpdateBook"})
   updateBook(@Args("id") id: string, @Args('updatebook') updatebook: CreateBookArgs){
    return this.bookService.updateById(id,updatebook);
  }

  // Mutation to delete a book by ID
  @Mutation(() => Book2)
  async deleteBook(@Args('id') id: string): Promise<Book2> {
    return this.bookService.deleteBook(id);
  }

//    Mutation to create a customer for an existing book
//   @Mutation(() => Book2)
//   async createCustomer(
//     @Args('id', { type: () => ID }) id: string
//   ): Promise<Book2> {
    // return this.bookService.updateCustomer(id);
//   }
}
