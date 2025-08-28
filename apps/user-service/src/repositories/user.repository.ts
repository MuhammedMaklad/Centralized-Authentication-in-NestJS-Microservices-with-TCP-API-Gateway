import { GenericRepository } from "@app/database/repositories/generic.repository";
import { Prisma, PrismaClient, User } from "@prisma/client";


export class UserRepository extends GenericRepository<
  User,
  Prisma.UserCreateInput,
  Prisma.UserUpdateInput,
  Prisma.UserWhereInput
> {
  constructor(prisma: PrismaClient) {
    super(prisma, 'User')
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.findFirst({ email });
  }

}