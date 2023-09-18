import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [UserService, PrismaService],
  imports: [],
  exports: [],
  controllers: [UserController],
})
export class UsersModule {}
