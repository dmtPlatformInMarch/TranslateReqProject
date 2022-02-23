<template>
  <v-container>
    <v-card outlined elevation="10">
      <!--한국어 필드-->
      <v-container v-if="language === '한국어'">
        <v-form ref="form" v-model="valid" @submit.prevent="">
          <v-text-field
            v-model="name"
            type="text"
            label="*성명"
            prepend-inner-icon="mdi-account"
            :rules="[(v) => !!v || '이름을 입력하셔야 합니다.']"
          />
          <v-text-field
            v-model="phone"
            type="tel"
            label="*휴대전화"
            prepend-inner-icon="mdi-cellphone"
            :rules="[(v) => !!v || '전화번호를 입력하셔야 합니다.']"
          />
          <v-text-field
            v-model="email"
            type="email"
            label="*이메일"
            prepend-inner-icon="mdi-email"
            :rules="[(v) => !!v || '이메일을 입력하셔야 합니다.']"
          />
          <v-text-field
            v-model="company"
            type="text"
            label="*회사명"
            prepend-inner-icon="mdi-office-building"
            :rules="[(v) => !!v || '회사이름이나 소속명을 입력해주세요.']"
          />
          <v-text-field
            v-model="second_phone"
            type="tel"
            label="전화"
            prepend-inner-icon="mdi-deskphone"
          />
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                prepend-inner-icon="mdi-calendar"
                v-bind="attrs"
                readonly
                label="*희망 납품일"
                :rules="[(v) => !!v || '희망 납품일을 입력해주세요.']"
                v-on="on"
              />
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer />
              <v-btn text @click="menu = false">Cancel</v-btn>
              <v-btn text @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
          <v-banner shaped>의뢰할 내용</v-banner>
          <div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <v-select
                  v-model="req_lang[0]"
                  class="selector"
                  :items="languages"
                  label="번역이 필요한 언어"
                  prepend-icon="mdi-book-sync"
                  outlined
                  dense
                  :rules="[(v) => !!v || '번역될 언어를 선택하세요.']"
                />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select
                  v-model="grant_lang[0]"
                  class="selector"
                  :items="languages"
                  label="번역할 언어"
                  prepend-icon="mdi-book-check"
                  outlined
                  dense
                  :rules="[(v) => !!v || '번역할 언어를 선택하세요.']"
                />
              </div>
              <div>
                <v-select
                  v-model="req_field[0]"
                  class="selector"
                  :items="field"
                  label="요청분야"
                  prepend-icon="mdi-shape"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-file-input
                  v-model="file[0]"
                  class="file_selector"
                  prepend-icon="mdi-content-save"
                  label="파일 첨부"
                  small-chips
                  multiple
                  dense
                  :rules="[(v) => !!v || '번역 파일을 첨부해주세요.']"
                  @change="onChangeFile(0, $event)"
                  @click:clear="onClearFile(0)"
                />
              </div>
            </div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <v-select
                  v-model="req_lang[1]"
                  class="selector"
                  :items="languages"
                  label="번역이 필요한 언어"
                  prepend-icon="mdi-book-sync"
                  outlined
                  dense
                />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select
                  v-model="grant_lang[1]"
                  class="selector"
                  :items="languages"
                  label="번역할 언어"
                  prepend-icon="mdi-book-check"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-select
                  v-model="req_field[1]"
                  class="selector"
                  :items="field"
                  label="요청분야"
                  prepend-icon="mdi-shape"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-file-input
                  v-model="file[1]"
                  class="file_selector"
                  prepend-icon="mdi-content-save"
                  label="파일 첨부"
                  small-chips
                  multiple
                  dense
                  @change="onChangeFile(1, $event)"
                  @click:clear="onClearFile(1)"
                />
              </div>
            </div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <v-select
                  v-model="req_lang[2]"
                  class="selector"
                  :items="languages"
                  label="번역이 필요한 언어"
                  prepend-icon="mdi-book-sync"
                  outlined
                  dense
                />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select
                  v-model="grant_lang[2]"
                  class="selector"
                  :items="languages"
                  label="번역할 언어"
                  prepend-icon="mdi-book-check"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-select
                  v-model="req_field[2]"
                  class="selector"
                  :items="field"
                  label="요청분야"
                  prepend-icon="mdi-shape"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-file-input
                  v-model="file[2]"
                  class="file_selector"
                  prepend-icon="mdi-content-save"
                  label="파일 첨부"
                  small-chips
                  multiple
                  dense
                  @change="onChangeFile(2, $event)"
                  @click:clear="onClearFile(2)"
                />
              </div>
            </div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <v-select
                  v-model="req_lang[3]"
                  class="selector"
                  :items="languages"
                  label="번역이 필요한 언어"
                  prepend-icon="mdi-book-sync"
                  outlined
                  dense
                />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select
                  v-model="grant_lang[3]"
                  class="selector"
                  :items="languages"
                  label="번역할 언어"
                  prepend-icon="mdi-book-check"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-select
                  v-model="req_field[3]"
                  class="selector"
                  :items="field"
                  label="요청분야"
                  prepend-icon="mdi-shape"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-file-input
                  v-model="file[3]"
                  class="file_selector"
                  prepend-icon="mdi-content-save"
                  label="파일 첨부"
                  small-chips
                  multiple
                  dense
                  @change="onChangeFile(3, $event)"
                  @click:clear="onClearFile(3)"
                />
              </div>
            </div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <v-select
                  v-model="req_lang[4]"
                  class="selector"
                  :items="languages"
                  label="번역이 필요한 언어"
                  prepend-icon="mdi-book-sync"
                  outlined
                  dense
                />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select
                  v-model="grant_lang[4]"
                  class="selector"
                  :items="languages"
                  label="번역할 언어"
                  prepend-icon="mdi-book-check"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-select
                  v-model="req_field[4]"
                  class="selector"
                  :items="field"
                  label="요청분야"
                  prepend-icon="mdi-shape"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-file-input
                  v-model="file[4]"
                  class="file_selector"
                  prepend-icon="mdi-content-save"
                  label="파일 첨부"
                  small-chips
                  multiple
                  dense
                  @change="onChangeFile(4, $event)"
                  @click:clear="onClearFile(4)"
                />
              </div>
            </div>
          </div>
          <v-textarea
            v-model="options"
            outlined
            auto-grow
            clearable
            label="특이사항"
            prepend-inner-icon="mdi-star-cog"
            :hide-details="hideDetails"
            @input="onChangeTextarea"
          />
          <div
            style="
              display: flex;
              align-content: center;
              justify-content: flex-start;
              margin: auto;
              padding: 10px 0;
            "
          >
            <v-spacer />
            <v-btn
              depressed
              color="#0d6efd"
              dark
              large
              style="margin: 10px"
              @click="pdfTest"
            >
              견적서 발급
              <v-icon right>mdi-file-download</v-icon>
            </v-btn>
            <v-btn
              depressed
              color="success"
              :disabled="!loginState"
              dark
              large
              style="margin: 10px"
              @click="dialog = true"
            >
              번역 의뢰
              <v-icon right>mdi-file-edit</v-icon>
            </v-btn>
            <v-dialog v-model="dialog" persistent max-width="300">
              <v-card>
                <v-card-title class="text-h5">의뢰 내용 확인</v-card-title>
                <v-card-text>해당 의뢰 내용으로 제출하시겠습니까?</v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn text @click="dialog = false">취소</v-btn>
                  <v-btn
                    color="success"
                    text
                    @click="onSubmitForm"
                    type="submit"
                    >확인</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-form>
      </v-container>

      <!--영어 필드-->
      <v-container v-else-if="language === '영어'">
        <v-form ref="form" v-model="valid" @submit.prevent="">
          <v-text-field
            v-model="name"
            type="text"
            label="*Name"
            prepend-inner-icon="mdi-account"
            :rules="[(v) => !!v || 'You have to enter your name.']"
          />
          <v-text-field
            v-model="phone"
            type="tel"
            label="*Phone Number"
            prepend-inner-icon="mdi-cellphone"
            :rules="[(v) => !!v || 'You have to enter your phone number.']"
          />
          <v-text-field
            v-model="email"
            type="email"
            label="*Email"
            prepend-inner-icon="mdi-email"
            :rules="[(v) => !!v || 'You have to enter an email.']"
          />
          <v-text-field
            v-model="company"
            type="text"
            label="*Company"
            prepend-inner-icon="mdi-office-building"
            :rules="[(v) => !!v || 'Please enter name of your company.']"
          />
          <v-text-field
            v-model="second_phone"
            type="tel"
            label="Tel"
            prepend-inner-icon="mdi-deskphone"
          />
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                prepend-inner-icon="mdi-calendar"
                v-bind="attrs"
                readonly
                label="*Desired date"
                :rules="[(v) => !!v || 'Please enter the desired date.']"
                v-on="on"
              />
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer />
              <v-btn text @click="menu = false">Cancel</v-btn>
              <v-btn text @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
          <v-banner shaped>The Request</v-banner>
          <div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <v-select
                  v-model="req_lang[0]"
                  class="selector"
                  :items="e_languages"
                  label="Need translation"
                  prepend-icon="mdi-book-sync"
                  outlined
                  dense
                  :rules="[
                    (v) => !!v || 'Choose the language to be translated.',
                  ]"
                />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select
                  v-model="grant_lang[0]"
                  class="selector"
                  :items="e_languages"
                  label="To translate"
                  prepend-icon="mdi-book-check"
                  outlined
                  dense
                  :rules="[(v) => !!v || 'Choose a language to translate.']"
                />
              </div>
              <div>
                <v-select
                  v-model="req_field[0]"
                  class="selector"
                  :items="e_field"
                  label="Request field"
                  prepend-icon="mdi-shape"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-file-input
                  v-model="file[0]"
                  class="file_selector"
                  prepend-icon="mdi-content-save"
                  label="File"
                  small-chips
                  multiple
                  dense
                  :rules="[(v) => !!v || 'Please attach the File.']"
                  @change="onChangeFile(0, $event)"
                  @click:clear="onClearFile(0)"
                />
              </div>
            </div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <v-select
                  v-model="req_lang[1]"
                  class="selector"
                  :items="e_languages"
                  label="Need translation"
                  prepend-icon="mdi-book-sync"
                  outlined
                  dense
                />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select
                  v-model="grant_lang[1]"
                  class="selector"
                  :items="e_languages"
                  label="To translate"
                  prepend-icon="mdi-book-check"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-select
                  v-model="req_field[1]"
                  class="selector"
                  :items="e_field"
                  label="Request field"
                  prepend-icon="mdi-shape"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-file-input
                  v-model="file[1]"
                  class="file_selector"
                  prepend-icon="mdi-content-save"
                  label="File"
                  small-chips
                  multiple
                  dense
                  @change="onChangeFile(1, $event)"
                  @click:clear="onClearFile(1)"
                />
              </div>
            </div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <v-select
                  v-model="req_lang[2]"
                  class="selector"
                  :items="e_languages"
                  label="Need translation"
                  prepend-icon="mdi-book-sync"
                  outlined
                  dense
                />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select
                  v-model="grant_lang[2]"
                  class="selector"
                  :items="e_languages"
                  label="To translate"
                  prepend-icon="mdi-book-check"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-select
                  v-model="req_field[2]"
                  class="selector"
                  :items="e_field"
                  label="Request field"
                  prepend-icon="mdi-shape"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-file-input
                  v-model="file[2]"
                  class="file_selector"
                  prepend-icon="mdi-content-save"
                  label="File"
                  small-chips
                  multiple
                  dense
                  @change="onChangeFile(2, $event)"
                  @click:clear="onClearFile(2)"
                />
              </div>
            </div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <v-select
                  v-model="req_lang[3]"
                  class="selector"
                  :items="e_languages"
                  label="Need translation"
                  prepend-icon="mdi-book-sync"
                  outlined
                  dense
                />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select
                  v-model="grant_lang[3]"
                  class="selector"
                  :items="e_languages"
                  label="To translate"
                  prepend-icon="mdi-book-check"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-select
                  v-model="req_field[3]"
                  class="selector"
                  :items="e_field"
                  label="Request field"
                  prepend-icon="mdi-shape"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-file-input
                  v-model="file[3]"
                  class="file_selector"
                  prepend-icon="mdi-content-save"
                  label="File"
                  small-chips
                  multiple
                  dense
                  @change="onChangeFile(3, $event)"
                  @click:clear="onClearFile(3)"
                />
              </div>
            </div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <v-select
                  v-model="req_lang[4]"
                  class="selector"
                  :items="e_languages"
                  label="Need translation"
                  prepend-icon="mdi-book-sync"
                  outlined
                  dense
                />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select
                  v-model="grant_lang[4]"
                  class="selector"
                  :items="e_languages"
                  label="To translate"
                  prepend-icon="mdi-book-check"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-select
                  v-model="req_field[4]"
                  class="selector"
                  :items="e_field"
                  label="Request field"
                  prepend-icon="mdi-shape"
                  outlined
                  dense
                />
              </div>
              <div>
                <v-file-input
                  v-model="file[4]"
                  class="file_selector"
                  prepend-icon="mdi-content-save"
                  label="File"
                  small-chips
                  multiple
                  dense
                  @change="onChangeFile(4, $event)"
                  @click:clear="onClearFile(4)"
                />
              </div>
            </div>
          </div>
          <v-textarea
            v-model="options"
            outlined
            auto-grow
            clearable
            label="Special Order"
            prepend-inner-icon="mdi-star-cog"
            :hide-details="hideDetails"
            @input="onChangeTextarea"
          />
          <div
            style="
              display: flex;
              align-content: center;
              justify-content: flex-start;
              margin: auto;
              padding: 10px 0;
            "
          >
            <v-spacer />
            <v-btn
              depressed
              color="#0d6efd"
              dark
              large
              style="margin: 10px"
              @click="pdfTest"
            >
              Issuing Quotation
              <v-icon right>mdi-file-download</v-icon>
            </v-btn>
            <v-btn
              depressed
              color="success"
              :disabled="!loginState"
              dark
              large
              style="margin: 10px"
              @click="dialog = true"
            >
              Translation request
              <v-icon right>mdi-file-edit</v-icon>
            </v-btn>
            <v-dialog v-model="dialog" persistent max-width="300">
              <v-card>
                <v-card-title class="text-h5">Check the request</v-card-title>
                <v-card-text>Would you like to submit the request?</v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn text @click="dialog = false">Cancel</v-btn>
                  <v-btn
                    color="success"
                    text
                    @click="onSubmitForm"
                    type="submit"
                    >OK</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<style scoped>
