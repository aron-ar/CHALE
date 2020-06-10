<template>
	 <v-container>
		<v-sheet>
				<h1 class="text-center"">NIVEL PRIMARIO</h1>
		</v-sheet>

		 <v-sheet>
	    <v-tabs v-model="tab" background-color="deep-purple accent-4" dark grow>

	      <v-tab v-for="i in tabs" :key="i" :href="`#tab-${i}`">
	        {{ i }}
	      </v-tab>

	      <v-tab-item v-for="i in tabs" :key="i" :value="'tab-' + i">
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="value"
              today="2020-05-26"
              :mode="mode"
              :weekdays="weekday"
              :type="type"
              :events="events"
              :event-color="getEventColor"
              @change="getEvents"
              @click:event="showEvent"
            ></v-calendar>


            <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-x
            >
              <v-card
                color="grey lighten-4"
                min-width="200px"
                flat
              >
                <v-toolbar
                  :color="selectedEvent.color"
                  dark
                >
                  <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <span v-html="selectedEvent.details"></span>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    text
                    color="secondary"
                    @click="selectedOpen = false"
                    :to="{name:'estudiante'}"
                  >
                    Registrarme
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>


			    </v-sheet>
	      </v-tab-item>
	    </v-tabs>
  	</v-sheet>

	 </v-container>
</template>

<script>


export default {
  name: 'App',

  data: () => ({
      // menu-tabs
      tabs: ['Matemática','Comunicación','Ciencia, Tecnología y Ambiente','Historia y Geografía','Ingles','Razonamiento Matemático','Razonamiento Verbal','Cómputo'],

      //calendar
      type: 'week',
      mode: 'column',
      weekday: [1, 2, 3, 4, 5, 6,0],
      value: '',
      events: [],
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      colors: ['info', 'success', 'error', 'warning'],
    }),
    
    methods: {
      getEvents () {
        const events = []
        var horas=['08:00:00','09:00:00','10:00:00','11:00:00','12:00:00','13:00:00','14:00:00','15:00:00','16:00:00','17:00:00','18:00:00','19:00:00','20:00:00','21:00:00']

        var dia=['2020-05-25','2020-05-26','2020-05-27','2020-05-28','2020-05-29','2020-05-30']
        for(var i=0;i<dia.length;i++){
            var h=0
            while(h<horas.length-1){
              const first = `${dia[i]} ${horas[h]}`
              const second = `${dia[i]} ${horas[h+1]}`
              events.push({
                name: 'Vacantes()',
                start: first,
                end: second,
                color: this.colors[1],
              })
              h++
            }
          }
        this.events = events
      },
      getEventColor (event) {
        return event.color
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },

    },
};
</script>