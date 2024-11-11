import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model, Types } from 'mongoose';

/**
 * The service class for the users module that contains the business logic.
 */
@Injectable()
export class UsersService {
  /**
   * Constructor for the UsersService class
   * @param userModel - The user model
   */
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * Create a new user
   * @param createUserDto - The input for creating a user
   * @returns - The created user
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  /**
   * Find all users
   * @returns - A list of users
   */
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  /**
   * Find a user by id
   * @param id - The id of the user
   * @returns - The user
   */
  async findOne(id: string): Promise<User | null> {
    return await this.userModel.findById(new Types.ObjectId(id)).exec();
  }

  /**
   * Update a user
   * @param id - The id of the user
   * @param updateUserDto - The input for updating a user
   * @returns - The updated user
   */
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    return await this.userModel
      .findByIdAndUpdate(new Types.ObjectId(id), updateUserDto, { new: true })
      .exec();
  }

  /**
   * Remove a user
   * @param id - The id of the user
   * @returns - The removed user
   */
  async remove(id: string): Promise<User | null> {
    return await this.userModel
      .findByIdAndDelete(new Types.ObjectId(id))
      .exec();
  }
}
