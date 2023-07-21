import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema2 } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';

@Module({

  imports : [  
    MongooseModule.forFeature([{name:'User2', schema: UserSchema2 }]),
],
  providers: [UsersResolver, UsersService],
  exports:[UsersModule,UsersService]
})
export class UsersModule {}
