import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Account extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  amount: string;

  @Prop({ required: true })
  password: string;
}

export const AccountModel = SchemaFactory.createForClass(Account);
