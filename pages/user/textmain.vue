<template>
  <v-container style="dispaly: flex; flex-direction: column; margin: auto">
    <!--버튼 레이아웃-->
    <v-layout style="display: flex; height: 6vh">
      <v-btn-toggle v-model="toggle" tile mandatory>
        <v-btn style="display: flex; align-content: center; justify-content: space-around">
          <div style="display: flex; align-content: center; justify-content: center">
            <v-icon>mdi-earth</v-icon>
          </div>
          <div v-if="language === '한국어'" style="display: flex; flex-direction: column">
            <h4 style="margin-right: auto">언어 번역</h4>
            <div style="margin-right: auto; font-size: 50%">5개의 언어</div>
          </div>
          <div v-else-if="language === '영어'" style="display: flex; flex-direction: column">
            <h4 style="margin-right: auto">Language translation</h4>
            <div style="margin-right: auto; font-size: 50%">5 languages</div>
          </div>
        </v-btn>
        <v-btn style="display: flex; align-content: center; justify-content: space-around">
          <div style="display: flex; align-content: center; justify-content: center">
            <v-icon>mdi-file</v-icon>
          </div>
          <div v-if="language === '한국어'" style="display: flex; flex-direction: column">
            <h4 style="margin-right: auto">파일 번역</h4>
            <div style="margin-right: auto; font-size: 50%">.pdf만 가능</div>
          </div>
          <div v-else-if="language === '영어'" style="display: flex; flex-direction: column">
            <h4 style="margin-right: auto">File translation</h4>
            <div style="margin-right: auto; font-size: 50%">Only .pdf</div>
          </div>
        </v-btn>
      </v-btn-toggle>
    </v-layout>

    <!--언어 번역 레이아웃-->
    <v-layout v-if="toggle === 0" style="display: flex; height: 45vh" align-center>
      <div style="width: 50vw">
        <v-toolbar dense elevation="0">
          <v-toolbar-items>
            <v-select
              dense
              :items="language === '한국어' ? languages : e_languages"
              :placeholder="language === '한국어' ? '언어 선택' : 'Select'"
              solo
              single-line
            />
          </v-toolbar-items>
        </v-toolbar>
        <v-textarea
          v-if="language === '한국어'"
          prepend-inner-icon="mdi-book-sync"
          hint="번역할 언어를 적어주세요."
          rows="15"
          auto-grow
          clearable
          counter
          outlined
          background-color="grey lighten-2"
          style="z-index: 0"
        />
        <v-textarea
          v-else-if="language === '영어'"
          prepend-inner-icon="mdi-book-sync"
          label="Language to translate"
          hint="Enter what you want to translate."
          rows="15"
          auto-grow
          clearable
          counter
          outlined
          background-color="grey lighten-2"
          style="z-index: 0"
        />
      </div>
      <div style="width: 50vw">
        <v-toolbar dense elevation="0">
          <v-toolbar-items>
            <v-select
              dense
              :items="language === '한국어' ? languages : e_languages"
              :placeholder="language === '한국어' ? '언어 선택' : 'Select'"
              solo
              single-line
            />
          </v-toolbar-items>
        </v-toolbar>
        <v-textarea
          v-if="language === '한국어'"
          prepend-inner-icon="mdi-book-check"
          hint="번역한 결과입니다."
          rows="15"
          auto-grow
          clearable
          counter
          outlined
          readonly
          background-color="grey lighten-2"
          style="z-index: 0"
        />
        <v-textarea
          v-else-if="language === '영어'"
          prepend-inner-icon="mdi-book-check"
          label="Translated language"
          hint="Result of the translation."
          rows="15"
          auto-grow
          clearable
          counter
          outlined
          readonly
          background-color="grey lighten-2"
          style="z-index: 0"
        />
      </div>
    </v-layout>

    <!--파일 번역 레이아웃-->
    <v-layout v-else style="height: 45vh" align-center justify-center column>
      <v-icon class="text-h1">mdi-folder-upload</v-icon>
      <div>.pdf .docx .pptx</div>
      <v-btn v-if="language === '한국어'" style="width: 8vw" outlined> 업로드 </v-btn>
      <v-btn v-else-if="language === '영어'" style="width: 8vw" outlined> Upload </v-btn>
    </v-layout>

    <!--번역자 레이아웃-->
    <v-layout>
      <v-carousel cycle interval="3000" height="40vh" hide-delimiter-background hide-delimiters :show-arrows="false">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-layout class="fill-height" align-center justify-center>
              <v-icon class="text-h1">mdi-account-box</v-icon>
              <div v-if="language === '한국어'" class="text-h4">
                번역자 : {{ slide }}<br />
                번역 건수 : {{ i + (i + 1) * 20 }}<br />
                번역 분야 : {{ fields[i] }}
              </div>
              <div v-else-if="language === '영어'" class="text-h4">
                Translator : {{ slide }}<br />
                The number of translations : {{ i + (i + 1) * 20 }}<br />
                Translation field : {{ fields[i] }}
              </div>
            </v-layout>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-layout>
  </v-container>
</template>

<style scoped>
</style>

<script lang="js">
export default {
  layout: 'textLayout',
  data() {
      return {
          colors: ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'],
          slides: ['김민수', '이민지', '김철수', '홍길동', '제임스'],
          fields: ['경제', '정보통신', '언어', '과학', '자동차'],
          toggle: 0
      }
  },
  computed: {
    language() {
      return this.$store.state.manager.language;
    },
    languages() {
      return this.$LANGUAGES_KO;
    },
    e_languages() {
      return this.$LANGUAGES_EN;
    }
  }
}
</script>