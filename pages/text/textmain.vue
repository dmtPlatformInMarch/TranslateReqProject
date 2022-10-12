<template>
  <v-container class="layout__container">
    <!--버튼 레이아웃-->
    <v-layout class="button__layout">
      <v-btn-toggle class="button__group" v-model="toggle" tile mandatory>
        <v-btn class="button__object">
          <div>
            <v-icon>mdi-earth</v-icon>
          </div>
          <div v-if="language === '한국어'">
            <h4>언어 번역</h4>
            <div>8개의 언어</div>
          </div>
          <div v-else-if="language === '영어'">
            <h4>Translation</h4>
            <div>8 languages</div>
          </div>
        </v-btn>

        <v-btn class="button__object">
          <div>
            <v-icon>mdi-file</v-icon>
          </div>
          <div v-if="language === '한국어'">
            <h4>파일 번역</h4>
            <div>.txt .pdf만 가능</div>
          </div>
          <div v-else-if="language === '영어'">
            <h4>File translation</h4>
            <div>Only .txt / .pdf</div>
          </div>
        </v-btn>
      </v-btn-toggle>
    </v-layout>

    <!--언어 번역 레이아웃-->
    <v-layout class="translate__layout" v-if="toggle === 0">
      <v-container class="translate__container">
        <client-only>
          <v-select
            v-model="from_lang"
            class="selector"
            dense
            :items="language === '한국어' ? from_languages : e_from_languages"
            :placeholder="language === '한국어' ? '언어 선택' : 'Select'"
            single-line
            hide-details=""
          />
        </client-only>
        <v-textarea
          class="translate__input"
          v-if="language === '한국어'"
          v-model="from_text"
          prepend-inner-icon="mdi-book-sync"
          placeholder="번역할 언어를 적어주세요."
          clearable
          counter
          outlined
          background-color="grey lighten-2"
          style="z-index: 0"
        />
        <v-textarea
          class="translate__input"
          v-else-if="language === '영어'"
          v-model="from_text"
          prepend-inner-icon="mdi-book-sync"
          placeholder="Enter what you want to translate."
          clearable
          counter
          outlined
          background-color="grey lighten-2"
          style="z-index: 0"
        />
      </v-container>
      <v-container class="translate__container">
        <client-only>
          <v-select
            v-model="to_lang"
            class="selector"
            dense
            :items="language === '한국어' ? languages : e_languages"
            :placeholder="language === '한국어' ? '언어 선택' : 'Select'"
            single-line
            hide-details=""
          />
        </client-only>
        <v-textarea
          class="translate__input"
          v-if="language === '한국어'"
          v-model="to_text"
          prepend-inner-icon="mdi-book-check"
          placeholder="번역한 결과입니다."
          counter
          outlined
          readonly
          background-color="grey lighten-2"
          style="z-index: 0"
        />
        <v-textarea
          class="translate__input"
          v-else-if="language === '영어'"
          v-model="to_text"
          prepend-inner-icon="mdi-book-check"
          placeholder="Result of the translation."
          counter
          outlined
          readonly
          background-color="grey lighten-2"
          style="z-index: 0"
        />
      </v-container>
    </v-layout>

    <!--파일 번역 레이아웃-->
    <v-layout class="file__layout" v-else>
      <div class="file__container text-center">
        <v-select
            v-model="from_file_lang"
            class="selector"
            dense
            :items="language === '한국어' ? from_languages : e_from_languages"
            :placeholder="language === '한국어' ? '언어 선택' : 'Select'"
            single-line
            hide-details=""
          />
        <v-icon class="text-h1">mdi-folder-upload</v-icon>
        <div>5MB 아래 파일만 가능 <br /> (Only Low than 5MB)</div>
        <v-file-input v-if="language === '한국어'" class="file_upload" placeholder="업로드" :accept="acceptFiles" outlined rounded prepend-icon="" @change="uploadFile" />
        <v-file-input v-else-if="language === '영어'" class="file_upload" placeholder="Upload" :accept="acceptFiles" outlined rounded prepend-icon="" @change="uploadFile" />
      </div>
      <div class="file__translate">
        <v-select
            v-model="to_file_lang"
            class="selector"
            dense
            :items="language === '한국어' ? file_languages : e_file_languages"
            :placeholder="language === '한국어' ? '언어 선택' : 'Select'"
            single-line
            hide-details=""
          />
        <v-textarea
          v-model="file_text"
          rows="15"
          counter
          outlined
          readonly
          background-color="grey lighten-2"
          style="z-index: 0"
        />
      </div>
    </v-layout>

    <!--번역자 레이아웃-->
    <v-layout class="translator__layout">
      <v-carousel interval="3000" hide-delimiter-background hide-delimiters :show-arrows="false" height="100%">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet class="translator__sheet" :color="colors[i]">
            <!--v-layout class="fill-height" align-center justify-center>
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
            </v-layout-->
            <v-layout class="translator__recruit fill-height text-center" align-center justify-center>
              {{ language === '한국어' ? "번역자 모집" : "Translator Recruit" }}<br>
              {{ language === '한국어' ? "모집일은 추후 공지" : "Recruitment date will be announced later" }}
            </v-layout>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-layout>
  </v-container>
