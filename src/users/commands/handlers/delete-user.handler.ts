import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PrismaService } from 'prisma/prisma.service';
import { DeleteUserCommand } from '../impl/delete-user.command';
import { User } from '@prisma/client';

@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: DeleteUserCommand): Promise<User> {
    const { id } = command;
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
