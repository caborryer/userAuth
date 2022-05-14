/**
 * BUILT-IN AND THIRD PARTY DEPENDENCIES.
 */
import { Global, Module } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";

/**
 * CONFIG FILES.
 */
import config from "../config";
import { MongooseModule } from "@nestjs/mongoose";

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { connection, user, password, host, port, dbName } =
          configService.mongo;
        return {
          uri: `${connection}://${host}:${port}`,
          user,
          pass: password,
          dbName,
        };
      },
      inject: [config.KEY],
    }),
  ],

  exports: [MongooseModule],
})
export class DatabaseModule {}
