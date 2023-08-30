import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from './validation/validate.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(4000);

  // app.useGlobalPipes(new ValidationPipe());

  console.log('http://localhost:4000');
}
bootstrap();
