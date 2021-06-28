import { createStore } from 'vuex'

export default createStore({
  // El estatate son los datos o la data
  state: {
    contador: 150
  },
  // Las mutaciones cambian los datos del state
  mutations: {
    incrementar(state, payload){
      state.contador = state.contador + payload
    },
    disminuir(state, payload){
      state.contador = state.contador - payload
    }
  },
  // Las acciones mandan a llamar las mutaciones y utilizarlas en los componente
  //  nunca se utilizan directo las mutaciones en el codigo (no es recomendado)
  actions: {
    // Sin parametros
    accionIncrementar({commit}){
      commit('incrementar', 10)
    },
    // Con 1 parámetro
    accionDisminuir({commit}, numero){
      commit('disminuir', numero)
    },
    // Con varios parametros
    accionBoton({commit}, objeto){
      if(objeto.estado){
        commit('incrementar', objeto.numero)
      } else {
        commit('disminuir', objeto.numero)
      }
    }
  },
  modules: {
  }
})
