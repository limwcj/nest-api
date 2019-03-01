import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from './prisma/prisma.module';
import { GraphqlOptions } from './graphql.options';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    UserModule,
  ],
})
export class AppModule {}
