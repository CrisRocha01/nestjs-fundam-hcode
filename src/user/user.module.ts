import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrimaModule } from 'src/prisma/prisma.module';
import { UserService } from './user.service';

@Module({
  imports: [PrimaModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule {}
