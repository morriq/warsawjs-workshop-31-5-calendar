const express = require('express');
const supertest = require('supertest');
const Ajv = require('Ajv');

const calendarRouter = require('../web/router/calendar-router');


let app;
beforeEach(() => {
  app = express();
  calendarRouter(app);
});

it('Testing root route', async () => {
  const response = await supertest(app)
    .get('/');

  expect(response.body).toEqual(jasmine.any(Object))
});

it('responses with valid schema', async () => {
  const response = await supertest(app)
    .get('/api/calendar');
  const ajv = new Ajv();

  const schema = require('../docs/schemas/calendar.scheme');
  const validate = ajv.compile(schema);

  expect(validate(response.body)).toBeTruthy();
});
