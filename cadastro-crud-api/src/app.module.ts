import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (cs: ConfigService): MongooseModuleOptions => {
        const uri = cs.get<string>('MONGO_URI');
        if (!uri) {
          throw new Error('MONGO_URI não está definido no .env');
        }
        return { uri };
      },
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
