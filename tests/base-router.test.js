const express = require('express');
const supertest = require('supertest');

const baseRouter = require('../web/router/base-router');


let app;
beforeEach(() => {
  app = express();
  baseRouter(app);
});

it('Testing root route', async () => {
  const response = await supertest(app)
    .get('/');

  expect(response.text).toBe('Hello!')
});
