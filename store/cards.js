function changeLocalStorage(list) {
  localStorage.setItem('cards', JSON.stringify(list))
}

export const state = () => ({
  list: []
})

export const mutations = {
  initialize(state) {
    state.list = JSON.parse(localStorage.getItem('cards', []));
  },
  add(state, text) {
    state.list.push(text);
    changeLocalStorage(state.list);
  },
  remove(state, text) {
    state.list.splice(state.list.indexOf(text), 1);
    changeLocalStorage(state.list);
  },
}

export const actions = {
  initialize(context) {
    context.commit('initialize');
  },
  addItem(context, text) {
    context.commit('add', text);
  },
  removeItem(context, text) {
    context.commit('remove', text);
  }
}
