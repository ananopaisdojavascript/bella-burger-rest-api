import { Request, Response } from 'express';
import request from 'supertest';
import app from  '../../app';

app.get("/", (_request: Request, response: Response) => {
  response.status(200).send("Oi")
})

it("the server should run on port 3000", async () => {
  const response = await request(app).get("/")
  expect(response.status).toBe(200)
})