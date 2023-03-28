const express = require('express')

const familyController = require('./family/family.controller')
const paymentController = require('./payment/payment.controller')
const incomeController = require('./income/income.controller')

const setupServer = () => {
  const app = express()
  app.use(express.json())
  // family
  app.get('/api/family', familyController.get)
  app.get('/api/family/:id', familyController.getId)
  app.post('/api/family', familyController.create)
  app.patch('/api/family/:id', familyController.edit)
  app.delete('/api/family/:id', familyController.delete)

  // payment
  app.get('/api/payment', paymentController.get)
  app.get('/api/payment/:familyid', paymentController.getfamilyId)
  app.get('/api/payment/:id', paymentController.getId)
  app.post('/api/payment', paymentController.create)
  app.patch('/api/payment/:id', paymentController.edit)
  app.delete('/api/payment/:id', paymentController.delete)

  // income
  app.get('/api/income', incomeController.get)
  app.get('/api/income/:id', incomeController.getId)
  app.post('/api/income', incomeController.create)
  app.patch('/api/income/:id', incomeController.edit)
  app.delete('/api/income/:id', incomeController.delete)

  return app
}

module.exports = { setupServer}
