import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl/create-user.command';
import { PrismaService } from 'prisma/prisma.service';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: CreateUserCommand) {
    return this.prisma.user.create({ data: command.data });
  }
}
