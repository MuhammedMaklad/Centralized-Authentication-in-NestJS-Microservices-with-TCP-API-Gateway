import { Injectable } from "@nestjs/common";
import { BaseRepository } from "./base.repository";
import { Prisma, User } from "@prisma/client";
import { DatabaseService } from "../database.service";



@Injectable()
export class UserRepository extends BaseRepository<User, Prisma.UserCreateInput, Prisma.UserUpdateInput> {
  constructor(prisma: DatabaseService) { super(prisma) }
  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }

  async findMany(options?: Prisma.UserFindManyArgs): Promise<User[]> {
    return this.prisma.user.findMany(options);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findFirst({ where: { email } });
  }

}