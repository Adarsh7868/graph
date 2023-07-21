import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Author2 } from 'src/author/author.schema';

@ObjectType()
@Schema({ timestamps: true })
export class Book2{

  @Prop()
  @Field()
  title: string

  @Prop()
  @Field()
  description:string

  @Prop()
  @Field(()=>Int )
  price: number

  @Prop()
  @Field(()=>Int)
  purchase: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Author2' })
  @Field()
  authorid: string;

}

export const BookSchema2 = SchemaFactory.createForClass(Book2);