</template>

<style scoped>
.layout__container {
  display: flex;
  flex-direction: column;
}
.button__layout {
  display: flex;
  flex-direction: column;
}
.button__group {
  display: flex;
  justify-content: center;
  width: 30%;
  margin: 0 3%;
}
.button__object {
  overflow: hidden;
  justify-content: flex-start;
  width: 50%;
}
.button__object >>> div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 0.75rem;
}
.selector {
  width: 100%;
}
.translate__layout {
  display: flex;
  height: 60%;
  margin-bottom: 25px;
}
.translate__container {
  width: 40vw;
  height: 100%;
}
.translate__input {
  height: 100%;
}
.file__layout {
  display: flex;
  flex-direction: row;
  height: 60%;
  align-items: center;
  justify-content: space-around;
  margin: 0 25px;
}
.file__container {
  padding: 25px;
  width: 40%;
  align-items: center;
  justify-content: center;
}
.file__translate {
  width: 50%;
}
::v-deep .v-input__control {
  height: 100%;
  flex-direction: row;
}
::v-deep .v-input__slot {
  height: 90%;
}
::v-deep .v-text-field__details {
  height: 10%;
}
.file_upload >>> input {
  text-align: center;
}
.translator__layout {
  height: 47vh;
  margin: 0 25px;
}
.translator__sheet {
  height: 100%;
}
.translator__recruit {
  font-size: 48px;
}

@media screen and (max-width: 1300px) {
  .button__group {
    width: 40%;
  }
}

@media screen and (max-width: 900px) {
  .layout__container {
    display: block;
  }
  .button__group {
    width: 50%;
  }
  .translator__layout {
    height: 40vh;
    margin: 0 10px;
  }
}

@media screen and (max-width: 700px) {
  .button__group {
    width: auto;
  }
  .translate__layout {
    flex-direction: column;
  }
  .translate__container {
    width: 100%;
  }
  .file__layout {
    flex-direction: column;
  }
  .file__container {
    width: 100%;
    height: 40%;
    padding: 10px;
  }
  .file__translate {
    width: 100%;
    height: 50%;    
  }
  .file__translate >>> .v-textarea {
    height: 90%;
  }
  .translator__recruit {
    font-size: 2rem;
  }
}

@media screen and (max-width: 400px) {
  .layout__container {
    padding: 0;
  }
  .button__object {
    font-size: 0.1rem;
  }
  .translate__layout {
    height: auto;
  }
  .translator__layout {
    height: 40vh;
  }
  .translator__recruit {
    font-size: 1rem;
  }
}
</style>

<script lang="js">
import _ from 'lodash';

