<template>
  <v-container>
    <!--버튼 레이아웃-->
    <v-layout style="display: flex; height: 6vh">
      <v-btn-toggle v-model="toggle" tile mandatory>
        <v-btn style="display: flex; align-content: center; justify-content: space-around">
          <div style="display: flex; align-content: center; justify-content: center">
            <v-icon>mdi-earth</v-icon>
          </div>
          <div v-if="language === '한국어'" style="display: flex; flex-direction: column; width: 10vw">
            <h4 style="margin-right: auto">언어 번역</h4>
            <div style="margin-right: auto; font-size: 50%">8개의 언어</div>
          </div>
          <div v-else-if="language === '영어'" style="display: flex; flex-direction: column">
            <h4 style="margin-right: auto">Language translation</h4>
            <div style="margin-right: auto; font-size: 50%">8 languages</div>
          </div>
        </v-btn>
        <v-btn style="display: flex; align-content: center; justify-content: space-around">
          <div style="display: flex; align-content: center; justify-content: center">
            <v-icon>mdi-file</v-icon>
          </div>
          <div v-if="language === '한국어'" style="display: flex; flex-direction: column; width: 8vw">
            <h4 style="margin-right: auto">파일 번역</h4>
            <div style="margin-right: auto; font-size: 50%">.txt .pdf만 가능</div>
          </div>
          <div v-else-if="language === '영어'" style="display: flex; flex-direction: column">
            <h4 style="margin-right: auto">File translation</h4>
            <div style="margin-right: auto; font-size: 50%">Only .txt / .pdf</div>
          </div>
        </v-btn>
      </v-btn-toggle>

      <v-spacer />
    </v-layout>

    <!--언어 번역 레이아웃-->
    <v-layout v-if="toggle === 0" style="display: flex; height: 50vh" align-center justify-space-around>
      <div style="width: 40vw">
        <client-only>
          <v-select
            class="selector"
            v-model="from_lang"
            dense
            :items="language === '한국어' ? languages : e_languages"
            :placeholder="language === '한국어' ? '언어 선택' : 'Select'"
            single-line
            hide-details=""
          />
        </client-only>
        <v-textarea
          v-if="language === '한국어'"
          v-model="from_text"
          prepend-inner-icon="mdi-book-sync"
          placeholder="번역할 언어를 적어주세요."
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
          v-model="from_text"
          prepend-inner-icon="mdi-book-sync"
          placeholder="Enter what you want to translate."
          rows="15"
          auto-grow
          clearable
          counter
          outlined
          background-color="grey lighten-2"
          style="z-index: 0"
        />
      </div>
      <div style="width: 40vw">
        <client-only>
          <v-select
            class="selector"
            v-model="to_lang"
            dense
            :items="language === '한국어' ? languages : e_languages"
            :placeholder="language === '한국어' ? '언어 선택' : 'Select'"
            single-line
            hide-details=""
            
          />
        </client-only>
        <v-textarea
          v-if="language === '한국어'"
          v-model="to_text"
          prepend-inner-icon="mdi-book-check"
          placeholder="번역한 결과입니다."
          rows="15"
          auto-grow
          counter
          outlined
          readonly
          background-color="grey lighten-2"
          style="z-index: 0"
        />
        <v-textarea
          v-else-if="language === '영어'"
          v-model="to_text"
          prepend-inner-icon="mdi-book-check"
          placeholder="Result of the translation."
          rows="15"
          auto-grow
          counter
          outlined
          readonly
          background-color="grey lighten-2"
          style="z-index: 0"
        />
      </div>
    </v-layout>

    <!--파일 번역 레이아웃-->
    <v-layout v-else style="height: 50vh" align-center justify-space-around>
      <div class="text-center" align-center justify-center style="margin: 10vw">
        <v-icon class="text-h1">mdi-folder-upload</v-icon>
        <div>한글 파일만 가능 <br /> (Only Korean language)</div>
          <v-file-input v-if="language === '한국어'" class="file_upload" placeholder="업로드" :accept="acceptFiles" outlined rounded prepend-icon="" @change="uploadFile" />
          <v-file-input v-else-if="language === '영어'" class="file_upload" placeholder="Upload" :accept="acceptFiles" outlined rounded prepend-icon="" @change="uploadFile" />
        </div>
      <div style="width: 60vw">
        <v-select
            class="selector"
            v-model="file_lang"
            dense
            :items="language === '한국어' ? languages : e_languages"
            :placeholder="language === '한국어' ? '언어 선택' : 'Select'"
            single-line
            hide-details=""
          />
        <v-textarea
          v-model="file_text"
          rows="15"
          auto-grow
          counter
          outlined
          readonly
          background-color="grey lighten-2"
          style="z-index: 0"
        />
      </div>
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
.selector {
  width: 20vw;
}
.file_upload >>> input {
  text-align: center;
}
</style>

