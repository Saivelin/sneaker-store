import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ReviewModule } from './review/review.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

const ENV = process.env.NODE_ENV;

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, envFilePath: !ENV ? '.env' : `.env.${ENV}` }),
        // TypeOrmModule.forRootAsync({
        //     imports: [ConfigModule],
        //     inject: [ConfigService],
        //     useFactory: (configService: ConfigService) => (
        //         {
        //             type: 'postgres',
        //             host: configService.get('DB_HOST'),
        //             port: configService.get('DB_PORT'),
        //             username: configService.get('DB_USER'),
        //             password: configService.get('DB_PASSWORD'),
        //             database: configService.get('DB_NAME'),
        //             synchronize: true,
        //             entities: [__dirname + '/**/*.entity.ts', Product, Category, Review]
        //         }
        //     )
        // }),
        ServeStaticModule.forRoot({rootPath: join(__dirname, '..','static'), serveRoot: '/api/uploads'}),
        ProductModule,
        CategoryModule,
        ReviewModule,
        UserModule,
        AdminModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
