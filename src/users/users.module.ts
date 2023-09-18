import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'prisma/prisma.service';
import { CqrsModule } from '@nestjs/cqrs';
import { QueryHandlers } from './queries/handlers';

@Module({
  providers: [UserService, PrismaService, ...QueryHandlers],
  imports: [CqrsModule],
  exports: [],
  controllers: [UserController],
})
export class UsersModule {}
