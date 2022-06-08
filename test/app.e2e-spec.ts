import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as pactum from 'pactum';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(3333);

    pactum.request.setBaseUrl('http://localhost:3333');
  });

  afterAll(() => {
    app.close();
  });

  it.todo('test widget endpoint');

  describe('Widgets', () => {
    describe('Get Widgets', () => {
      it('should throw 401 if not authorized', () => {
        return pactum.spec().get('/widgets/dashboard').expectStatus(401);
      });

      it('should throw 403 if token is not valid', () => {
        return pactum
          .spec()
          .get('/widgets/dashboard')
          .withHeaders('Authorization', 'Bearer $S{ahdahd}')
          .expectStatus(401);
      });

      it('should return widgets array', () => {
        return pactum
          .spec()
          .get('/widgets/dashboard')
          .withHeaders('Authorization', 'Bearer $S{ahdahd}')
          .expectStatus(200);
      });
    });
  });
});
