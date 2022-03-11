<template>
  <v-expansion-panel v-if="language === '한국어'">
    <v-expansion-panel-header disable-icon-rotate>
      <div style="display: flex; align-items: center">
        <v-btn depressed icon @click="dialog = true">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" width="30vw">
          <v-card>
            <v-card-title>의뢰 취소</v-card-title>
            <v-card-text>해당 의뢰를 취소하시겠습니까?</v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn text @click="dialog = false">취소</v-btn>
              <v-btn color="success" text @click="cancelRequest">확인</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        의뢰ID : {{ p.id }}
      </div>
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
          <v-chip class="chipStyle" style="min-width: 10vw" label>
            {{ file.field }}
          </v-chip>
          <v-spacer />
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
          <div style="display: flex; width: 30vw">
            <v-icon left> mdi-file-document-multiple </v-icon>
            {{ file.src }}
            <span v-if="countingFile[i] - 1 != 0">외 {{ countingFile[i] - 1 }}개의 파일</span>
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

  <v-expansion-panel v-else-if="language === '영어'">
    <v-expansion-panel-header disable-icon-rotate>
      <div style="display: flex; align-items: center">
        <v-btn depressed icon @click="dialog = true"><v-icon>mdi-close</v-icon></v-btn>
        <v-dialog v-model="dialog" width="30vw">
          <v-card>
            <v-card-title>Request Cancel</v-card-title>
            <v-card-text>Are you sure you want to cancel the quest?</v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn text @click="dialog = false">No</v-btn>
              <v-btn color="success" text @click="cancelRequest">Yes</v-btn>
            </v-card-actions>
          </v-card> </v-dialog
        >의뢰ID : {{ p.id }}
      </div>
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
          <v-chip class="chipStyle" style="min-width: 10vw" label>
            {{ file.field }}
          </v-chip>
          <v-spacer />
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
          <div style="display: flex; width: 30vw">
            <v-icon left> mdi-file-document-multiple </v-icon>
            {{ file.src }}
            <span v-if="countingFile[i] - 1 != 0">other {{ countingFile[i] - 1 }} files</span>
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

  <v-expansion-panel v-else>
    <div class="text-h1">페이지 로드 에러</div>
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
      dialog: false,
    };
  },
  computed: {
    sortingFile() {
      return Array.from(this.FileSet).sort(function (a, b) {
        return a.chainNumber - b.chainNumber;
      });
    },
    mfFile() {
      return Array.from(this.FileSet).filter((item, i) => {
        return (
          Array.from(this.FileSet).findIndex((item2, j) => {
            return item.chainNumber === item2.chainNumber;
          }) === i
        );
      });
    },
    countingFile() {
      const array = [];
      Array.from(this.FileSet).forEach((f) => {
        array[f["chainNumber"]] = (array[f["chainNumber"]] || 0) + 1;
      });
      const result = array.reverse();
      return result;
    },
    language() {
      return this.$store.state.manager.language;
    },
  },
  methods: {
    async cancelRequest() {
      try {
        const deleteResponse = await this.$store.dispatch("requests/cancelRequest", {
          id: this.p.id,
        });
        if (deleteResponse.data === "삭제") {
          if (this.language === "한국어") {
            this.$manage.showMessage({
              message: "의뢰를 성공적으로 취소했습니다.",
              color: "success",
            });
          } else if (this.language === "영어") {
            this.$manage.showMessage({
              message: "Successfully canceled the quest.",
              color: "success",
            });
          }
        } else {
          if (this.language === "한국어") {
            this.$manage.showMessage({
              message: "의뢰를 취소하는데 문제가 발생했습니다.",
              color: "error",
            });
          } else if (this.language === "영어") {
            this.$manage.showMessage({
              message: "Oops..Problem during cancel the quest.",
              color: "error",
            });
          }
        }
        await this.$store.dispatch("requests/loadRequests");
        this.dialog = false;
      } catch (err) {}
    },
  },
};
</script>