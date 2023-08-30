import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
} from '@nestjs/common';

@Catch()
export class ValidationFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    if (exception instanceof BadRequestException) {
      const response = host.switchToHttp().getResponse();
      const getResponse: any = exception.getResponse();
      response.status(exception.getStatus()).json({
        status: getResponse.statusCode,
        message: getResponse.message.join(', '),
      });
    }
  }
}
