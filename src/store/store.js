import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);




const store = new Vuex.Store({
	state: {
		lang: "en",
		setImgName: [
			"bip_icon", 
			"munshtuk_icon", 
			"eagle_icon", 
			"papatut_icon",
			"munshtuk_icon", 
			"eagle_icon", 
			"bip_icon", 
			"munshtuk_icon", 
			"affa_icon"
		],
		textSet: {

			en: {
				headLine: {
					calculatePrice: "Calculate Price",
					amountOfHookahs: "Amount\nof Hookahs",
					amountOfHours: "Amount\nof Hours",
					order: "order"
				},
				abutUs: {
					title: "About us",
					markDiscript: "Hookah Prime – компания, предоставляющая\nуслуги кальянного кейтеринга премиум-класса.",
					discript: "Более 10 лет мы занимаемся изучением физики курения\nкальяна — вкус, дымность, тяга, крепость,\nпродолжительность курения и влияние кальяна на\nорганизм, а также, гн.юансы миксологии табачных смесей."
				},
				ourClients: {
					title: "Our Clients"
				},
				primeMasters: {
					title: "Prime Masters",
					nameMisha: "Mikhail Shapovalov",
					discriptMisha: "Misha! International coucher.\nHookah Prime catering & Hookah Prime\ntobacco founder. Hookah High School teacher.",
					nameVova: "Vladimir Shapovalov",
					discriptVova: "Vova! International coucher.\nHookah Prime catering & Hookah Prime\ntobacco founder. Hookah High School teacher."
				},
				primeHookah: {
					title: "Prime Hookahs",
					markDiscript: "Каждый элемент тщательно подбирается и тестируется\nнашими мастерами, чтобы обеспечить вам максимальный\nкомфорт от курения.",
					discript: "Мы ухаживаем за нашими\nкальянами и постоянно находимся\nв поиске новых решений, чтобы\nугодить самым изысканным\nвкусам ваших гостей."
				}
			},

			ru: {
				headLine: {
					calculatePrice: "Посчитать",
					amountOfHookahs: "Количество\nкальянов",
					amountOfHours: "Количество\nчасов",
					order: "заказать"
				},
				abutUs: {
					title: "About us",
					markDiscript: "Hookah Prime – компания, предоставляющая услуги\nкальянного кейтеринга премиум-класса.",
					discript: "Более 10 лет мы занимаемся изучением физики курения\nкальяна — вкус, дымность, тяга, крепость,\nпродолжительность курения и влияние кальяна на\nорганизм, а также, гн.юансы миксологии табачных смесей."
				},
				ourClients: {
					title: "Our Clients"
				},
				primeMasters: {
					title: "Prime Masters",
					nameMisha: "Mikhail Shapovalov",
					discriptMisha: "International coucher. Hookah Prime catering & Hookah Prime tobacco founder. Hookah High School teacher.",
					nameVova: "Vladimir Shapovalov",
					discriptVova: "International coucher. Hookah Prime catering & Hookah Prime tobacco founder. Hookah High School teacher."
				},
				primeHookah: {
					title: "Prime Hookahs",
					markDiscript: "Каждый элемент тщательно подбирается и тестируется\nнашими мастерами, чтобы обеспечить вам максимальный\nкомфорт от курения.",
					discript: "Мы ухаживаем за нашими\nкальянами и постоянно находимся\nв поиске новых решений, чтобы\nугодить самым изысканным\nвкусам ваших гостей."
				}
			}
		}
	},


	getters: {
		lang: function (state) {
			return state.lang;
		},
		text: function (state) {
			return state.textSet[state.lang];
		}
	},


	mutations: {
		changeLang: function (state, payload) {
			state.lang = payload;
		}
	},


	actions: {
		changeLang: function (context, payload) {
			context.commit('changeLang', payload);
		}
	}
});

export default store;