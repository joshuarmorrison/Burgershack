import { fakeDb } from '../db/fakeDb'
import { burgersService } from '../services/BurgersService'
// import { burgersService } from '../services/BurgersService.js'
import BaseController from '../utils/BaseController.js'

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurgers)
      .get('/:id', this.getBurgersById)
      .post('', this.createBurger)
  }

  async createBurger(req, res, next) {
    try {
      const newBurger = await burgersService.createBurger(req.body)
      res.send(newBurger)
    } catch (error) {
      next(error)
    }
  }

  async getBurgers(req, res, next) {
    res.send(fakeDb.burgers)
  }

  async getBurgersById(req, res, next) {
    try {
      const id = req.params.id
      const burger = await burgersService.getById(id)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
}
