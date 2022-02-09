<template>
  <v-list-item>
    <v-list-item-title
      style="
        display: flex;
        align-content: center;
        justify-content: space-between;
      "
    >
      <div>의뢰ID : {{ p.id }}</div>
      <div
        style="
          width: 10vw;
          display: flex;
          align-content: center;
          justify-content: space-between;
        "
      >
        <v-chip>
          {{ p.Files[0].req_lang }}
        </v-chip>
        <v-spacer />
        <v-icon>mdi-arrow-right-bold</v-icon>
        <v-spacer />
        <v-chip>
          {{ p.Files[0].grant_lang }}
        </v-chip>
      </div>
      <div>
        <v-icon>mdi-calendar-clock</v-icon>
        완료일 : {{ p.date }}
      </div>
      <!--v-btn @click="cle">지우기</v-btn-->
    </v-list-item-title>
  </v-list-item>
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