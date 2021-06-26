<template>
    <li class="list-group-item">
		<span class="ph-planet-name">{{ planet.name }}</span>
		<div>
			climat:
			<span class="ph-planet-climate">{{ planet.climate }}</span>
		</div>
		<div>
			diameter:
			<span class="ph-planet-diameter">{{ planet.diameter }}</span>
		</div>
	</li>
</template>

<script>
import {ref, computed, watch} from 'vue';

export default {
    props: {
		planet: {
			required: true,
		},
	},
	setup(props) {
		const planet = props.planet;

		const cl = () => {
			console.log(planet);
		};

		return { planet };
	},
}
</script>

<style scoped>

</style>