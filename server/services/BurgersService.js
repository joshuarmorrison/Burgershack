import { fakeDb } from '../db/fakeDb.js'
import { BadRequest } from '../utils/Errors.js'

class BurgersService {
  getBurger(id) {
    throw new Error('Method not implemented.')
  }

  getById(id) {
    const found = fakeDb.burgers.find(b => b.id === id)
    if (!found) {
      throw new Error()
    }
    return found
  }

  createBurger(burgerData) {
    const found = fakeDb.burgers.find(b => b.name === burgerData.name)
    if (found) {
      throw new BadRequest('Burger already Exists')
    }
    burgerData.id = Math.floor(Math.random() * 25).toString()
    fakeDb.burgers.push(burgerData)
    return burgerData
  }
}
export const burgersService = new BurgersService()
