import { makeAutoObservable } from 'mobx'

class CounterStore {
  count = 0

  constructor () {
    makeAutoObservable(this)
  }

  increment (): void {
    this.count++
  }

  decrement (): void {
    this.count--
  }
}

export const counterStore = new CounterStore()
