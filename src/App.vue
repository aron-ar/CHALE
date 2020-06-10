<template>
  <v-app>
    <v-toolbar app class="warning">
<!--       <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon> -->
        <v-btn class="ml-5" text fab :to="{name:'Home'}">
          <v-avatar size="55">
          <img
            src="https://scontent.faqp2-3.fna.fbcdn.net/v/t1.0-9/96147626_113323157035793_8915354351233400832_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeFKNzRPnbvG2LpJwHqcwUgP-bS7P6s7lMT5tLs_qzuUxG8jyVY5oWDqmlPlRnJYvn_BwaOnNqRdISnucCk0ZTJJ&_nc_oc=AQkjYqPneYUTfzFV2zEixZCIH4hKOSwA5WnwuQ1GE-NU7FpMwuORwLlZcQfgsoEkdOg&_nc_ht=scontent.faqp2-3.fna&oh=94afac2f999c84d00cd03a4c73c10e6b&oe=5EDF2602"
            alt="Chale!!!"
          >
          </v-avatar>
        </v-btn>
        
      <v-spacer></v-spacer>
      <v-btn class="white--text" text>
        Somos
      </v-btn>
      <v-btn class="white--text" text>
        FAQ
      </v-btn>
      <v-btn class="white--text" text :to="{name:'nivel'}">
        Inscripción
      </v-btn>
      <v-btn class="white--text" text>
        Contacto
      </v-btn>
      <v-btn class="white--text" text :to="{name:'socio'}">
        Hazte socio
      </v-btn>
    </v-toolbar>
    
    <v-content fluid>
      <router-view/>
    </v-content>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
    
    


  </v-app>
</template>

<script>


export default {
  name: 'App',


  data: () => ({
    drawer:false,
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
      ]
  }),
};
</script>
