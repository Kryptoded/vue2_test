function changeLocalStorage(list) {
  localStorage.setItem('cards', JSON.stringify(list))
}

export const state = () => ({
  list: []
})

export const mutations = {
  initialize(state) {
    const cards = localStorage.getItem('cards')
    if (cards) {
      state.list = JSON.parse(cards);
    }
  },
  add(state, text) {
    state.list.push({
      text,
      id: new Date().getTime()
    });
    changeLocalStorage(state.list);
  },
  remove(state, obj) {
    state.list.splice(state.list.indexOf(obj), 1);
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
  removeItem(context, obj) {
    context.commit('remove', obj);
  }
}
