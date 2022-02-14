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
      <v-list v-for="(file, i) in mfFile" :key="file.id">
        <v-list-item dense>
          <div style="display: flex; width: 10vw">
            <v-spacer />
            <v-chip class="chipStyle">
              {{ file.req_lang }}
            </v-chip>
            <v-spacer />
            <v-icon>mdi-arrow-right-bold</v-icon>
            <v-spacer />
            <v-chip class="chipStyle">
              {{ file.grant_lang }}
            </v-chip>
          </div>
          <v-spacer />
          <div>
            <v-icon left> mdi-file-document-multiple </v-icon>
            {{ file.src }}
            <span v-if="countingFile[i] - 1 != 0"
              >외 {{ countingFile[i] - 1 }}개의 파일</span
            >
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

<style scoped>
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
  data() {
    return {
      FileSet: this.p.Files,
    };
  },
  computed: {
    sortingFile: function () {
      return Array.from(this.FileSet).sort(function (a, b) {
        return a.chainNumber - b.chainNumber;
      });
    },
    mfFile: function () {
      return Array.from(this.FileSet).filter((item, i) => {
        return (
          Array.from(this.FileSet).findIndex((item2, j) => {
            return item.chainNumber === item2.chainNumber;
          }) === i
        );
      });
    },
    countingFile: function () {
      const result = [];
      Array.from(this.FileSet).forEach((f) => {
        result[f["chainNumber"]] = (result[f["chainNumber"]] || 0) + 1;
      });
      return result;
    },
  },
  methods: {
    cle() {
      this.$store.dispatch("requests/cancelRequest", {
        id: this.p.id,
      });
    },
  },
};
</script>