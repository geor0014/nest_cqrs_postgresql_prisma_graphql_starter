import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserModel } from './user.model';
import { UserService } from './users.service';
import { Query } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly usersService: UserService) {}

  @Query((returns) => [UserModel])
  async getUsers(): Promise<UserModel[]> {
    try {
      return this.usersService.users();
    } catch (error) {
      console.log('Error getting All Users', error);
      throw new Error(error);
    }
  }

  @Query((returns) => UserModel)
  async getUserById(@Args('id') id: number): Promise<UserModel> {
    try {
      return this.usersService.user(id);
    } catch (error) {
      console.log('Error getting User by ID', error);
      throw new Error(error);
    }
  }

  @Mutation((returns) => UserModel)
  async createUser(
    @Args('CreateUserInput') data: CreateUserDto,
  ): Promise<UserModel> {
    try {
      return this.usersService.createUser(data);
    } catch (error) {
      console.log('Error creating User', error);
      throw new Error(error);
    }
  }

  @Mutation((returns) => UserModel)
  async updateUser(
    @Args('id') id: number,
    @Args('UpdateUserInput') data: UpdateUserDto,
  ): Promise<UserModel> {
    try {
      return this.usersService.updateUser(id, data);
    } catch (error) {
      console.log('Error updating User', error);
      throw new Error(error);
    }
  }

  @Mutation((returns) => UserModel)
  async deleteUser(@Args('id') id: number): Promise<UserModel> {
    try {
      return this.usersService.deleteUser(id);
    } catch (error) {
      console.log('Error deleting User', error);
      throw new Error(error);
    }
  }
}
