import AppDataSource from "../adapters/database/data-source";
import app from "../app";
import User from "../core/entity/user.entity";
import request from 'supertest';

const newUser = {
  "name": "Gabrielly Marcela Lívia Ferreira",
  "email": "gabrielly.marcela.ferreira@dinamicaconsultoria.com",
  "confirm_email": "gabrielly.marcela.ferreira@dinamicaconsultoria.com",
  "password": "hdsaLuqR5U",
  "confirm_password": "hdsaLuqR5U",
  "salon": false,
  "kitchen": true
}

describe('POST /user', () => {

  beforeEach(async () => {
    AppDataSource.setOptions({
      entities: [User],
      synchronize: true,
      logging: true
    })
    await AppDataSource.initialize()
  })

  afterEach(async () => {
    await AppDataSource.destroy()
  })

  it('should create a new user', async () => {
    const response = await request(app).post('/users').send(newUser)
    expect(response.status).toBe(200)
  })
}) 