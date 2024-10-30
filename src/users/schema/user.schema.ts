import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/**
 * Represents a user document
 */
export type UserDocument = User & Document;

/**
 * The User schema class that represents a user for the MongoDB database.
 */
@Schema()
export class User {
  /**
   * The first name of the user.
   */
  @Prop({ required: true })
  firstName: string;

  /**
   * The last name of the user.
   */
  @Prop({ required: true })
  lastName: string;

  /**
   * The email of the user.
   */
  @Prop({ required: true, unique: true })
  email: string;
}

/**
 * The User schema that represents a user for the MongoDB database.
 */
export const UserSchema = SchemaFactory.createForClass(User);
