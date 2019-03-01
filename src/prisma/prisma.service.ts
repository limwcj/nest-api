import { Injectable } from "@nestjs/common";
import { Prisma } from "./prisma.binding";

@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    super({
      endpoint: "http://localhost:4001",
      debug: false
    });
  }
}
