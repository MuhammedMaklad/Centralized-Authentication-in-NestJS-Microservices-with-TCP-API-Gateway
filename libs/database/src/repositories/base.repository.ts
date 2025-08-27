import { DatabaseService } from "../database.service";


export abstract class BaseRepository<T, CreateInput, UpdateInput> {
  constructor(protected prisma: DatabaseService) { }

  abstract create(data: CreateInput): Promise<T>;
  abstract findById(id: string): Promise<T | null>;
  abstract update(id: string, data: UpdateInput): Promise<T>;
  abstract delete(id: string): Promise<T>;
  abstract findMany(options?: any): Promise<T[]>;
}