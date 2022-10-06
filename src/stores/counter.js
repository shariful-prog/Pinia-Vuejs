import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count:0
  }),
  actions: {
    increment() {
      this.count++
    },
    decrese() {
      this.count--
    }
  },
  getters:{
    oddEven:(state)=>{
      if(state.count % 2 === 0) return 'Even Number'
      return 'Odd Number'
    }
  }
})