<template>
  <v-container style="dispaly: flex; flex-direction: column; margin: auto">
    <!--버튼 레이아웃-->
    <v-layout style="display: flex; height: 6vh">
      <v-btn-toggle v-model="toggle" tile mandatory>
        <v-btn
          style="
            display: flex;
            width: 140px;
            align-content: center;
            justify-content: space-around;
          "
        >
          <div
            style="
              display: flex;
              align-content: center;
              justify-content: center;
            "
          >
            <v-icon>mdi-earth</v-icon>
          </div>
          <div style="display: flex; flex-direction: column">
            <h4 style="margin-right: auto">언어 번역</h4>
            <div style="margin-right: auto; font-size: 50%">5개의 언어</div>
          </div>
        </v-btn>
        <v-btn
          style="
            display: flex;
            width: 170px;
            align-content: center;
            justify-content: space-around;
          "
        >
          <div
            style="
              display: flex;
              align-content: center;
              justify-content: center;
            "
          >
            <v-icon>mdi-file</v-icon>
          </div>
          <div style="display: flex; flex-direction: column">
            <h4 style="margin-right: auto">파일 번역</h4>
            <div style="margin-right: auto; font-size: 50%">
              .pdf .docx .pptx
            </div>
          </div>
        </v-btn>
      </v-btn-toggle>
    </v-layout>
    <!--언어 번역 레이아웃-->
    <v-layout
      v-if="toggle === 0"
      style="display: flex; height: 45vh"
      align-center
    >
      <div style="width: 40vw">
        <v-textarea
          prepend-inner-icon="mdi-book-sync"
          label="번역할 언어"
          hint="번역할 언어를 적어주세요."
          rows="15"
          auto-grow
          clearable
          counter
          outlined
        />
      </div>
      <div style="text-align: center; margin: auto">
        <v-icon>mdi-arrow-right-bold</v-icon>
      </div>
      <div style="width: 40vw">
        <v-textarea
          prepend-inner-icon="mdi-book-check"
          label="번역된 언어"
          hint="번역한 결과입니다."
          rows="15"
          auto-grow
          clearable
          counter
          outlined
          readonly
        />
      </div>
    </v-layout>
    <!--파일 번역 레이아웃-->
    <v-layout v-else style="height: 45vh" align-center justify-center column>
      <v-icon class="text-h1">mdi-folder-upload</v-icon>
      <div>.pdf .docx .pptx</div>
      <v-btn style="width: 8vw" outlined> 업로드 </v-btn>
    </v-layout>
    <!--번역자 레이아웃-->
    <v-layout>
      <v-carousel
        cycle
        interval="3000"
        height="40vh"
        hide-delimiter-background
        hide-delimiters
        :show-arrows="false"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-layout class="fill-height" align-center justify-center>
              <v-icon class="text-h1">mdi-account-box</v-icon>
              <div class="text-h4">
                번역자 : {{ slide }}<br />
                번역 건수 : {{ i + (i + 1) * 20 }}<br />
                번역 분야 : {{ fields[i] }}
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
    data() {
        return {
            colors: ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'],
            slides: ['김민수', '이민지', '김철수', '홍길동', '제임스'],
            fields: ['경제', '정보통신', '언어', '과학', '자동차'],
            toggle: 0
        }
    }
}
</script>