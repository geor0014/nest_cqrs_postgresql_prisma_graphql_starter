import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User as UserModel } from '@prisma/client';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users();
  }

  @Get('/user/:id')
  async getUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user(Number(id));
  }

  @Post('/user')
  async createUser(@Body() data: Prisma.UserCreateInput): Promise<UserModel> {
    return this.userService.createUser(data);
  }

  @Put('/user/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: Prisma.UserUpdateInput,
  ): Promise<UserModel> {
    return this.userService.updateUser({
      data,
      id: Number(id),
    });
  }

  @Delete('/user/:id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser(Number(id));
  }
}
