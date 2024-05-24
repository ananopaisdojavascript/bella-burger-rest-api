import request from 'supertest';
import app from '../app';
import AppDataSource from '../database/data-source';
import { ordersArr, order, createOrder, updateOrder, deleteOrder } from './testUtils';
import Orders from '../entity/order.entity';
import Products from '../entity/product.entity';

const connection = AppDataSource.setOptions({
  entities: [Orders, Products],
  synchronize: true,
  logging: true
})

beforeEach(async () => {
  await connection.initialize()
})

describe('GET /orders', () => {

  it('responds with orders array', async function () {
    const response = await request(app).get('/orders').send(ordersArr)
    expect(response.status).toBe(200)
  });

  it('responds with order', async function () {
    const response = await request(app).get('/orders/1').send(order)
    expect(response.status).toBe(200)
  });
})

describe('POST /orders', () => {
  it('should create an order', async function() {
    const response = await request(app).post('/orders').send(createOrder)
    expect(response.status).toBe(200)
  })
})

describe('PUT /orders', () => {
  it('should update an order', async function() {
    const response = await request(app).put('/orders/3').send(updateOrder)
    expect(response.status).toBe(200)
  })
})

describe('DELETE /orders', () => {
  it('should delete an order', async function() {
    const response = await request(app).delete('/orders/3').send(deleteOrder)
    expect(response.status).toBe(200)
  })
})

afterEach(async () => {
  await connection.destroy()
})