<script>
import fetchCollection from "./composables/fetchCollection.js";
import Movie from "./Movie.vue";

import { ref, computed, watch, watchEffect } from "vue";

export default {
	components: { Movie },

	props: {
		url: { default: "https://swapi.dev/api/films/" },
	},

	setup(props) {
		const { collection: movies } = fetchCollection(props.url);

		const moviesFiltered = computed(() => {
			let data = movies.value.results;
			if (data === undefined) {
				return;
			}
			data.sort((a, b) => {
				return a.episode_id - b.episode_id;
			});

			return data;
		});

		const cl = () => {
			console.log("aaa");
		};

		return {
			cl,
			moviesFiltered,
		};
	},
};
</script>

<template>
	<main class="container">
		<h1 @click="cl">Star Wars - Movies And Planets</h1>
		<div class="movies">
			<movie
				class="card mb-4"
				v-for="movie in moviesFiltered"
				:key="movie.episode_id"
				:movie="movie"
			></movie>
		</div>
	</main>
</template>
