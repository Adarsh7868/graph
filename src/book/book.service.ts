import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Book2 } from './schemas/book.schema';
import { promises } from 'dns';
import { CreateBookArgs } from './args/create.book.args';

@Injectable()
export class BookService2 {
  
  constructor(
    @InjectModel(Book2.name)
    private book2Model : mongoose.Model<Book2>){}


  // Retrieve all books
  async getAllBooks(): Promise<Book2[]> {
    return await this.book2Model.find();
  }

  // Create a new book
  async createBook(book:CreateBookArgs):Promise<Book2>{
     const data = await this.book2Model.create(book);
    //  console.log("created data is",data)
    return data
  }

  //update by id
  async updateById(id: string,book:CreateBookArgs):Promise<Book2> {
    return await this.book2Model.findByIdAndUpdate(id,book)
  }

  // Find a book by ID
  async findone(id: string): Promise<Book2> {
    return await this.book2Model.findById(id);
  }
  
  // Update a book by ID
//   async updateById(id: string,book:Book2): Promise<Book2> {
//     return this.book2Model.findByIdAndUpdate(id, { $inc: { purchase: -1 } }, { new: true })
//       .exec();
//   }

  // Delete a book by ID
  async deleteBook(id: string): Promise<Book2> {
    return await this.book2Model.findByIdAndDelete(id);
  }

  // Delete a customer field from a book
//   async deleteCustomerField(id: string): Promise<Book2> {
//     const updatedBook = await this.book2Model
//       .findByIdAndUpdate(id, { $pull: { cust_id: "64a64cf90f0e4c8317541c4c" } }, { new: true })
//       .exec();
//     await this.book2Model
//       .findByIdAndUpdate(id, { $inc: { purchase: -1 } }, { new: true })
//       .exec();
//     return updatedBook;
//   }

  // Update a book by adding a customer
//   async updateCustomer(id: string): Promise<Book2> {
//     const updatedBook = await this.book2Model
//       .findByIdAndUpdate(id, { $push: { cust_id: "64a79fd144fe03c281c9217f" } }, { new: true })
//       .exec();
//     await this.book2Model
//       .findByIdAndUpdate(id, { $inc: { purchase: 1 } }, { new: true })
//       .exec();
//     return updatedBook;
//   }
}