<script lang="js">
import _ from 'lodash';

export default {
  layout: 'textLayout',
  data() {
      return {
          colors: ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'],
          slides: ['김민수', '이민지', '김철수', '홍길동', '제임스'],
          fields: ['경제', '정보통신', '언어', '과학', '자동차'],
          toggle: 0,
          from_lang: '',
          from_code: 'ko',
          to_lang: '',
          to_code: 'zh-chs',
          from_text: '',
          acceptFiles: '.txt,.pdf',
          test_file: '',
          file_lang: '',
          file_code: '',
          file_text: '',
      }
  },
  created() {
    this.from_lang = this.language === '한국어' ? '한국어' : 'Korean';
    this.to_lang = this.language === '한국어' ? '중국어(간체)' : 'Chinese(Simplified)';
    this.file_lang = this.language === '한국어' ? '중국어(간체)' : 'Chinese(Simplified)';
  },
  watch: {
    language: function(lang) {
      this.from_lang = lang === '한국어' ? '한국어' : 'Korean';
      this.to_lang = lang === '한국어' ? '중국어(간체)' : 'Chinese(Simplified)';
    },
    from_lang: _.debounce(function(from) {
      this.from_code = this.language === '한국어' ? this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(from)] : this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(from)];
      this.translate();
    }, 500),
    to_lang: _.debounce(function(to) {
      this.to_code = this.language === '한국어' ? this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(to)] : this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(to)];
      this.translate();
    }, 500),
    file_lang: _.debounce(function(lang) {
      this.file_code = this.language === '한국어' ? this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(lang)] : this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(lang)];
      this.uploadFile(this.test_file);
    }, 200),
    from_text: _.debounce(function(text) {
      this.translate();
    }, 500)
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
    },
    to_text() {
      return this.$store.state.manager.translateText;
    }
  },
  methods: {
    translate() {
      if (this.from_lang.length == 0 || this.to_lang.length == 0) {
        this.$manage.showMessage({ message: '언어를 선택해주세요.', color: 'red' });
      } else {
        if (this.from_text == "" || this.from_text == null) {
          this.$store.commit('manager/setTranslate', '');
        } else {
          const res = this.$store.dispatch('manager/Test', {
            from: this.from_code,
            to: this.to_code,
            text: this.from_text,
            returnValue: false,
          });
        }
      }
    },
    async uploadFile(file) {
      if (file != null) {
        this.test_file = file;
        const filename = '' + this.test_file.name;
        const ext = filename.substring(filename.lastIndexOf('.') + 1, filename.length).toLowerCase();
        switch (ext) {
          case 'txt':
            // 텍스트 파일
            this.$nuxt.$loading.start();
            let txt_text = await this.test_file.text();
            const txtResponse = await this.$store.dispatch('manager/Test', {
              from: 'ko',
              to: this.file_code,
              text: txt_text,
              returnValue: true,
            });
            this.$nuxt.$loading.finish();
            this.file_text = txtResponse;
            break;
          case 'docx':
            // 워드 파일
            /*const docxResponse = await this.$store.dispatch('manager/textExtract', { 
              file: this.test_file, 
              to: this.file_code 
            });
            console.log(docxResponse);*/
            break;
          case 'pdf':
            // pdf 파일
            this.$nuxt.$loading.start();
            const pdfResponse = await this.$store.dispatch('manager/textExtract', {
              file: this.test_file,
              to: this.file_code
            });
            this.$nuxt.$loading.finish();
            //console.log(pdfResponse);
            this.file_text = pdfResponse;
            break;
          default:
            break;
        }
      } else {
        this.file_text = '';
      }
    }
  }
}
</script>