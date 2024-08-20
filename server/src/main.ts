import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.enableCors()
    app.setGlobalPrefix('api')
    app.useGlobalPipes(new ValidationPipe())

    const config = new DocumentBuilder()
        // заголовок
        .setTitle('Sneaker store backend')
        // описание
        .setDescription('')
        // версия
        .setVersion('1.0')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    // первый параметр - префикс пути, по которому будет доступна документация
    SwaggerModule.setup('swagger', app, document)

    if (process.env.PORT) {
        console.log(`started on ${process.env.PORT}`)
        await app.listen(process.env.PORT)
    } else {
        console.log(`started on 3005`)
        await app.listen(3005)
    }
}
bootstrap()
