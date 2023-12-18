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

  test('new blog post', async () => {
    const response = await api.get('/api/blogs')
    const responseBody = response.body
    expect(response.status).toBe(200)
    expect(responseBody.map((resp => resp.id))).toBeDefined()
  })

  test('a valid note can be added', async () => {
    const resp = await api.get('/api/blogs')
    const initialBlog = resp.body

    const newBlog = {
        title: 'La vie au Chateau',
        author: 'Jean Deau',
        url: 'https://localhost.com',
        likes: 100
      }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect('Content-Type', /application\/json/)
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(initialBlog.length + 1)
  })

afterAll(async () => {
  await mongoose.connection.close()
})