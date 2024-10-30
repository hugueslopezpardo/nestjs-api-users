import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Data transfer object for updating a user.
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {
  /**
   * The ID of the user to be updated
   */
  @ApiProperty({
    description: 'The ID of the user to be updated',
    example: '12345',
  })
  @IsNotEmpty({ message: 'ID is required' })
  @IsString({ message: 'ID must be a string' })
  id: string;
}
