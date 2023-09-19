import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CqrsModule } from '@nestjs/cqrs';
import { queryHandlers } from './queries/handlers';
import { commandHandlers } from './commands/handlers';
import { UserResolver } from './users.resolver';
import { UserService } from './users.service';

@Module({
  providers: [
    PrismaService,
    ...queryHandlers,
    ...commandHandlers,
    UserResolver,
    UserService,
  ],
  imports: [CqrsModule],
  exports: [],
  controllers: [],
})
export class UsersModule {}
