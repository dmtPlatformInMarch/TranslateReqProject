<template>
  <v-list-item v-if="language === '한국어'" class="flexing" dense>
    <div class="Basicdiv">의뢰ID : {{ p.id }}</div>
    <div class="Basicdiv">
      <v-chip class="chipStyle">
        {{ p.Files[0].req_lang }}
      </v-chip>
      <v-spacer />
      <v-icon>mdi-arrow-right-bold</v-icon>
      <v-spacer />
      <v-chip class="chipStyle">
        {{ p.Files[0].grant_lang }}
      </v-chip>
    </div>
    <div class="Basicdiv">
      <v-icon>mdi-calendar-clock</v-icon>
      완료일 : {{ p.date }}
    </div>
  </v-list-item>

  <v-list-item v-else-if="language === '영어'" class="flexing" dense>
    <div class="Basicdiv">Request ID : {{ p.id }}</div>
    <div class="Basicdiv">
      <v-chip class="chipStyle">
        {{ p.Files[0].req_lang }}
      </v-chip>
      <v-spacer />
      <v-icon>mdi-arrow-right-bold</v-icon>
      <v-spacer />
      <v-chip class="chipStyle">
        {{ p.Files[0].grant_lang }}
      </v-chip>
    </div>
    <div class="Basicdiv">
      <v-icon>mdi-calendar-clock</v-icon>
      Completed Date : {{ p.date }}
    </div>
  </v-list-item>
</template>

<style scoped>
.flexing {
  display: flex;
  align-content: center;
  justify-content: space-between;
  justify-items: center;
}
.Basicdiv {
  display: flex;
  align-content: center;
  justify-content: flex-start;
  min-width: 10vw;
}
.chipStyle {
  justify-content: center;
  min-width: 75px;
}
</style>

<script>
export default {
  props: {
    p: {
      type: Object,
      required: true,
    },
  },
  computed: {
    language() {
      return this.$store.state.manager.language;
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