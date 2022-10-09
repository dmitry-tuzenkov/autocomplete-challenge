import { defineStore } from "pinia";
import { books } from "../datasets";
import { isZeroContain } from "../utils";

export const useBooksStore = defineStore("books", {
  state: () => ({
    query: '',
    all: books,
  }),

  getters: {
    lookup: (state) => (query) => {
      return query ? state.all.filter((x) => isZeroContain(x.title, query)) : []
    }
  }
});
