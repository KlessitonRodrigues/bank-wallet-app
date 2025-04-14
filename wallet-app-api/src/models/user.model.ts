import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  surName: string;

  @Prop({ required: true })
  cpf: string;

  @Prop({ required: true })
  cnpj: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  verifyCode: string;

  @Prop({ required: true })
  verifyCodeTime: string;

  @Prop({ required: true })
  email: string;
}

export const UserModel = SchemaFactory.createForClass(User);
