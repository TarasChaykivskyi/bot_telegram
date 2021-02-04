import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        bot: [
            {
                id: 1,
                title: 'Bot title 1',
                description: 'Bot description 1',
                img: '',
                date: new Date()
            },
            {
                id: 2,
                title: 'Test Bot title 2',
                description: 'Bot description 2, Bot description 2. Bot description 2 Bot description 2',
                img: '',
                date: new Date()
            },
            {
                id: 3,
                title: 'Super Bot title 3',
                description: 'Bot description 3, Bot description 3. Bot description 3',
                img: '',
                date: new Date()
            },
            {
                id: 4,
                title: 'News Bot title 4',
                description: 'Bot description 4, Bot description 4',
                img: '',
                date: new Date()
            }
        ],
        showModalData: false,
        showModalDelete: false,
        currentIndex: null,
        currentBot: {}
    },
    getters: {
        BOT: state => state.bot,
        SHOW_MODAL_DATA: state => state.showModalData,
        SHOW_MODAL_DELETE: state => state.showModalDelete,
        CURRENT_BOT: state => state.currentBot
    },
    mutations: {
        showModalData: (state) => state.showModalData = true,
        hideModalData: (state) => state.showModalData = false,
        toggleModalDelete: (state, status) => state.showModalDelete = status,
        removeBot: (state) => {
            state.bot.splice(state.currentIndex, 1);
            state.showModalDelete = false;
        },
        setCurrentBot: (state, current) => {
            state.currentIndex = current;
            state.currentBot = state.bot[current];
        },
        addNewBot: (state, newBot) => {
            state.bot.push(newBot);
            state.showModalData = false;
        },
        saveBot: (state, currentBot) => {
            state.bot.map((bot, index) => {
                if(bot.id === currentBot.id) {
                    state.bot[index] = currentBot;
                }
            })
        }
    },
    actions: {
        SHOW_MODAL_DATA: ({commit}, currentIndex) => {
            commit('showModalData');
            commit('setCurrentBot', currentIndex);
        },
        HIDE_MODAL_DATA: ({commit}) => {
            commit('hideModalData');
        },
        TOGGLE_MODAL_DELETE: ({commit}, obj) => {
            commit('toggleModalDelete', obj.status);
            commit('setCurrentBot', obj.indexBot);
        },
        SET_CURRENT_BOT: ({commit}, obj) => {
            commit('setCurrentBot', obj)
        },
        REMOVE_BOT: ({commit}) => {
            commit('removeBot');
        },
        ADD_NEW_BOT: ({commit}, obj) => {
            commit('addNewBot', obj);
        },
        SAVE_BOT: ({commit}, obj) => {
            commit('saveBot', obj);
        }
    }
});

export default store;
