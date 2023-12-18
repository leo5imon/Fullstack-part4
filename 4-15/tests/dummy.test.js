const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = [
    {
        'title': 'My Book',
        'author': 'John Doe',
        'url': 'https://www.example.com/book',
        'likes': 100
      }
  ]

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})