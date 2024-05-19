import request from 'supertest';
import AppDataSource from "../adapters/database/data-source";
import Login from '../core/entity/login.entity';
import app from '../app';

const login = {
  "email": "gabrielly.marcela.ferreira@dinamicaconsultoria.com",
  "password": "hdsaLuqR5U",
  "salon": false,
  "kitchen": true
}

describe('POST /login', () => {
  beforeEach(async () => {
    AppDataSource.setOptions({
      entities: [Login],
      synchronize: true,
      logging: true
    })
    await AppDataSource.initialize()
  })

  afterEach(async () => {
    await AppDataSource.destroy()
  })

  it('should create login', async () => {
    const response = await request(app).post('/login').send(login)
    expect(response.status).toBe(200)
  })
})