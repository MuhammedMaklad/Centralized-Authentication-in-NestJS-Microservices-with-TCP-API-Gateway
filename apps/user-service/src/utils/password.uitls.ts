import * as bcrypt from "bcryptjs";


export class PasswordUtils {
  private static readonly SALT_ROUNDS = 12;

  static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, PasswordUtils.SALT_ROUNDS);
  }

  static async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
  static async generateSalt(): Promise<string> {
    return bcrypt.genSalt(PasswordUtils.SALT_ROUNDS);
  }
}