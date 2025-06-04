// import { Module } from '@nestjs/common';
// import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot({ isGlobal: true }),  // já deixa o ConfigService global
//     MongooseModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: (config: ConfigService): MongooseModuleOptions => {
//         const uri = config.get<string>('MONGO_URI');
//         if (!uri) {
//           throw new Error('MONGO_URI não está definido no .env');
//         }
//         return { uri };
//       },
//     }),
//     UsersModule,
//     AuthModule,
//   ],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // 1) Carrega o .env e torna o ConfigService global
    ConfigModule.forRoot({ isGlobal: true }),
    // 2) Só depois registra a conexão Mongoose
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
