import request from 'supertest';
import app from '../app';
import AppDataSource from '../database/data-source';
import { productsArr, product } from './testUtils';
import Products from '../entity/product.entity';

const connection = AppDataSource.setOptions({
  entities: [Products],
  synchronize: false,
  logging: true
})

beforeEach(async () => {
  await connection.initialize()
})


describe('GET /products', () => {

  it('responds with users array', async function () {
    const response = await request(app).get('/products').send(productsArr)
    expect(response.status).toBe(200)
  });

  it('responds with product', async function () {
    const response = await request(app).get('/products/3').send(product)
    expect(response.status).toBe(200)
  });
})

afterEach(async () => {
  await connection.destroy()
})