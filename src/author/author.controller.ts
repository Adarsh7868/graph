// import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
// import { AuthorService2 } from './author.service';
// import { Author2 } from './schemas/author.schema';
// import { Book2 } from 'src/book/schemas/book.schema';
// import { createAuthDto } from './dto/createAuth.dto';

// @Controller('author')
// export class AuthorController2 {
//     constructor(private authorService : AuthorService2){}

//     @Get()
//     async getaAlldata():Promise<Author2[]>{
//         return await this.authorService.findAll()
//     }

//     @Get('/agg')
//     async getaAlldata2():Promise<Author2[]>{
//         return await this.authorService.getBooksInAuthor()
//     }

//     // getting one data by id using params
//     // @Get(':id')
//     // async getById(
//     //     @Param('id')
//     //     id:string
//     // ):Promise<author>{
//     //     return await this.authorService.findById(id)
//     // }

//     @Post()
//     async createAuthor(
//         @Body()
//         author: createAuthDto,
//     ):Promise<Author2>{
//         return await this.authorService.create(author)
//     }

//     @Put(':id')
//     async updateBook(
//        @Param('id')
//        id: string,
//        @Body()
//        author
//     ):Promise<Author2>{
//        return await this.authorService.updatebyid(id,author);
//     }

//     @Delete(':id')
//     async deletebook(
//        @Param('id')
//        id: string
//     ):Promise<Author2>{
//        return await this.authorService.deletebyid(id);
//     }

//     // @Get(':id') 
//     // async getbooksbyauthor(id: string[]): Promise<author[]>{
//     //     return await this.authorService.getAuthorsByBookIds(id)
//     // }
  
// }
