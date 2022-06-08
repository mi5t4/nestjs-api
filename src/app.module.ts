import { Module } from "@nestjs/common";
import { WidgetsModule } from "./widgets/widgets.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthGuard, KeycloakConnectModule } from "nest-keycloak-connect";
import { AuthService } from "./auth/auth.service";
import { AuthModule } from "./auth/auth.module";
import { APP_GUARD } from "@nestjs/core";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [],
    }),
    KeycloakConnectModule.registerAsync({
      useExisting: AuthService,
      imports: [AuthModule],
    }),
    WidgetsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
