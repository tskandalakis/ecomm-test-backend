import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private usersRepository: typeof User) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll<User>();
  }

  async create(user: CreateUserDto): Promise<User> {
    return this.usersRepository.create(user);
  }

  async update(id: string, user: UpdateUserDto): Promise<User> {
    return this.usersRepository.update<User>(user);
  }

  async delete(id: string): Promise<User> {
    return this.usersRepository.delete(id);
  }
}