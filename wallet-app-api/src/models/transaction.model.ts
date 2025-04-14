import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Transaction extends Document {
  @Prop({ required: true })
  accountId: string;

  @Prop({ required: true })
  destinationId: string;

  @Prop({ required: true })
  transactionAmount: string;

  @Prop({ required: true })
  transactionType: string;

  @Prop({ required: true })
  transactionDate: string;
}

export const TransactionModel = SchemaFactory.createForClass(Transaction);
