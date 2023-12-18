const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

test('notes are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('id exists', async () => {
    const response = await api.get('/api/blogs')
    const responseBody = response.body
    expect(response.status).toBe(200)
    expect(responseBody.map((resp => resp.id))).toBeDefined()
  })

afterAll(async () => {
  await mongoose.connection.close()
})