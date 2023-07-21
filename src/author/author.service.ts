import { BadRequestException, Get, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Author2 } from './author.schema';

import { Book2 } from '../book/schemas/book.schema';
import mongoose from 'mongoose';
import { CreateAuthorArgs } from './args/create.author.args';

@Injectable()
export class AuthorService2 {

    constructor(
        @InjectModel (Author2.name)
        private authorModel: mongoose.Model<Author2>
    ){}


    async findAll():Promise<Author2[]>{
        return await this.authorModel.find();
    }

    async getBooksInAuthor(): Promise<Author2[]> {
      const authors = await this.authorModel.aggregate([
        {
          $lookup: {
            from: 'book2',
            localField: '_id',
            foreignField: 'authorid',
            as: 'BookList',
          },
        },
        // {
        //   $unwind: '$BookList',
        // },
        // {
        //   $group: {
        //     _id: '$_id',
        //     name: { $first: '$name' },
        //     age: { $first: '$age' },
        //     profession: { $first: '$profession' },
        //   BookList: { $push: '$BookList' },
           
        //   },
        // },
        // {
        // { 
        //    $project: {
        //     _id: 1,
        //     name: 1,
        //     age: 1,
        //     profession: 1,
        //     BookList: {
        //       $filter: {
        //         input: '$BookList',
        //         as: 'book',
        //         cond: { $gte: ['$$book.purchase',2] 
        //                    && ['$$book.price',3000]},
                  
        //       },
            
        //     },
        
        //   }
        // }
        // },
      ]).exec();
    
      console.log('agg =>', authors);
    
      return authors;
    }
    

// *****************This is for mongodb book<author and customer collcetion***************
    async getBooksInAuthor2(): Promise<Author2[]> {
      const Author = await this.authorModel.aggregate([
             {
                  $lookup: {
                    from: 'book2',
                    localField: 'book',
                    foreignField: '_id',
                    as: 'BookList'
                  }
              },
              // {
              //   $lookup: {
              //     from: 'customers',
              //     localField: 'Books_Written.cust_id',
              //     foreignField: '_id',
              //     as: 'Customers'
              //   }
              // },
    //           {
    //             $project: {
    //               _id: 1,
    //               name: 1,
    //               age: 1,
    //               profession: 1,
    //               Books: {
    //                 $filter: {
                     
    //                   input: '$Books',
    //                   as: 'book',
    //                   cond: { $gte: ['$$book.price',2000]},
    //                   // && ['$$book.price',10000]
    //                   title:1,
    //                   description:1,
    //                   price:1,
    //                 },
                    
    //               },
                  
    //               // Customers:1,
    //             }
    //           }
    //   ]);
    //   return Author;
    // }
              // This add the "Customers" in "Books_Written" array.
              // {
              //   $addFields: {
              //     Books_Written: {
              //       $map: {
              //         input: '$Books_Written',
              //         as: 'book',
              //         in: {
              //           $mergeObjects: [
              //             '$$book',
              //             {
              //               Customers: {
              //                 $filter: {
              //                   input: '$Customers',
              //                   as: 'customer',
              //                   cond: {
              //                     $eq: ['$$customer._id', '$$book.cust_id']
              //                   }
              //                 }
              //               }
              //             }
              //           ]
              //         }
              //       }
              //     }
              //   }
              // },
              // {
              //   $project: {
              //     _id: 1,
              //     name: 1,
              //     age: 1,
              //     profession: 1,
              //     Books_Written: {
              //       _id: 1,
              //       title: 1,
              //       description:1,
              //       purchase:1,
              //       category:1,
              //       Customers:{
              //         _id:1,
              //         name:1
              //       }
              //     }
              //   }
              // },
             
            // {
            //   $project: {
            //     _id: 1,
            //     name: 1,
            //     age: 1,
            //     profession: 1,
            //     customers:1,
            //     Books_Written: [{
            //       $concatArrays: [
            //         '$Books_Written',
            //         {
            //           $map: {
            //             input: '$Customers',
            //             as: 'customer',
            //             in: {
            //               _id: '$$customer._id',
            //               name: '$$customer.name',
            //               dob: '$$customer.dob',
            //             }
            //           }
            //         }
            //       ]
            //     }]
            //   }
            // }
            


    // Its showing customer data but in another object after Books_Written.
            
      //       $lookup: {
      //         from: 'books',
      //         let: { aut_id: '$_id' },
      //         pipeline: [
      //           {
      //             $match: {
      //               $expr: {
      //                 $and: [
      //                   { $in: ['$authorid', '$$aut_id'] },
      //                   { $gt: ['age', 50] }
      //                 ]
      //               }
      //             }
      //           }
      //         ],
      //         as: 'Books_Written'
      //       }
      //     }
    // 
    //     //   },
    //     

                 //   IT is suitable for joining 2 collections 
        //   {
        //     $unwind: "$Books_Written"
        //   },
          { "$redact": {
                "$cond": {
                   "if": {
                      "$and": [
                        // { "$eq": [ "$age", 60] },
                        { "$gte": [ "BookList.price" ,2000]} 
                        // { $gt: [ "Books_Written.price" ,8000]}                  
                      ]
                   },
                   "then": "$$DESCEND",
                   "else": "$$PRUNE",
                }
            }},
    //     //  {
    //     //     "$match":{"Books_Written.age":60} 
    //     //  },
    //     //   {
    //     //     $addFields: {
    //     //       Books_written: {
    //     //         $filter: {
    //     //           input: "$Books_written",
    //     //           cond: { $gt: [" $$this.age",50] },
                  
    //     //         }
    //     //       }
    //     //     }
    //     //   },
    //     //   {
    //     //     "$group": {
    //     //       "_id": "$_id",
    //     //       "name": { $first: "$name" },
    //     //       "age": { $first: "$age" },
    //     //       "profession": { $first: "$profession" },
    //     //       "Books_Written": { $push: "$Books_Written" }
    //     //     }
    //     //   },
                  
        ]);
      
        return Author;
      }