.selector {
  min-width: 200px;
  max-width: 200px;
}
.file_selector {
  min-width: 200px;
  max-width: 200px;
}
</style>

<script lang="js">
import { mapState } from 'vuex';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts.js";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default {
  layout: 'text_layout',
  data: () => ({
      hideDetails: true,
      valid: false,
      menu: false,
      languages: ['한국어', '중국어', '일본어', '독일어', '러시아어', '아랍어'],
      e_languages: ['Koran', 'Chinese', 'Japanese', 'German', 'Russian', 'Arabic'],
      name: 'RQTest',
      phone: '01012341234',
      email: '123@123.com',
      company: '123Company',
      second_phone: '021231234',
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      field: ['단순 번역', '논문', '경제', '컴퓨터/정보통신'],
      e_field: ['Simple translation', 'Thesis', 'Economy', 'Computer/Information Communication'],
      req_field: ['단순 번역', '', '', '', ''],
      req_lang: ['한국어', '', '', '', ''],
      grant_lang: ['중국어', '', '', '', ''],
      price: [ 20000, 15000, 20000, 5000, 10000],
      file: [],
      options: 'Options Test',
      dialog: false,
  }),
  computed: {
      ...mapState('requests', ['imagePaths']),
      loginState() {
          return this.$store.state.users.loginState;
      },
      language() {
        return this.$store.state.manager.language;
      }
  },
  methods: {
      pdfTest: function() {
          var documentDefinition = {
              // 워터마크
              watermark: {
                  text: 'DMTLABS',
                  color: 'blue',
                  opacity: 0.2,
                  bold: true,
                  fontSize: 40,
                  angle: 30
              },
              content: [
                  // 제목
                  {
                      text: '\n' + 'DMTLABS 번역 의뢰 견적서' + '\n\n',
                      style: 'style_header'
                  },
                  // 공급자 테이블
                  {
                      style: 'style_table',
                      table: {
                          widths: ['auto', 100, '*', '*'],
                          body: [
                              [ {text:'공급자', rowSpan: 4, fillColor: '#bdcce3'}, {text: '대표'}, {text: 'DMTLABS 대표자', colSpan:2}, '' ],
                              [ '', {text: '상호'}, {text: 'DMTLABS', colSpan: 2}, '' ],
                              [ '', {text: '주소'}, {text: 'DMTLABS 주소', colSpan: 2}, '' ],
                              [ '', {text: '연락처'}, {text: 'DMTLABS 대표 연락처', colSpan: 2}, '' ],
                          ]
                      }
                  },
                  // 의뢰자 테이블
                  {
                      style: 'style_table',
                      table: {
                          widths: ['auto', 100, '*', '*'],
                          body: [
                              [ {text:'의뢰자', rowSpan: 4, fillColor: '#bdcce3'}, {text: '의뢰인'}, {text: `${this.name}`, colSpan:2}, '' ],
                              [ '', {text: '의뢰처'}, {text: `${this.company}`, colSpan: 2}, '' ],
                              [ '', {text: '연락처'}, {text: `${this.phone.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3")}`, colSpan: 2}, '' ],
                              [ '', {text: '의뢰 희망일'}, {text: `${this.date}`, colSan: 2}, '' ],
                          ]
                      }
                  },
                  // 의뢰 내역 테이블
                  {
                      style: 'style_table',
                      table: {
                          heights: 20,
                          widths: ['auto', '*', '*', '*', 'auto'],
                          headerRows: 2,
                          body: [
                              [ {text: '총 금액', colSpan: 2, fillColor: '#f49d80'}, '', {text: '20000원', colSpan: 3, fillColor: '#f49d80'}, '', '' ], 
                              [ {text: '번역 내용', colSpan: 2, fillColor: '#dedede'}, '', {text: '번역 단가', colSpan: 2, fillColor: '#dedede'}, '', {text: '비고', fillColor: '#dedede'} ],
                              [ {text: `${this.req_lang[0]} -> ${this.grant_lang[0]}`, colSpan: 2}, '', {text: `${this.price[0]}원`, colSpan: 2}, '', '' ],
                              [ {text: `${this.req_lang[1]} -> ${this.grant_lang[1]}`, colSpan: 2}, '', {text: `${this.price[1]}원`, colSpan: 2}, '', '' ],
                              [ {text: `${this.req_lang[2]} -> ${this.grant_lang[2]}`, colSpan: 2}, '', {text: `${this.price[2]}원`, colSpan: 2}, '', '' ],
                              [ {text: `${this.req_lang[3]} -> ${this.grant_lang[3]}`, colSpan: 2}, '', {text: `${this.price[3]}원`, colSpan: 2}, '', '' ],
                              [ {text: `${this.req_lang[4]} -> ${this.grant_lang[4]}`, colSpan: 2}, '', {text: `${this.price[4]}원`, colSpan: 2}, '', '' ],
                          ]
                      }
                  }
              ],
              // 페이지 번호 삽입
              footer: function (currentPage, pageCount) {
                  return {
                      margin: 10,
                      columns: [{
                          fontSize: 9,
                          text: {
                              text: '' + currentPage.toString()
                          }
                      },
                      ],
                      alignment: 'center'
                  }
              },
              // 커스텀 스타일 세트 그룹 정의
              styles: {
                  style_header: {
                      fontSize: 24,
                      bold: true,
                      margin: [0, 0, 0, 0],
                      alignment: 'center',
                  },
                  style_test: {
                      fontSize: 18,
                      bold: true,
                      margin: [0, 0, 0, 0],
                      alignment: 'center'
                  },
                  style_table: {
                      margin: [0, 5, 0, 15],
                      alignment: 'center',
                      fontSize: 12,
                  }
              },
              // 페이지 용지 사이즈
              pageSize: 'A4',
              // 페이지 방향 (세로=portrait / 가로=landscape)
              pageOrientation: 'portrait',
          };
          var pdf_name = '번역 의뢰 견적서.pdf';
          pdfMake.createPdf(documentDefinition).download(pdf_name);
          //pdfMake.createPdf(documentDefinition).open();
      },
      async onSubmitForm() {
          try {
              if (this.$refs.form.validate()) {
                  const submitResponse = await this.$store.dispatch('requests/onRequest', {
                      name: this.name,
                      phone: this.phone,
                      email: this.email,
                      company: this.company,
                      second_phone: this.second_phone,
                      date: this.date,
                      field: this.req_field,
                      req_lang: this.req_lang,
                      grant_lang: this.grant_lang,
                      options: this.options,
                      trans_state: '번역 준비중'
                  });
                  /*console.log(
                      `name: ${this.name}\n`,
                      `phone: ${this.phone}\n`,
                      `email: ${this.email}\n`,
                      `company: ${this.company}\n`,
                      `second_phone: ${this.second_phone}\n`,
                      `date: ${this.date}\n`,
                      `field: ${this.req_field}\n`,
                      `req_lang: ${this.req_lang}\n`,
                      `grant_lang: ${this.grant_lang}\n`,
                      `options: ${this.options}\n`,
                      `trans_state: ${'번역 준비중'}\n`,
                  );*/
                  if (submitResponse.statusText === 'OK') {
                    this.$manage.showMessage({ message: '의뢰 성공', color: 'green lighten-2' });
                    console.log('의뢰');
                    this.$router.push({ path: '/user/textmain'});
                  }
                  else {
                    this.$manage.showMessage({ message: '의뢰 실패', color: 'indigo lighten-2' });
                    this.$store.dispatch('requests/cancelRequest', submitResponse.data.id);
                    console.log('의뢰 실패');
                  }
                  this.dialog = false;
              }
          } catch (error) {
              // 오류처리
              this.$manage.showMessage({ message: '의뢰 실패', color: 'red lighten-2' });
              console.error(error);
          }
      },
      onChangeTextarea() {
          this.hideDetails = true;
      },
      onChangeFile(index, e) {
          const fileFormData = new FormData();
          if (e != null) {
              //console.log(e);
              [].forEach.call(e, (f) => {
                  fileFormData.append('fileKey', f);
              })
              this.$store.dispatch('requests/uploadFile', {index: index, file: fileFormData});
          } else {
              console.log("e is null!!!");
          }
      },
      onClearFile(index) {
          this.$store.dispatch('requests/removeFile', index);
      }
  }
}
</script>