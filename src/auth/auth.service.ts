import { Injectable } from '@nestjs/common';
import {
  KeycloakConnectOptions,
  KeycloakConnectOptionsFactory,
  TokenValidation,
} from 'nest-keycloak-connect';

@Injectable()
export class AuthService implements KeycloakConnectOptionsFactory {
  createKeycloakConnectOptions(): KeycloakConnectOptions {
    return {
      authServerUrl: process.env.KEYCLOAK_URL,
      realm: process.env.KEYCLOAK_REALM,
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      secret: process.env.KEYCLOAK_CLIENT_SECRET,
      bearerOnly: false,
      logLevels: ['log'],
      useNestLogger: false,
      tokenValidation: TokenValidation.OFFLINE,
    };
  }
}
