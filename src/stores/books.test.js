/* eslint-disable no-undef */
import { setActivePinia, createPinia } from 'pinia'
import { useBooksStore } from './books'
import { useCitiesStore } from './cities'
// import { books, cities } from '../datasets'

describe('Book Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('lookup books', () => {
    const store = useBooksStore()
    expect(store.lookup).toBeDefined()
    expect(store.lookup('Don').length).toEqual(1)
    expect(store.lookup('Don')[0]).toEqual({
      title: "Don Quixote",
      author: "Miguel De Cervantes",
    },)
  })

  it('lookup cities', () => {
    const store = useCitiesStore()
    expect(store.lookup).toBeDefined()
    expect(store.lookup('san').length).toEqual(5)
    expect(store.lookup('san')).toEqual(["san jose",
      "santiago",
      "san francisco",
      "santa rosa",
      "san juan",])
  })

})