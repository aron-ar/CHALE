<template>
	<v-container>
		<v-sheet>
			<h1 class="text-center">¿En que nivel te gustaria ser asesorado?</h1>
		</v-sheet>

		<v-sheet class="d-flex flex-row mb-6">
			<v-card class="mx-auto" max-width="400">
		    <v-img
		      class="gray--text align-end"
		      height="200px"
		      src="https://scontent.faqp2-3.fna.fbcdn.net/v/t1.0-9/96147626_113323157035793_8915354351233400832_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeFKNzRPnbvG2LpJwHqcwUgP-bS7P6s7lMT5tLs_qzuUxG8jyVY5oWDqmlPlRnJYvn_BwaOnNqRdISnucCk0ZTJJ&_nc_oc=AQkjYqPneYUTfzFV2zEixZCIH4hKOSwA5WnwuQ1GE-NU7FpMwuORwLlZcQfgsoEkdOg&_nc_ht=scontent.faqp2-3.fna&oh=94afac2f999c84d00cd03a4c73c10e6b&oe=5EDF2602">
		      <v-card-title>PRIMARIA</v-card-title>
		    </v-img>

		    <v-card-subtitle class="pb-0">Cursos:</v-card-subtitle>

		    <v-card-text class="text--primary">
		      <div>Whitehaven Beach</div>
		    </v-card-text>

		    <v-card-actions class="d-flex flex-column align-center">
		      <v-btn class="ma-0 mb-2" block color="orange" :to="{name:'inscribete-primaria'}">
		        Cuarto grado
		      </v-btn>
		      <v-btn class="ma-0 mb-2" block color="orange" :to="{name:'inscribete-primaria'}">
		        Quinto grado
		      </v-btn>
		      <v-btn class="ma-0 mb-2" block color="orange" :to="{name:'inscribete-primaria'}">
		        Sexto grado
		      </v-btn>
		    </v-card-actions>
		  </v-card>

		  <v-card class="mx-auto" max-width="400">
		    <v-img
		      class="gray--text align-end"
		      height="200px"
		      src="https://scontent.faqp2-3.fna.fbcdn.net/v/t1.0-9/96147626_113323157035793_8915354351233400832_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeFKNzRPnbvG2LpJwHqcwUgP-bS7P6s7lMT5tLs_qzuUxG8jyVY5oWDqmlPlRnJYvn_BwaOnNqRdISnucCk0ZTJJ&_nc_oc=AQkjYqPneYUTfzFV2zEixZCIH4hKOSwA5WnwuQ1GE-NU7FpMwuORwLlZcQfgsoEkdOg&_nc_ht=scontent.faqp2-3.fna&oh=94afac2f999c84d00cd03a4c73c10e6b&oe=5EDF2602">
		      <v-card-title>SECUNDARIA</v-card-title>
		    </v-img>

		    <v-card-subtitle class="pb-0">Cursos:</v-card-subtitle>

		    <v-card-text class="text--primary">
		      <div>Whitehaven Beach</div>
		    </v-card-text>

		    <v-card-actions class="d-flex flex-column align-center">
		      <v-btn class="ma-0 mb-2" block color="orange" :to="{name:'inscribete-secundaria'}">
		        Primer grado
		      </v-btn>
		      <v-btn class="ma-0 mb-2" block color="orange" :to="{name:'inscribete-secundaria'}">
		        Segundo grado
		      </v-btn>
		      <v-btn class="ma-0 mb-2" block color="orange" :to="{name:'inscribete-secundaria'}">
		        Tercer grado
		      </v-btn>
		      <v-btn class="ma-0 mb-2" block color="orange" :to="{name:'inscribete-secundaria'}">
		        Cuarto grado
		      </v-btn>
		      <v-btn class="ma-0 mb-2" block color="orange" :to="{name:'inscribete-secundaria'}">
		        Quinto grado
		      </v-btn>
		    </v-card-actions>
		  </v-card>
		</v-sheet>
	</v-container>
</template>

<script>
	export default{
		data: () => ({
      
    }),
		}

</script>