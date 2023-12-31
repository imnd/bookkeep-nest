import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ["content-type"],
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle("Bookkeep")
    .setDescription("Small trading company bookkeep")
    .setVersion("1.0.0")
    .addTag("IMND")
    .build();

  // Swagger documentation
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/docs", app, document);

  const PORT = process.env.APP_PORT;
  await app.listen(PORT, () => console.log(`App started at port ${PORT}`));
}

bootstrap();
