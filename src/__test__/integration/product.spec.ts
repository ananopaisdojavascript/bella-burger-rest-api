import AppDataSource from "../../adapters/database/data-source";
import app from "../../app";
import Product from "../../core/entity/product.entity";
import request from "supertest";

const productsArr = [
  {
    "product_id": 1,
    "name": "Café Americano",
    "price": 5,
    "image_url": "https://res.cloudinary.com/ananopaisdojavascript/image/upload/v1716126384/burger-queen-image/american-coffee_p65gkk.jpg",
    "category": "Café da manhã"
  },
  {
    "product_id": 2,
    "name": "Café com Leite",
    "price": 7,
    "image_url": "https://res.cloudinary.com/ananopaisdojavascript/image/upload/v1716126384/burger-queen-image/coffee-with-milk_acssn5.jpg",
    "category": "Café da manhã"
  },
  {
    "product_id": 3,
    "name": "Sanduíche de Presunto com Queijo",
    "price": 10,
    "image_url": "https://res.cloudinary.com/ananopaisdojavascript/image/upload/v1716126386/burger-queen-image/sandwhich_tabqjj.jpg",
    "category": "Café da manhã"
  }
]

describe('GET /products', () => {

  beforeEach(async () => {
    AppDataSource.setOptions({
      entities: [Product],
      synchronize: true,
      logging: true
    })
    await AppDataSource.initialize()
  })

  afterEach(async () => {
    await AppDataSource.destroy()
  })
  it('should return a list of products',async () => {
    const response = await request(app).get('/products').send(productsArr)
    expect(response.status).toBe(200)
  })
})