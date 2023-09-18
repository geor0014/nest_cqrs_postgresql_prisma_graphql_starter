import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CqrsModule } from '@nestjs/cqrs';
import { QueryHandlers } from './queries/handlers';
import { CommandHandlers } from './commands/handlers';
import { UserResolver } from './users.resolver';
import { UserService } from './users.service';

@Module({
  providers: [
    PrismaService,
    ...QueryHandlers,
    ...CommandHandlers,
    UserResolver,
    UserService,
  ],
  imports: [CqrsModule],
  exports: [],
  controllers: [],
})
export class UsersModule {}
