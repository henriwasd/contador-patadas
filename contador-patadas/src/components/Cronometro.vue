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

      <v-col class="mb-5" cols="12">
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Contador de patadas</h1>

          <p class="display-1 font-weight-medium">{{ this.dateCustom }}</p>
          <v-btn
            v-on:click="zerandoContador"
            class="mx-2"
            fab
            dark
            large
            color="red"
          >
            <v-icon dark>mdi-hand-pointing-right</v-icon>
          </v-btn>
        </v-col>

        <v-row justify="center">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left display-1">Tempos sem patadas</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="time in times" :key="time">
                  <td class="headline">{{ time }}</td>
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
    dateNow: moment().startOf("year"),
    times: [],
    dateCustom: ""
  }),
  created: function() {
    const self = this;
    setInterval(function() {
      self.dateCustom = self.dateNow.add(1, "seconds").format("HH:mm:ss");
    }, 1000);
  },
  methods: {
    zerandoContador() {
      this.times.push(this.dateCustom);
      this.dateNow.startOf("year");
    }
  }
};
</script>