      // This is adding customer but it is empty in books_Written array.
      // async getBooksInAuthor(): Promise<author[]> {
      //   const authors = await this.authorModel.aggregate([
      //     {
      //       $lookup: {
      //         from: 'books',
      //         localField: '_id',
      //         foreignField: 'authorid',
      //         as: 'Books_Written'
      //       }
      //     },
      //     {
      //       $lookup: {
      //         from: 'customers',
      //         localField: 'Books_Written.cust_id',
      //         foreignField: '_id',
      //         as: 'Customers'
      //       }
      //     },
      //     {
      //       $addFields: {
      //         Books_Written: {
      //           $map: {
      //             input: '$Books_Written',
      //             as: 'book',
      //             in: {
      //               $mergeObjects: [
      //                 '$$book',
      //                 {
      //                   Customers: {
      //                     $filter: {
      //                       input: '$Customers',
      //                       as: 'customer',
      //                       cond: {
      //                         $eq: ['$$customer._id', '$$book.cust_id']
      //                       }
      //                     }
      //                   }
      //                 }
      //               ]
      //             }
      //           }
      //         }
      //       }
      //     },
      //     {
      //       $project: {
      //         _id: 1,
      //         name: 1,
      //         age: 1,
      //         profession: 1,
      //         Books_Written: {
      //           _id: 1,
      //           title: 1,
      //           description: 1,
      //           purchase: 1,
      //           category: 1,
      //             Customers: {
      //               _id: 1,
      //               name: 1,
      //               dob: 1
      //             }
      //         }
      //       }
      //     }
      //   ]);
      
      //   return authors;
      // }
      
    //creating author
    async create(author:CreateAuthorArgs){
  
        const data = await this.authorModel.create(author);
        console.log("data",data)
        return data
    }
    //Get(id) 
    async findById(id:string):Promise<Author2>{
        const isvalid = mongoose.isValidObjectId(id)
        // if id is not valid it thrown error by built in methods.
        if(!isvalid){
            throw new BadRequestException("Please enter correct id")
        }

        const authorId = await this.authorModel.findById(id);

        if(!authorId){
            throw new NotFoundException("Invalid author id")
        }
        return authorId
    }

     //Updating particular ID data by findByIdAndUpdate() method
     //Put(id,author)
     async updatebyid(id:string, author:CreateAuthorArgs):Promise<Author2>{
        
        return await this.authorModel.findByIdAndUpdate(id,author,{
            new:true,
            runValidators:true,
        });
    }
    //Delete(id)
    async deletebyid(id:string):Promise<Author2>{
        return await this.authorModel.findByIdAndDelete(id)
    }
}
