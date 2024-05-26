import request from 'supertest';
import app from '../app';
import AppDataSource from '../database/data-source';
import Users from '../entity/user.entity';
import { newUser, usersArr, user, deleteUser } from './testUtils';


const connection = AppDataSource.setOptions({
  entities: [Users],
  synchronize: true,
  logging: true
})

beforeEach(async () => {
  await connection.initialize()
})

afterEach(async () => {
  await connection.destroy()
})

describe('GET /users', () => {

  it('responds with users array', async function () {
    const response = await request(app).get('/users').send(usersArr)
    expect(response.status).toBe(200)
  });

  it('responds with user', async function () {
    const response = await request(app).get('/users/1').send(user)
    expect(response.status).toBe(200)
  });
})

describe('POST /users', () => { 
  it('responds with new user', async function () {
    const response = await request(app).post('/users').send(newUser)
    expect(response.status).toBe(200)
  });
})

describe('DELETE /users', () => { 
  it.skip('should delete an user', async function () {
    const response = await request(app).delete('/users/18').send(deleteUser)
    expect(response.status).toBe(200)
  });
})