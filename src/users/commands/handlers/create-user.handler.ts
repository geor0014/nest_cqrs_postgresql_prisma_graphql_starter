import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl/create-user.command';
import { PrismaService } from 'prisma/prisma.service';
import { User } from '@prisma/client';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: CreateUserCommand): Promise<User> {
    return this.prisma.user.create({ data: command.data });
  }
}
