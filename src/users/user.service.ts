import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { QueryBus } from '@nestjs/cqrs';
import { GetAllUsersQuery } from './queries/impl/get-all-users.query';
import { GetUserByIdQuery } from './queries/impl/get-user-by-id.query';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private queryBus: QueryBus,
  ) {}

  async user(id: number): Promise<User | null> {
    return this.queryBus.execute(new GetUserByIdQuery(id));
  }

  async users(): Promise<User[]> {
    return this.queryBus.execute(new GetAllUsersQuery());
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
