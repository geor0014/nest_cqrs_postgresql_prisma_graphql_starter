import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from 'prisma/prisma.service';
import { GetUserByIdQuery } from '../impl/get-user-by-id.query';
import { User } from '@prisma/client';

@QueryHandler(GetUserByIdQuery)
export class GetUserByIdHandler implements IQueryHandler<GetUserByIdQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetUserByIdQuery): Promise<User> {
    const { id } = query;
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
}
