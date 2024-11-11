import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';

/**
 * The controller class for the users module that contains the endpoints.
 */
@Controller('users')
export class UsersController {
  /**
   * Constructor for the UsersController class
   * @param usersService - The service for the users module
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * Create a new user
   * @param createUserDto - The input for creating a user
   * @returns - The created user
   */
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.create(createUserDto);
  }

  /**
   * Find all users
   * @returns - A list of users
   */
  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  /**
   * Find a user by id
   * @param id - The id of the user
   * @returns - The user or null if not found
   */
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return await this.usersService.findOne(id);
  }

  /**
   * Update a user
   * @param id - The id of the user
   * @param updateUserDto - The input for updating a user
   * @returns - The updated user or null if not found
   */
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User | null> {
    return await this.usersService.update(id, updateUserDto);
  }

  /**
   * Remove a user
   * @param id - The id of the user
   * @returns - The removed user or null if not found
   */
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User | null> {
    return await this.usersService.remove(id);
  }
}
