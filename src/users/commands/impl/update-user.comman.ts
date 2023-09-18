import { Prisma } from '@prisma/client';

export class UpdateUserCommand {
  constructor(
    public readonly data: Prisma.UserUpdateInput,
    public readonly id: number,
  ) {}
}
