import { defineStore } from "pinia";
import { cities } from "../datasets";
import { isZeroContain } from "../utils";

export const useCitiesStore = defineStore("cities", {
  state: () => ({
    query: '',
    all: cities,
  }),

  getters: {
    lookup: (state) => (query) => {
      return query ? state.all.filter((x) => isZeroContain(x, query)) : []
    }
  }
});