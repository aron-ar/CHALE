<template>
	<v-container class="d-flex align-center flex-column">
		<v-sheet>
			<h1 class="text-center">CHALE!!🙌</h1>
			<p class="text-center">Somos un grupo de voluntarios que queremos apoyar a nuestros estudiantes reforzando los conocimientos adquiridos en el día a día, por favor complete el siguiente formulario y nos contactaremos con usted.😁</p>
		</v-sheet>
		<v-card class="pa-3 " flat width="80%">
			<v-form ref="form" v-model="valid" lazy-validation>
		    <v-text-field v-model="nombre" :rules="nombreRules" label="Nombre" required></v-text-field>
		    <v-text-field v-model="apellidos" :rules="apellidoRules" label="Apellidos" required></v-text-field>
		    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
				<v-text-field v-model="cell" :counter="9" :rules="cellRules" label="Telefono" required></v-text-field>
		    <v-text-field v-model="tema" :rules="temaRules" label="Tema a enseñar" required></v-text-field>
				<v-card flat>
					<p class="text-center">¿Por cuál o cuáles de los siguientes medios podría dictar clases?</p>
					<v-flex class="d-flex flex-row justify-space-around">
						<v-checkbox v-for="(m,i) in modos" v-model="selectedModo" :label="`${m}`" :value="`${i}`" multiple></v-checkbox>
					</v-flex>
				</v-card>

		    <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="He leido los términos y condiciones" required></v-checkbox>
			
		    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

		    <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
		  </v-form>
		</v-card>
	</v-container>
</template>


<script>
	export default {
    data: () => ({
      valid: true,
      nombre: '',
      nombreRules: [
        v => !!v || 'Nombre es requerido',
      ],
      apellidos: '',
      apellidoRules: [
        v => !!v || 'Apellido es requerido',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail debe ser válido',
      ],

      cell: '',
      cellRules: [
        v => !!v || 'Teléfono es requerido',
        v => (v && v.length <= 9) || 'Debe tener 9 caracteres',
      ],

      valid: true,
      tema: '',
      temaRules: [
        v => !!v || 'El tema es requerido',
      ],

      modos:['Zoom','Google Meet'],
      selectedModo:false,


      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      save (date) {
        this.$refs.menu.save(date)
      },
    },
  }

</script>