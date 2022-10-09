<template>
  <div class="w-full py-3">
    <AutoComplete focused label="Type 3 letters for book search" v-model:query="query" :options="queryResults"
      :nothing="nothingFound" />
    <p class="py-1 px-2 text-xs text-gray-400">
      Try to type: {{_all.map(x => x.title).join(', ')}}
    </p>
  </div>
</template>

<script>
// import { mapState } from 'pinia'
import { useBooksStore } from '@/stores/books'
import AutoComplete from './Autocomplete.vue'

export default {
  name: "BooksAutoComplete",

  components: {
    AutoComplete
  },

  setup() {
    const store = useBooksStore()
    return { _lookup: store.lookup, _all: store.all }
  },

  data: () => ({
    query: '',
  }),

  computed: {
    nothingFound() {
      return this.query.length > 3 && !this._lookup(this.query).length
    },

    queryResults() {
      if (this.query.length < 3) {
        return []
      }

      return this._lookup(this.query)
        .map((x, i) => ({ id: i, label: `${x.title} (${x.author})` }))
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
