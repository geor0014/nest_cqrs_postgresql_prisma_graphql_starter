import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetAllUsersQuery } from './queries/impl/get-all-users.query';
import { GetUserByIdQuery } from './queries/impl/get-user-by-id.query';
import { CreateUserCommand } from './commands/impl/create-user.command';
import { UpdateUserCommand } from './commands/impl/update-user.comman';
import { DeleteUserCommand } from './commands/impl/delete-user.command';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private queryBus: QueryBus,
    private commandBus: CommandBus,
  ) {}

  async user(id: number): Promise<User | null> {
    return this.queryBus.execute(new GetUserByIdQuery(id));
  }

  async users(): Promise<User[]> {
    return this.queryBus.execute(new GetAllUsersQuery());
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.commandBus.execute(new CreateUserCommand(data));
  }

  async updateUser(params: {
    id: number;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { id, data } = params;
    return this.commandBus.execute(new UpdateUserCommand(data, id));
  }

  async deleteUser(id: number): Promise<User> {
    return this.commandBus.execute(new DeleteUserCommand(id));
  }
}
