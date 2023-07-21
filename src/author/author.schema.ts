import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Book2 } from "../book/schemas/book.schema";
// import { type } from "os";

@Schema()
@ObjectType()
export class Author2{
 
  @Prop()
  @Field()
  name: string;

  @Field()
  _id: string;

  @Prop()
  @Field(()=>Int)
  age: number;

  @Prop()
  @Field()
  profession: string;
  
  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Book2' })
  @Field(() => [Book2]) 
  BookList: [Book2];
  
}

export const AuthorSchema2 = SchemaFactory.createForClass(Author2);
