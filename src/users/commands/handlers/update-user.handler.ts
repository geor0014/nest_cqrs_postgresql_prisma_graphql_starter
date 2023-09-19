import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateUserCommand } from '../impl/update-user.comman';
import { User } from '@prisma/client';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: UpdateUserCommand): Promise<User> {
    const { data, id } = command;
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }
}
