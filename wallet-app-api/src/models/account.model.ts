import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Account extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  accountAmount: string;
}

export const AccountModel = SchemaFactory.createForClass(Account);
