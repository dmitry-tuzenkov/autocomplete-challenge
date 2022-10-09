<template>
  <div data-id="autocomplete" class="w-full">
    <div @click="focusInput()" class="py-4 shadow-md border border-gray-200 rounded-md bg-white">
      <!-- Input Field -->
      <div class="flex items-center">
        <div class="pl-5 ">

          <SearchIcon className="w-5 h-5 text-gray-700" />

        </div>
        <input data-id="query-input" ref="_input_"
          class="block p-2 w-full  focus:border-transparent focus:ring-0 focus:outline-none" :placeholder='label'
          type="text" v-model='_query' />

        <XIcon v-if="_query" className="w-5 h-5 mr-5 cursor-pointer rounded-full hover:bg-gray-50 text-gray-300"
          @click="clear()" />
      </div>
      <!-- Input Field -->

      <div v-if="nothing" class="px-7 py-2 italic">
        It seems nothing found :(
      </div>
      <!-- Results List -->
      <ul data-id="query-results" class="flex flex-col">
        <li v-for="option in options" v-bind:key="option.id" class="px-7 py-2 hover:bg-gray-100 cursor-pointer">
          {{option.label}}
        </li>
      </ul>
      <!-- /Results List -->
    </div>
  </div>
</template>

<script>
import SearchIcon from './SearchIcon.vue'
import XIcon from './XIcon.vue'

export default {
  name: 'AutoComplete',

  components: {
    SearchIcon,
    XIcon
  },

  emits: ['update:query'],

  props: {
    focused: Boolean(),
    nothing: Boolean(),
    label: String(),
    query: String(),
    options: new Array(),
  },

  computed: {
    _query: {
      get() {
        return this.query
      },
      set(value) {
        this.$emit('update:query', value)
      }
    }
  },

  mounted() {
    if (this.focused) {
      this.$nextTick(() => this.focusInput())
    }
  },

  methods: {
    clear() {
      this._query = ''
    },

    focusInput() {
      this.$refs._input_.focus();
    }
  },

}

</script>

<style>

</style>