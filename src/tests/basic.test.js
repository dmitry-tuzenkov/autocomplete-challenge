/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import AutoComplete from '../components/Autocomplete.vue'

test('mount component', async () => {
  expect(AutoComplete).toBeTruthy()

  const wrapper = mount(AutoComplete, {
    props: {
      label: "Search",
      query: 'opt1',
      options: [{ id: 1, label: 'opt 1' }, { id: 2, label: 'opt 2' }]
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.get('ul[data-id="query-results"]').text()).toContain('opt 1')
  expect(wrapper.get('ul[data-id="query-results"]').text()).toContain('opt 2')
})

