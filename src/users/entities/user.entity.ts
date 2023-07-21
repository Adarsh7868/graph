import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class User2 {
 
  // @Prop()
  // @Field(() => String)
  // token : string;
  
  @Prop()
  @Field(() => String)
  name : string;

  @Prop()
  @Field(() => String)
  email : string;
  
  @Prop()
  @Field()
  password : string;

  @Prop()
  @Field({nullable:true})
  privateKey: string;
}
export const UserSchema2 = SchemaFactory.createForClass(User2);
