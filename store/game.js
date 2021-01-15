export const state = () => ({
  words: [],
  gameStates: {
    before: false,
    start: false,
    finish: false
  },
  res: 0
})

export const actions = {
  async setGameStateToBefore({
    commit
  }) { //ставлю стейт на пред игру и запрашиваю объект слов с сервера
    commit('changeGameStateToBefore')
    try {
      const words = await this.$axios.$get('api/words/get_words')
      commit('getWordsToState', words)
    } catch {

    }
  },
  setGameStateToStart({
    commit
  }) { //Начало игры
    commit('changeGameStateToStart')
  },
  setGameStateToFinish({
    commit
  }) { //Конец игры и вывод результатов
    commit('changeGameStateToFinish')
  },
  setGameStateToNull({
    commit
  }) { //Отчищение стейта и переход в главное меню
    commit('refreshGameState')
  },
  resIncrement({
    commit
  }) {
    commit('resInc')
  }

}

export const mutations = {
    changeGameStateToBefore(state) {
      state.gameStates.before = true
      state.gameStates.start = false
      state.gameStates.finish = false
    },
    changeGameStateToStart(state) {
      state.gameStates.before = false
      state.gameStates.start = true
      state.gameStates.finish = false
    },
    changeGameStateToFinish(state) {
      state.gameStates.before = false
      state.gameStates.start = false
      state.gameStates.finish = true
    },
    getWordsToState(state, payload) {
      state.words = payload
    },
    refreshGameState(state) {
      state.words = []
      state.gameStates.before = false
      state.gameStates.start = false
      state.gameStates.finish = false
      this.$router.push('/main')
    

  },
  resInc(state) {
    state.res++
  }
}

export const getters = {
  getWords(state) {
    return state.words
  },
  getGameStates(state) {
    return state.gameStates
  },
  getGameResult(state) {
    return state.res
  }

}