export default {
  layout: 'TextLayout',
  data() {
      return {
          colors: ['indigo lighten-4', 'amber lighten-2', 'pink lighten-4', 'red lighten-3', 'deep-purple lighten-3'],
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
          from_file_lang: '',
          to_file_lang: '',
          from_file_code: '',
          to_file_code: '',
          file_text: '',
      }
  },
  async fetch() {
    await this.$store.dispatch('users/loadUser');
  },
  created() {
    this.from_lang = this.language === '한국어' ? '한국어' : 'Korean';
    this.to_lang = this.language === '한국어' ? '중국어(간체)' : 'Chinese(Simplified)';
    this.from_file_lang = this.language === '한국어' ? '한국어' : 'Korean';
    this.to_file_lang = this.language === '한국어' ? '중국어(간체)' : 'Chinese(Simplified)';
  },
  computed: {
    language() {
      return this.$store.state.manager.language;
    },
    from_languages() {
      return this.$LANGUAGES_KO;
    },
    e_from_languages() {
      return this.$LANGUAGES_EN;
    },
    languages() {
      let newLanguages = this.$LANGUAGES_KO;
      if (newLanguages != undefined) newLanguages = newLanguages.filter(lang => lang != this.from_lang);
      return newLanguages;
    },
    e_languages() {
      let newLanguages = this.$LANGUAGES_EN;
      if (newLanguages != undefined) newLanguages = newLanguages.filter(lang => lang != this.from_lang);
      return newLanguages;
    },
    file_languages() {
      let newLanguages = this.$LANGUAGES_KO;
      if (newLanguages != undefined) newLanguages = newLanguages.filter(lang => lang != this.from_file_lang);
      return newLanguages;
    },
    e_file_languages() {
      let newLanguages = this.$LANGUAGES_EN;
      if (newLanguages != undefined) newLanguages = newLanguages.filter(lang => lang != this.from_file_lang);
      return newLanguages;
    },
    to_text() {
      return this.$store.state.manager.translateText;
    }
  },
  watch: {
    language: function(lang) {
      this.from_lang = lang === '한국어' ? '한국어' : 'Korean';
      this.to_lang = lang === '한국어' ? '중국어(간체)' : 'Chinese(Simplified)';
      this.from_file_lang = this.language === '한국어' ? '한국어' : 'Korean';
      this.to_file_lang = this.language === '한국어' ? '중국어(간체)' : 'Chinese(Simplified)';
    },
    from_lang: _.debounce(function(from) {
      this.from_code = this.language === '한국어' ? this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(from)] : this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(from)];
      this.translate();
    }, 500),
    to_lang: _.debounce(function(to) {
      this.to_code = this.language === '한국어' ? this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(to)] : this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(to)];
      this.translate();
    }, 500),
    from_file_lang: _.debounce(function(lang) {
      this.from_file_code = this.language === '한국어' ? this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(lang)] : this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(lang)];
      if (this.from_text != "" || this.from_text != null) this.uploadFile(this.test_file);
    }, 500), 
    to_file_lang: _.debounce(function(lang) {
      this.to_file_code = this.language === '한국어' ? this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(lang)] : this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(lang)];
      if (this.from_text != "" || this.from_text != null) this.uploadFile(this.test_file);
    }, 500),
    from_text: _.debounce(function(text) {
      this.translate();
    }, 500)
  },
  methods: {
    async translate() {
      if (this.from_lang.length == 0 || this.to_lang.length == 0) {
        this.$manage.showMessage({ message: '언어를 선택해주세요.', color: 'red' });
      } else {
        if (this.from_text == "" || this.from_text == null) {
          this.$store.commit('manager/setTranslate', '');
        } else {
          try {
            this.$nuxt.$loading.start();
            const res = await this.$store.dispatch('manager/Test', {
              from: this.from_code,
              to: this.to_code,
              text: this.from_text,
              returnValue: false,
            });
            this.$nuxt.$loading.finish();
          } catch(err) {

          }
        }
      }
    },
    async uploadFile(file) {
      if (file != null && typeof(file) == 'object') {
        if ((file.size / 1000000) >= 5.5) {
          this.$manage.showMessage({ message: '파일 크기가 너무 큽니다.', color: 'red' });
        } else {
          this.test_file = file;
          const filename = '' + this.test_file.name;
          const ext = filename.substring(filename.lastIndexOf('.') + 1, filename.length).toLowerCase();
          switch (ext) {
            case 'txt':
              // 텍스트 파일
              this.$nuxt.$loading.start();
              let txt_text = await this.test_file.text();
              const txtResponse = await this.$store.dispatch('manager/Test', {
                from: this.from_file_code,
                to: this.to_file_code,
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
                to: this.to_file_code 
              });
              console.log(docxResponse);*/
              break;
            case 'pdf':
              // pdf 파일
              this.$nuxt.$loading.start();
              const pdfResponse = await this.$store.dispatch('manager/textExtract', {
                from: this.from_file_code,
                to: this.to_file_code,
                file: this.test_file,
              });
              this.$nuxt.$loading.finish();
              //console.log(pdfResponse);
              this.file_text = pdfResponse;
              break;
            default:
              break;
          }
        }
      } else {
        this.file_text = '';
        this.test_file = '';
      }
    }
  }
}
</script>