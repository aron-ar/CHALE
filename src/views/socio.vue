<template>
	<v-container class="d-flex align-center flex-column">
		<v-sheet>
			<h1 class="text-center">Se parte de CHALE!!!🙌</h1>
			<p class="text-center">Muchas gracias por querer ser parte de esta organización, por favor completa los datos solicitados y te contactaremos.😁</p>
		</v-sheet>
		<v-card class="pa-3 " flat width="80%">
			<v-form ref="form" v-model="valid" lazy-validation>
		    <v-text-field v-model="nombre" :rules="nombreRules" label="Nombre" required></v-text-field>
		    <v-text-field v-model="apellidos" :rules="apellidoRules" label="Apellidos" required></v-text-field>
		    <v-text-field v-model="dni" :counter="8" :rules="dniRules" label="DNI" required></v-text-field>
		    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
				<v-text-field v-model="cell" :counter="9" :rules="cellRules" label="Telefono" required></v-text-field>

		    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
			    <template v-slot:activator="{ on }">
			      <v-text-field v-model="date" label="Fecha de nacimiento" readonly v-on="on"></v-text-field>
			    </template>
			    <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01"  @change="save"></v-date-picker>
			  </v-menu>
								
		    <v-select v-model="selectEC" :items="eCivil" :rules="[v => !!v || 'Se requiere esta información']" label="Estado civil" required></v-select>

		    <v-select v-model="selectNH" :items="nHijos" :rules="[v => !!v || 'Se requiere esta información']" label="Número de hijos" required></v-select>

		    <v-select v-model="selectGA" :items="gAcademico" :rules="[v => !!v || 'Se requiere esta información']" label="Grado académico" required></v-select>

		    <v-text-field v-model="carrera" :rules="carreraRules" label="Carrera" required></v-text-field>

		    <v-divider></v-divider>
				
				<v-sheet>
					<v-card class="pa-3" flat>
						<v-switch v-model="switchPrim" label="Primaria"></v-switch>
						<v-flex class="d-flex flex-row justify-space-around">
							<v-checkbox v-for="(gp,i) in gradosPrim" :key="i" v-model="selectedGPrim" :label="`${gp}`" :value="`${i}`" multiple :disabled="!switchPrim"></v-checkbox>
						</v-flex>

						<p class="text-center">Cursos que puedes enseñar: (puedes marcar más de una)</p>
						
						<v-flex class="d-flex justify-space-around align-center flex-wrap">
							<v-checkbox v-for="(cp,i) in cursosPrim" :key="i" v-model="selectedCPrim" :label="`${cp}`" :value="`${i}`" multiple :disabled="!switchPrim"></v-checkbox>
						</v-flex>
							<v-sheet class="d-flex flex-row">
				    		<v-checkbox v-model="selectedCPrimOtro" :disabled="!switchPrim"></v-checkbox>
					    	<v-text-field label="Otro curso" :disabled="!selectedCPrimOtro"></v-text-field>
							</v-sheet>
					</v-card>
					<v-divider></v-divider>
					<v-card class="pa-3" flat>
			    	<v-switch v-model="switchSec" label="Secundaria"></v-switch>
						<v-flex class="d-flex flex-row justify-space-around">
							<v-checkbox v-for="(gs,i) in gradosSec" :key="i" v-model="selectedGSec" :label="`${gs}`" :value="`${i}`" multiple :disabled="!switchSec"></v-checkbox>
						</v-flex>
						<p class="text-center">Cursos que puedes enseñar: (puedes marcar más de una)</p>
						
						<v-flex class="d-flex justify-space-around align-center flex-wrap">
							<v-checkbox v-for="(cs,i) in cursosSec" :key="i" v-model="selectedCSec" :label="`${cs}`" :value="`${i}`" multiple :disabled="!switchSec"></v-checkbox>
						</v-flex>
							<v-sheet class="d-flex flex-row">
				    		<v-checkbox v-model="selectedCSecOtro" :disabled="!switchSec"></v-checkbox>
					    		<v-text-field label="Otro curso" :disabled="!selectedCSecOtro"></v-text-field>
							</v-sheet>
					</v-card>
				</v-sheet>

				<v-text-field v-model="horasSem" :rules="horasRules" label="¿Cuantas horas a la semana puedes enseñar?" required></v-text-field>

				<v-text-field v-model="expEnse" :rules="expRules" label="¿Cuentas con experiencia enseñando a niños? Si es así, cuéntanos brevemente precisando la edad de los estudiantes." required></v-text-field>

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
      dni: '',
      dniRules: [
        v => !!v || 'DNI es requerido',
        v => (v && v.length <= 8) || 'Debe tener 8 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
// fecha de nacimiento
      date: null,
      menu: false,

      cell: '',
      cellRules: [
        v => !!v || 'Teléfono es requerido',
        v => (v && v.length <= 9) || 'Debe tener 9 caracteres',
      ],

      selectEC: null,
      eCivil: [
        'Solter@',
        'Casad@',
        'Viud@',
        'Divorciad@',
      ],

      selectNH:null,
      nHijos:[0,1,2,3,4],

      selectGA: null,
      gAcademico:[
      	'Técnico en curso',
      	'Técnico concluido',
      	'Universitario en curso',
      	'Universitario concluido'
      ],

      valid: true,
      carrera: '',
      carreraRules: [
        v => !!v || 'Carrera es requerido',
      ],

      switchPrim: false,
      gradosPrim:['4','5','6'],
      selectedGPrim: false,
      selectedCPrim: false,
      selectedCPrimOtro:false,
      cursosPrim:['Matemática','Comunicación','Ciencia, Tecnología y Ambiente','Historia y Geografía','Ingles','Razonamiento Matemático','Razonamiento Verbal'],

      gradosSec:['1','2','3','4','5'],
      switchSec: false,
      selectedGSec: false,
      selectedCSec: false,
      selectedCSecOtro:false,
      cursosSec:['Aritmética','Álgebra','Geometría','Trigonometría','Lenguaje y literatura','Química','Física','Biología','Historia y Geografía','Ingles','Razonamiento Matemático','Razonamiento Verbal','Estadística y Probabilidades','Cómputo'],

      horasSem: '',
      horasRules: [
        v => !!v || 'Horas semanales es requerido',
      ],

      expEnse:'',
      expRules: [
        v => !!v || 'Experiencia es requerida',
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
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
  }

</script>