import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllUsersQuery } from '../impl/get-all-users.query';
import { PrismaService } from 'prisma/prisma.service';
import { User } from '@prisma/client';

@QueryHandler(GetAllUsersQuery)
export class GetAllUsersHandler implements IQueryHandler<GetAllUsersQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetAllUsersQuery): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
