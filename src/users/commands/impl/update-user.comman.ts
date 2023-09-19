import { UpdateUserDto } from 'src/users/dto/update-user.dto';

export class UpdateUserCommand {
  constructor(
    public readonly data: UpdateUserDto,
    public readonly id: number,
  ) {}
}
