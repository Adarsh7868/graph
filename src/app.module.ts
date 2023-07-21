import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorModule } from './author/author.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { UsersResolver } from './users/users.resolver';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'process';
import { AuthResolver } from './auth/auth.resolver';
import { jwtConstants } from './auth/dto/constants';


@Module({
  imports: [
    BookModule,
    AuthorModule,
  
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:join(process.cwd(), 'src/schema.gql'),
      
    }),
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal : true
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '5h' },
    }),
    MongooseModule.forRoot(process.env.Database_URI),
    AuthModule,
    UsersModule,
    
  ],
  
  controllers: [],
  providers: [AppService, UsersResolver,AuthService,AuthResolver],
})
export class AppModule {}
