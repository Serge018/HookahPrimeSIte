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
		setBlockName: [
			"Prepare",
			"Degustetion",
			"Support",
			"Discipline"
		],
		"contacts": {
			"email": "info@hprime.ru",
			"phone": "+7 905 232 4304",
			"insta": "hookah_prime"
		},
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
				},
				ceremonies: {
					title: "Our Ceremonies Philosophy",
					subtitlePrepare: "Detailed Prepair",
					subtitleDegustetion: "Presentation & Degustation",
					subtitleSupport: "Competent Support",
					subtitleDiscipline: "Cleanliness & Discipline",
					discrriptPrepare: "Мастер приезжает за час до\nназначенного времени, подготавливает\nрабочее место и кальяны.",
					discrriptDegustetion: "Существет большое количество различных\nсортов и вкусов табака. Мы презентуем\nкаждый кальян, ведь мы заинтересованы в\nтом, чтобы вы действительно насладились\nпроцессом курения",
					discrriptSupport: "Полный контроль курения кальянов,\nсвоевременная замена углей и чаши.\nТак же, мы следим за тем, какие эмоции\nиспытывает человек во время курения.",
					discrriptDiscipline: "За собой мы оставляем\nчистоту и порядок в зоне\nотведеной для курения.",
				},
				footer: {
					subtitleLogo: "Hookah Prime",
					subtitleDiscr: "LUXARY CATERING",
					discription: "Мы всегда готовы обсудить ваши идеи и предложения.\nЗвоните и мы сделаем ваше событие незабываемым!"
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
				},
				ceremonies: {
					title: "Our Ceremonies Philosophy",
					subtitlePrepare: "Detailed Prepair",
					subtitleDegustetion: "Presentation & Degustation",
					subtitleSupport: "Competent Support",
					subtitleDiscipline: "Cleanliness & Discipline",
					discrriptPrepare: "Мастер приезжает за час до\nназначенного времени, подготавливает\nрабочее место и кальяны.",
					discrriptDegustetion: "Существет большое количество различных\nсортов и вкусов табака. Мы презентуем\nкаждый кальян, ведь мы заинтересованы в\nтом, чтобы вы действительно насладились\nпроцессом курения",
					discrriptSupport: "Полный контроль курения кальянов,\nсвоевременная замена углей и чаши.\nТак же, мы следим за тем, какие эмоции\nиспытывает человек во время курения.",
					discrriptDiscipline: "За собой мы оставляем\nчистоту и порядок в зоне\nотведеной для курения.",
				},
				footer: {
					subtitleLogo: "Hookah Prime",
					subtitleDiscr: "LUXARY CATERING",
					discription: "Мы всегда готовы обсудить ваши идеи и предложения.\nЗвоните и мы сделаем ваше событие незабываемым!"
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
		},
		optDiscript: function(state) {
			const opt = state.setBlockName.reduce((acc, currName) => {
        acc[currName] = {
          subtitle: state.textSet[state.lang].ceremonies[`subtitle${currName}`],
          discript: state.textSet[state.lang].ceremonies[`discrript${currName}`],
          className: currName
        };
        return acc;
      }, {});
      return opt;
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