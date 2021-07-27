<template>
  <v-app>
    <v-app-bar app dark>
      <v-btn plain to="/dashboard">Dashboard</v-btn>
      <v-btn to="/about">About</v-btn>
      <v-btn to="/calc">Calculator</v-btn>
      <v-btn to="/addpayment/Food?value=200">Add payment</v-btn>
    </v-app-bar>
    
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
