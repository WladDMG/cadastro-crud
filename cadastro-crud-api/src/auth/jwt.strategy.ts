// // import { Strategy, ExtractJwt } from 'passport-jwt';
// // import { PassportStrategy } from '@nestjs/passport';
// // import { Injectable } from '@nestjs/common';
// // import { ConfigService } from '@nestjs/config';

// // @Injectable()
// // export class JwtStrategy extends PassportStrategy(Strategy) {
// //   constructor(config: ConfigService) {
// //     super({
// //       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
// //       secretOrKey: config.get('JWT_SECRET'),
// //     });
// //   }

// //   async validate(payload: any) {
// //     return { userId: payload.sub, email: payload.email };
// //   }
// // }
// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy, ExtractJwt } from 'passport-jwt';
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly configService: ConfigService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: configService.get<string>('JWT_SECRET'),
//     });
//   }

//   // o payload é o objeto que você assinou no AuthService.login()
//   async validate(payload: any) {
//     // aqui você pode retornar um objeto de usuário simplificado,
//     // que ficará disponível em `req.user` nas rotas protegidas.
//     return { userId: payload.sub, email: payload.email };
//   }
// }
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }


  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
