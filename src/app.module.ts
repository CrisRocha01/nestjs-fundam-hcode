import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrimaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, PrimaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
