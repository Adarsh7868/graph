// import { Controller, Get,Post,Put,Delete,Body, Param } from '@nestjs/common';
// import { BookService } from './book.service';
// import { Book2 } from './schemas/book.schema';
// import { CreateBookInput } from './dto/createBook.dto';
// import { UpdateBookInput } from './dto/updateBook.dto';
// @Controller('book')
// export class BookController {
//     constructor(private bookservive : BookService){
//     }

//     @Get() 
//    //  @UseGuards(AuthGuard())
//     async getapi(): Promise<Book[]>{
//         return await this.bookservive.findAll()
//     }
   
//     @Get(':id')
//      async getbook(
//         @Param('id')
//         id: string
//      ):Promise<Book>{
//         return await this.bookservive.findone(id);
//      }

//    /* Posting data in book with the author id in the value part of object to identify it on
//     fetching time and joins with books array */
//     @Post()
//      //  @UseGuards(AuthGuard())  
//     async createBook(
//         @Body()
//         book : createBookdto,
//       //   @Req() req,
//     ):Promise<Book>{
//         return this.bookservive.create(book);
//     }

  
//    //   @Put(':id')
//    //   async updateBook(
//    //      @Param('id')
//    //      id: string,
//    //      @Body()
//    //      book :UpdateBookdto,
//    //   ):Promise<Book>{
//    //      return await this.bookservive.updatebyid(id,book);
//    //   }
//      @Put(':id')
//      async updateBook(
//         @Param('id')
//         id: string,
//      ):Promise<Book>{
//         return await this.bookservive.updateById(id);
//      }
//      /*
//      @Put(':id/remove-customer/:cust_id')
//   removeCustomer(@Param('id') id: string, @Param('cust_id') custId: string) {
   
//    }
//  }*/




//    //   @Delete(':id')
//    //   async deletebook(
//    //      @Param('id')
//    //      id: string
//    //   ):Promise<Book>{
//    //      return await this.bookservive.deletebyid(id);
//    //   }

//      @Delete(':id')
//      async deletecustomer(
//         @Param('id')
//         id: string
//      ):Promise<Book>{
//       console.log(id)
//         return await this.bookservive.deletecustomerField(id);
//      }

//      // ******creating a customer for existing book in book-db.*****
//    @Post(':id')
//    async createCustomer(
//      @Param('id') 
//      id: string,
//    ):Promise<Book>{
//      console.log(id)
//      return await this.bookservive.updateCustomer(id);
//    }
     
// }
