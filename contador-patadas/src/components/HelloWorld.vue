<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/pato.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Contador de patadas
        </h1>

        <v-btn class="mx-2" fab dark large color="green">
          <v-icon dark>mdi-play</v-icon>
        </v-btn>
        <v-btn
          v-on:click="addArrayTimes()"
          class="mx-2"
          fab
          dark
          large
          color="red"
        >
          <v-icon dark>mdi-stop</v-icon>
        </v-btn>
        <p class="display-1 font-weight-medium">
          {{ this.dateNow }}
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Tabela com os resultados anteriores
        </h2>

        <v-row justify="center">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left display-1">Tempo sem patadas</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="time in times" :key="time">
                  <td>{{ time }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from "moment";
export default {
  name: "HelloWorld",

  data: () => ({
    horaUltimaPatada: new Date(),
    dateNow: moment()
      .startOf("year")
      .format("HH:mm:ss"),
    times: []
  }),
  created: function() {
    const self = this;
    setInterval(function() {
      self.dateNow = moment()
        .add(1, "s")
        .format("HH:mm:ss");
    }, 100);
  },
  computed: {
    addArrayTimes: () => {
      this.times.push(this.dateNow);
    }
  }
};
</script>
