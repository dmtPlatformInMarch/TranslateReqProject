<template>
  <v-expansion-panel>
    <v-expansion-panel-header disable-icon-rotate>
      <div>의뢰ID : {{ p.id }}</div>
      <v-spacer />
      <div>
        <v-icon>mdi-calendar-clock</v-icon>
        {{ p.date }}
      </div>
      <v-spacer />
      <template v-slot:actions>
        <v-chip color="orange darken-2">
          {{ p.trans_state }}
          <v-icon right>mdi-briefcase-clock</v-icon>
        </v-chip>
      </template>
    </v-expansion-panel-header>

    <v-expansion-panel-content>
      <v-divider />
      <v-list v-for="(file, i) in p.Files" :key="file.id">
        <v-list-item>
          <div style="display: flex; width: 10vw">
            <v-chip>
              {{ p.Files[i].req_lang }}
            </v-chip>
            <v-spacer />
            <v-icon>mdi-arrow-right-bold</v-icon>
            <v-spacer />
            <v-chip>
              {{ p.Files[i].grant_lang }}
            </v-chip>
          </div>
          <v-spacer />
          <div>
            <v-icon left> mdi-file-document-multiple </v-icon>
            {{ p.Files[i].src }}
          </div>
          <v-spacer />
          <v-list-item-icon>
            <v-icon color="success"> mdi-check-circle </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-expansion-panel-content>

    <!--v-btn @click="cle">지우기</v-btn-->
  </v-expansion-panel>
</template>

<script>
export default {
  props: {
    p: {
      type: Object,
      required: true,
    },
  },
  methods: {
    cle() {
      this.$store.dispatch("requests/cancelRequest", {
        id: this.p.id,
      });
    },
    logging() {
      console.log(`this ID = ${this.p.id}\n`);
    },
  },
};
</script>