<template>
    <div class="card-header text-white bg-dark">
		<span class="ph-movie-title"
			>{{ movie.episode_id }}: {{ movie.title }}</span
		>

		<button
			type="button"
			class="btn btn-primary btn-planets"
			@click="isOpen = !isOpen"
		>
			Show planets
		</button>

		<ul class="list-group planets" v-show="isOpen">
			<planet
				v-for="planet in planetsFiltered"
				:key="planet.id"
				:planet="planet"
			></planet>
		</ul>
	</div>
</template>

<script>
import {ref, computed, watch} from 'vue';
import fetchCollection from "./composables/fetchCollection.js";
import planet from "./Planet.vue";

export default {
    components: {
        planet,
    },
    emits:[],
    props: {
        movie:{
            required: true,
        },
        url:{
            default: "https://swapi.dev/api/planets/",
        }
    },
    setup(props, context) {
        const movie = props.movie;
		const { collection: planets } = fetchCollection(props.url);
		const isOpen = ref(false);

		const planetsFiltered = computed(() => {
			let data = planets.value.results;

			if (data === undefined) {
				return;
			}

			data.sort((a, b) => a.name.localeCompare(b.name));
			data = data.filter((planet) => planet.films.includes(movie.url));
			return data;
		});

        return {
            movie,
            isOpen,
            planetsFiltered
        }
    },
}
</script>

<style scoped>

</style>