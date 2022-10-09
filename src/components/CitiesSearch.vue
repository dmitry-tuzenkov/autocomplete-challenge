<template>
  <div class="w-full py-3">
    <AutoComplete label="Type 3 letters for cities search" v-model:query="query" :options="queryResults"
      :nothing="nothingFound" />
    <p class="py-1 px-2 text-xs text-gray-400">
      Try to type: {{_all.join(', ')}}
    </p>
  </div>
</template>

<script>
import { useCitiesStore } from '@/stores/cities'
import AutoComplete from './Autocomplete.vue'

export default {
  name: "CitiesSearch",

  components: {
    AutoComplete
  },

  setup() {
    const store = useCitiesStore()
    return { _lookup: store.lookup, _all: store.all }
  },

  data: () => ({
    query: '',
  }),

  computed: {
    nothingFound() {
      return this.query.length >= 3 && !this._lookup(this.query).length
    },

    queryResults() {
      if (this.query.length < 3) {
        return []
      }

      return this._lookup(this.query)
        .map((x, i) => ({ id: i, label: x }))
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
