<template>
  <v-container>
    <div style="margin-top : 5%"></div>
    <!--선택 토글-->
    <v-col>
      <v-btn-toggle
        ref="toggle"
        v-model="sels"
        class="toggle_group"
        mandatory
        color="primary"
        style="width: 100%"
      >
        <v-btn
          width="50%"
          style="margin: 0; padding: 0"
        >{{ language === "한국어" ? "견적" : "Estimate" }}</v-btn>
        <v-btn width="50%" style="margin: 0; padding: 0">{{ language === "한국어" ? "의뢰" : "Request" }}</v-btn>
      </v-btn-toggle>
    </v-col>

    <!--견적 페이지-->
    <v-card v-if="sels === 0" outlined elevation="10">
      <!--한국어 필드-->
      <v-container v-if="language === '한국어'">
        <v-row>
          <v-col>
            <v-toolbar class="toolbar_class" elevation="0">
              <v-toolbar-title class="font-weight-bold">원본 언어</v-toolbar-title>
            </v-toolbar>
            <v-list class="overflow-y-auto" height="300">
              <v-list-item-group v-model="selectLanguage1" mandatory>
                <v-list-item v-for="(lang, i) in languages" :key="i" active-class="list_select">
                  <v-list-item-title>{{ lang }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <div class="d-flex align-center justify-center">
            <v-icon>mdi-arrow-right-bold</v-icon>
          </div>
          <v-col>
            <v-toolbar class="toolbar_class" elevation="0">
              <v-toolbar-title class="font-weight-bold">번역 언어</v-toolbar-title>
            </v-toolbar>
            <v-list class="overflow-y-auto" height="300">
              <v-list-item-group v-model="selectLanguage2" mandatory>
                <v-list-item
                  v-for="(lang, i) in selectLanguage1 == 0 ? languages : ['한국어']"
                  :key="i"
                  active-class="list_select"
                >
                  <v-list-item-title>{{ lang }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col>
            <v-toolbar class="toolbar_class" elevation="0">
              <v-toolbar-title class="font-weight-bold">요청 분야</v-toolbar-title>
            </v-toolbar>
            <v-list class="overflow-y-auto" height="300">
              <v-list-item-group v-model="selectField" mandatory>
                <v-list-item v-for="(f, i) in field" :key="i" active-class="list_select">
                  <v-list-item-title>{{ f }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
      <!--영어 필드-->
      <v-container v-else-if="language === '영어'">
        <v-row>
          <v-col>
            <v-toolbar color="primary">
              <v-toolbar-title>Original Language</v-toolbar-title>
            </v-toolbar>
            <v-list class="overflow-y-auto" height="300">
              <v-list-item-group v-model="selectLanguage1" mandatory>
                <v-list-item v-for="(lang, i) in e_languages" :key="i" active-class="list_select">
                  <v-list-item-title>{{ lang }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <div class="d-flex align-center justify-center">
            <v-icon>mdi-arrow-right-bold</v-icon>
          </div>
          <v-col>
            <v-toolbar color="primary">
              <v-toolbar-title>Translate Language</v-toolbar-title>
            </v-toolbar>
            <v-list class="overflow-y-auto" height="300">
              <v-list-item-group v-model="selectLanguage2" mandatory>
                <v-list-item
                  v-for="(lang, i) in selectLanguage1 == 0 ? e_languages : ['Korean']"
                  :key="i"
                  active-class="list_select"
                >
                  <v-list-item-title>{{ lang }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col>
            <v-toolbar color="primary">
              <v-toolbar-title>Request Field</v-toolbar-title>
            </v-toolbar>
            <v-list class="overflow-y-auto" height="300">
              <v-list-item-group v-model="selectField" mandatory>
                <v-list-item v-for="(f, i) in e_field" :key="i" active-class="list_select">
                  <v-list-item-title>{{ f }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
      </v-container>

      <v-divider />

      <!--글자수 입력 필드-->
      <!--한글-->
      <v-card v-if="language === '한국어'">
        <v-card-title class="text-h4">
          글자수
          <v-spacer />
          <v-text-field
            v-model="wordCount"
            type="number"
            hide-spin-buttons
            prefix="글자"
            reverse
            dense
          />
        </v-card-title>
        <v-card-subtitle class="text-caption">
          중국어/일본어 = 1글자 당
          <br />그 외 = 1단어 당
        </v-card-subtitle>
        <v-spacer />
      </v-card>
      <!--영어-->
      <v-card v-else-if="language === '영어'">
        <v-card-title class="text-h4">
          Words(Characters)
          <v-spacer />
          <v-text-field
            v-model="wordCount"
            type="number"
            hide-spin-buttons
            prefix="words"
            reverse
            dense
          />
        </v-card-title>
        <v-card-subtitle class="text-caption">
          Chinese/Japanese = per letter
          <br />Other = per word
        </v-card-subtitle>
        <v-spacer />
      </v-card>

      <v-divider />

      <!--전체 가격 필드-->
      <v-card>
        <v-card-title class="text-h4">
          <v-btn v-model="dollar" icon @click="dollar = !dollar">
            <v-icon v-if="dollar">mdi-currency-usd</v-icon>
            <v-icon v-else>mdi-currency-krw</v-icon>
          </v-btn>
          <v-spacer />
          {{ commas(dollar ? totalPrice : (totalPrice / exRate).toFixed(3)) * wordCount }}
          {{ dollar ? "원" : "$" }}
        </v-card-title>
        <v-card-title class="text-caption">
          <div>
            단위 가격(Unit Cost) * 글자 수(Words)
            <br />단위 가격(Unit Cost) = 언어 종류(Language type) * 분야(Field)
          </div>
          <v-spacer />
          단위 가격(Unit Cost) :
          {{ commas(dollar ? totalPrice : (totalPrice / exRate).toFixed(3)) }}
          {{ dollar ? "원" : "$" }}
        </v-card-title>
        <v-divider />
      </v-card>
      <v-card-title v-if="language === '한국어'">
        <v-spacer />
        <v-subheader v-text="'※본 견적은 정확하지 않을 수 있으며, 파일 내의 이미지 유무와 관련하여 추가 요금이 부과될 수 있습니다.'" />
      </v-card-title>
      <v-card-title v-else-if="language === '영어'">
        <v-spacer />
        <v-subheader
          v-text="'※This estimate may not be accurate and there may be an additional charge for the presence or absence of images in the file.'"
        />
      </v-card-title>
    </v-card>

    <!--의뢰 페이지-->
    <v-card v-else-if="sels === 1" outlined elevation="10">
      <!--한국어 필드-->
      <v-container v-if="language === '한국어'">
        <v-form ref="form" v-model="valid" @submit.prevent>
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
          <div class="request__wrapper">
            <div class="request__content" style="display: flex; justify-content: space-between">
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
                  :items="req_lang[0] === '한국어' ? languages : ['한국어']"
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
                  ref="file0"
                  v-model="file[0]"
                  class="file_selector"
                  prepend-icon="mdi-content-save"
                  label="파일 첨부"
                  small-chips
                  multiple
                  dense
                  :rules="[(v) => !!v || '번역 파일을 첨부해주세요.']"
                  :accept="acceptFiles"
                  :disabled="req_lang[0] === ''"
                  @change="onChangeFile(0, $event)"
                  @click:clear="onClearFile(0)"
                />
              </div>
            </div>
            <div class="request__content" style="display: flex; justify-content: space-between">
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
                  :items="req_lang[1] === '한국어' ? languages : ['한국어']"
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
                  ref="file1"
                  v-model.lazy="file[1]"
                  class="file_selector"
                  prepend-icon="mdi-content-save"
                  label="파일 첨부"
                  small-chips
                  multiple
                  dense
                  :accept="acceptFiles"
                  :disabled="req_lang[1] === ''"
                  @change="onChangeFile(1, $event)"
                  @click:clear="onClearFile(1)"
                />
              </div>
            </div>
            <div class="request__content" style="display: flex; justify-content: space-between">
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
                  :items="req_lang[2] === '한국어' ? languages : ['한국어']"
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
                  ref="file2"
                  v-model.lazy="file[2]"
                  class="file_selector"
                  prepend-icon="mdi-content-save"
                  label="파일 첨부"
                  small-chips
                  multiple
                  dense
                  :accept="acceptFiles"
                  :disabled="req_lang[2] === ''"
                  @change="onChangeFile(2, $event)"
                  @click:clear="onClearFile(2)"
                />
              </div>
            </div>
            <div class="request__content" style="display: flex; justify-content: space-between">
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
                  :items="req_lang[3] === '한국어' ? languages : ['한국어']"
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
                  ref="file3"
                  v-model.lazy="file[3]"
                  class="file_selector"
                  prepend-icon="mdi-content-save"
                  label="파일 첨부"
                  small-chips
                  multiple
                  dense
                  :accept="acceptFiles"
                  :disabled="req_lang[3] === ''"
                  @change="onChangeFile(3, $event)"
                  @click:clear="onClearFile(3)"
                />
              </div>
            </div>
            <div class="request__content" style="display: flex; justify-content: space-between">
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
                  :items="req_lang[4] === '한국어' ? languages : ['한국어']"
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
                  ref="file4"
                  v-model.lazy="file[4]"
                  class="file_selector"
                  prepend-icon="mdi-content-save"
                  label="파일 첨부"
                  small-chips
                  multiple
                  dense
                  :accept="acceptFiles"
                  :disabled="req_lang[4] === ''"
                  @change="onChangeFile(4, $event)"
                  @click:clear="onClearFile(4)"
                />
              </div>
            </div>
          </div>

          <div class="request__mobile">
            <v-select
              v-model="req_lang[0]"
              :items="languages"
              label="번역이 필요한 언어"
              prepend-icon="mdi-book-sync"
              hide-details
              outlined
              dense
            />
            <v-icon>mdi-arrow-down-bold</v-icon>
            <v-select
              v-model="grant_lang[0]"
              :items="req_lang[0] === '한국어' ? languages : ['한국어']"
              label="번역할 언어"
              prepend-icon="mdi-book-check"
              outlined
              dense
            />
            <v-select
              v-model="req_field[0]"
              :items="field"
              label="요청분야"
              prepend-icon="mdi-shape"
              outlined
              dense
            />
            <v-file-input
              v-model.lazy="file[0]"
              prepend-icon="mdi-content-save"
              label="파일 첨부"
              multiple
              small-chips
              dense
              :disabled="req_lang[0] === ''"
              :accept="acceptFiles"
              @change="onChangeFile(0, $event)"
              @click:clear="onClearFile(0)"
            />
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

          <client-only>
            <vue-html2pdf
              :show-layout="false"
              :float-layout="true"
              :enable-download="false"
              :preview-modal="false"
              filename="번역 의뢰 견적서"
              :paginate-elements-by-height="1100"
              :pdf-quality="2"
              pdf-format="a4"
              pdf-orientation="portrait"
              pdf-content-width="800px"
              :manual-pagination="false"
              @progress="onProgress($event)"
              @startPagination="startPagination()"
              @hasPaginated="hasPaginated()"
              @beforeDownload="beforeDownload($event)"
              @hasDownloaded="hasDownloaded($event)"
              ref="html2Pdf"
            >
              <section slot="pdf-content">
                <div class="outer-pdf">
                  <div class="water-mark">
                    <span>DMTLABS</span>
                  </div>
                  <h1 class="title">번역 견적서</h1>
                  <section class="pdf-table">
                    <table class="tg" style="undefined;table-layout: fixed; width: 550px">
                      <colgroup>
                        <col style="width: 79px" />
                        <col style="width: 164px" />
                        <col style="width: 307px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <td class="tg-z0uw" rowspan="4">수임자</td>
                          <td class="tg-c3ow">대표</td>
                          <td class="tg-c3ow">김 운</td>
                        </tr>
                        <tr>
                          <td class="tg-c3ow">회사</td>
                          <td class="tg-c3ow">DMTLABS</td>
                        </tr>
                        <tr>
                          <td class="tg-c3ow">주소</td>
                          <td class="tg-c3ow">
                            <span
                              style="font-weight:400;font-style:normal"
                            >(04386) 서울시 용산구 한강대로40길 18 404호 대한민국 (한강로2가 144-2 다이빌딩)</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="tg-c3ow">연락처</td>
                          <td class="tg-c3ow">02-794-5333</td>
                        </tr>
                      </thead>
                    </table>
                  </section>

                  <section class="pdf-table">
                    <table class="tg" style="undefined;table-layout: fixed; width: 550px">
                      <colgroup>
                        <col style="width: 79px" />
                        <col style="width: 164px" />
                        <col style="width: 307px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <td class="tg-z0uw" rowspan="4">의뢰자</td>
                          <td class="tg-c3ow">성 함</td>
                          <td class="tg-c3ow">{{name}}</td>
                        </tr>
                        <tr>
                          <td class="tg-c3ow">회사</td>
                          <td class="tg-c3ow">{{company}}</td>
                        </tr>
                        <tr>
                          <td class="tg-c3ow">연락처</td>
                          <td class="tg-c3ow">
                            <span
                              style="font-weight:400;font-style:normal"
                            >{{phone.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3")}}</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="tg-c3ow">요청 날짜</td>
                          <td class="tg-c3ow">{{date}}</td>
                        </tr>
                      </thead>
                    </table>
                  </section>

                  <section class="pdf-table">
                    <table class="tg" style="undefined;table-layout: fixed; width: 641px">
                      <colgroup>
                        <col style="width: 185px" />
                        <col style="width: 96px" />
                        <col style="width: 286px" />
                        <col style="width: 74px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th class="tg-c3ow">번역 정보</th>
                          <th class="tg-c3ow">번역 분야</th>
                          <th class="tg-c3ow">가격</th>
                          <th class="tg-c3ow">기타</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            class="tg-c3ow"
                          >{{languages[this.languages.indexOf(this.req_lang[0])]}} -&gt; {{languages[this.languages.indexOf(this.grant_lang[0])]}}</td>
                          <td class="tg-c3ow">{{req_field[0]}}</td>
                          <td class="tg-c3ow">{{price[0]}} 원</td>
                          <td class="tg-c3ow"></td>
                        </tr>
                        <tr>
                          <td
                            class="tg-c3ow"
                          >{{languages[this.languages.indexOf(this.req_lang[1])]}} -&gt; {{languages[this.languages.indexOf(this.grant_lang[1])]}}</td>
                          <td class="tg-c3ow">{{req_field[1]}}</td>
                          <td class="tg-c3ow">{{price[1]}} 원</td>
                          <td class="tg-c3ow"></td>
                        </tr>
                        <tr>
                          <td
                            class="tg-c3ow"
                          >{{languages[this.languages.indexOf(this.req_lang[2])]}} -&gt; {{languages[this.languages.indexOf(this.grant_lang[2])]}}</td>
                          <td class="tg-c3ow">{{req_field[2]}}</td>
                          <td class="tg-c3ow">{{price[2]}} 원</td>
                          <td class="tg-c3ow"></td>
                        </tr>
                        <tr>
                          <td
                            class="tg-c3ow"
                          >{{languages[this.languages.indexOf(this.req_lang[3])]}} -&gt; {{languages[this.languages.indexOf(this.grant_lang[3])]}}</td>
                          <td class="tg-c3ow">{{req_field[3]}}</td>
                          <td class="tg-c3ow">{{price[3]}} 원</td>
                          <td class="tg-c3ow"></td>
                        </tr>
                        <tr>
                          <td class="tg-ngei" colspan="2">총 합계</td>
                          <td
                            class="tg-ngei"
                            colspan="2"
                          >{{price[0] + price[1] + price[2] + price[3] + price[4]}} 원</td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                </div>
              </section>
            </vue-html2pdf>
          </client-only>

          <div class="request__btn">
            <v-spacer class="spacer" />
            <v-btn
              v-if="checkSendFile"
              depressed
              color="#0d6efd"
              dark
              large
              style="margin: 10px"
              @click="generatePdf()"
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
                  <v-btn color="success" text type="submit" @click="onSubmitForm">확인</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-form>
      </v-container>

      <!--영어 필드-->
      <v-container v-else-if="language === '영어'">
        <v-form ref="form" v-model="valid" @submit.prevent>
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
          <div class="request__wrapper">
            <div class="request__content" style="display: flex; justify-content: space-between">
              <div>
                <v-select
                  v-model="req_lang[0]"
                  class="selector"
                  :items="e_languages"
                  label="Need translation"
                  prepend-icon="mdi-book-sync"
                  outlined
                  dense
                  :rules="[(v) => !!v || 'Choose the language to be translated.']"
                />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select
                  v-model="grant_lang[0]"
                  class="selector"
                  :items="req_lang[0] === 'Korean' ? e_languages : ['Korean']"
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
                  dense
                  :rules="[(v) => !!v || 'Please attach the File.']"
                  @change="onChangeFile(0, $event)"
                  @click:clear="onClearFile(0)"
                />
              </div>
            </div>
            <div class="request__content" style="display: flex; justify-content: space-between">
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
                  :items="req_lang[1] === 'Korean' ? e_languages : ['Korean']"
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
                  dense
                  @change="onChangeFile(1, $event)"
                  @click:clear="onClearFile(1)"
                />
              </div>
            </div>
            <div class="request__content" style="display: flex; justify-content: space-between">
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
                  :items="req_lang[2] === 'Korean' ? e_languages : ['Korean']"
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
                  dense
                  @change="onChangeFile(2, $event)"
                  @click:clear="onClearFile(2)"
                />
              </div>
            </div>
            <div class="request__content" style="display: flex; justify-content: space-between">
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
                  :items="req_lang[3] === 'Korean' ? e_languages : ['Korean']"
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
                  dense
                  @change="onChangeFile(3, $event)"
                  @click:clear="onClearFile(3)"
                />
              </div>
            </div>
            <div class="request__content" style="display: flex; justify-content: space-between">
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
                  :items="req_lang[4] === 'Korean' ? e_languages : ['Korean']"
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
                  dense
                  @change="onChangeFile(4, $event)"
                  @click:clear="onClearFile(4)"
                />
              </div>
            </div>
          </div>

          <div class="request__mobile">
            <div>
              <v-select
                v-model="req_lang[0]"
                :items="e_languages"
                label="Need Translation"
                prepend-icon="mdi-book-sync"
                outlined
                dense
              />
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
      
          <div class="request__btn">
            <v-spacer class="spacer" />
            <v-btn
              v-if="checkSendFile"
              depressed
              color="#0d6efd"
              dark
              large
              style="margin: 10px"
              @click="generatePdf()"
            >
              issuance of quotation
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
                  <v-btn color="success" text type="submit" @click="onSubmitForm">OK</v-btn>
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
.toolbar_class {
  border-bottom: 3px solid green;
}
.list_select {
  border: solid #013183 !important;
  color: #013183 !important;
}
.toggle_group {
  border: 1px solid #013183 !important;
}
.request__btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: auto;
  padding: 10px 0;
}
.request__mobile {
  display: none;
  flex-direction: column;
}
.tg {
  border-collapse: collapse;
  border-spacing: 0;
}
.tg td {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg th {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg .tg-34fe {
  background-color: #c0c0c0;
  border-color: inherit;
  text-align: center;
  vertical-align: top;
}
.tg .tg-baqh {
  text-align: center;
  vertical-align: top;
}
.tg .tg-c3ow {
  border-color: inherit;
  text-align: center;
  vertical-align: top;
}
.tg .tg-6qw1 {
  background-color: #c0c0c0;
  text-align: center;
  vertical-align: top;
}
.tg .tg-ngei {
  background-color: #ffcb2f;
  border-color: inherit;
  text-align: center;
  vertical-align: top;
}

.title {
  font-size: 30px;
  font-weight: 600;
  text-align: center;
}

.pdf-table {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
}

.water-mark {
  position: absolute;
  z-index: 0;
  top: 450px;
  left: 350px;
}

.water-mark > span {
  font-size: 50px;
  font-weight: 800;
  color: blue;
  opacity: 0.3;
  transform: rotate(45deg);
}

.outer-pdf {
  padding-top: 50px;
}

@media screen and (max-width: 900px) {
  .request__wrapper {
    display: none;
  }
  .request__mobile {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 500px) {
  .request__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .spacer {
    display: none;
  }
  .request__wrapper {
    display: none;
  }
  .request__mobile {
    display: flex;
    flex-direction: column;
  }
}
</style>

<script lang="js">
import { mapState } from 'vuex';
import PdfContent from '@/components/PdfContent'

export default {
  layout: 'TextLayout',
  data: () => ({
    hideDetails: true,
    valid: false,
    menu: false,
    name: '',
    phone: '',
    email: '',
    company: '',
    second_phone: '',
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    req_field: ['', '', '', '', ''],
    req_lang: ['', '', '', '', ''],
    grant_lang: ['', '', '', '', ''],
    price: [ 0, 0, 0, 0, 0 ],
    unit_price: [0, 0, 0, 0, 0],
    file: [],
    options: '',
    dialog: false,
    sels: 0,
    selectLanguage1: 0,
    selectLanguage2: 0,
    selectField: 0,
    e_selectLanguage1: 0,
    e_selectLanguage2: 0,
    e_selectField: 0,
    dollar: false,
    wordCount: '',
    acceptFiles: '.txt,.pdf,.docx',
    checkSendFile : false,
  }),
  asyncData({ store }) {
    store.commit('requests/setExcost', 0);
  },

  computed: {
    loginState() {
        return this.$store.state.users.loginState;
    },
    language() {
      return this.$store.state.manager.language;
    },
    languages() {
      return this.$LANGUAGES_KO;
    },
    e_languages() {
      return this.$LANGUAGES_EN;
    },
    field() {
      return this.$FIELDS_KO;
    },
    e_field() {
      return this.$FIELDS_EN;
    },
    totalPrice() {
      return this.$store.state.requests.ex_cost;
    },
    exRate() {
      return this.$DOLLAR;
    },
  },
  watch: {
    selectLanguage1() {
      this.calcCost();
    },
    selectLanguage2() {
      this.calcCost();
    },
    selectField() {
      this.calcCost();
    },
    req_lang: {
      handler() {
        for(let i = 0; i < this.req_lang.length; i++) {
          if (this.req_lang[i] === '' || this.grant_lang[i] === '' || this.req_field[i] === '')
            continue;
          this.unit_price[i] = this.requestCost(this.req_lang[i], this.grant_lang[i], this.req_field[i]);
        }
      },
      deep: true,
    },
    grant_lang: {
      handler() {
        for(let i = 0; i < this.req_lang.length; i++) {
          if (this.req_lang[i] === '' || this.grant_lang[i] === '' || this.req_field[i] === '')
            continue;
          this.unit_price[i] = this.requestCost(this.req_lang[i], this.grant_lang[i], this.req_field[i]);
        }
      },
      deep: true,
    },
    req_field: {
      handler() {
        for(let i = 0; i < this.req_lang.length; i++) {
          if (this.req_lang[i] === '' || this.grant_lang[i] === '' || this.req_field[i] === '')
            continue;
          this.unit_price[i] = this.requestCost(this.req_lang[i], this.grant_lang[i], this.req_field[i]);
        }
      },
      deep: true,
    },
  },
  components : {
    PdfContent
  },

  methods: {
    generatePdf(){
      console.log("Pdf 파일 로딩");
      this.$refs.html2Pdf.generatePdf();
    },

    onProgress(x) {
      console.log(x);
    },

    hasGenerated(x) {
      console.log(x);
    },
    hasDownloaded() {},
    startPagination() {},
    hasPaginated() {},

    async beforeDownload({ html2pdf, options, pdfContent }) {
      await html2pdf()
        .set(options)
        .from(pdfContent)
        .toPdf()
        .get("pdf")
        .then(pdf => {
          this.calcCost();
          const totalPages = pdf.internal.getNumberOfPages();
          for (let i = 1; i <= totalPages; i++) {
            pdf.setPage(i);
            pdf.setFontSize(10);
            pdf.setTextColor(150);
            pdf.text("Page " + i + " of " + totalPages, pdf.internal.pageSize.getWidth() * 0.45, pdf.internal.pageSize.getHeight() - 0.3);
          }
        })
        .save();
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
                    trans_state: '번역 준비중',
                    fileInfo: this.$store.state.requests.fileInfo,
                });
               
                if (submitResponse.statusText === 'OK') {
                  this.$manage.showMessage({ message: '의뢰 성공', color: 'green lighten-2' });
                  console.log('의뢰');
                  this.$router.push({ path: '/text/textmain'});
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
    async onChangeFile(index, e) {
      console.log("1")
        const fileFormData = new FormData();
        if (e != null) {
          console.log("2")
          if (e.length === 0) {
            e = null;
            return;
          }
          [].forEach.call(e, (f) => {
            if (
              f.type === 'application/pdf'  ||  // .pdf
              f.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || // .xlsx
              f.type === 'text/plain' ||  // .txt
              f.type === 'application/haansofthwp' || // .hwp
              f.name.substring(f.name.lastIndexOf(".") + 1) === 'pptx' // .pptx
            ) {
              fileFormData.append('fileKey', f);
            }
            else {
              this.$manage.showMessage({ 
                message: `지원하지 않는 형식의 파일이 존재합니다. 해당 파일 형식 : [.${f.type === '' ? f.name.substring(f.name.lastIndexOf(".") + 1) : f.type}]`,
                color : 'orange darken-1' 
              });
              this.file[index] = null;
              e = null;
            }
          });
          try {
            console.log("3")
            this.$nuxt.$loading.start();
            await this.$store.dispatch('requests/uploadFile', { index: index, file: fileFormData });
            const res = await this.$store.dispatch('requests/extracting', { lang: this.req_lang[index], file: fileFormData, unitcost: this.unit_price[index] });
            console.log("test" + res)
            if (res != undefined) {
              console.log("4")
              this.$store.dispatch('requests/setFileInfo', { index: index, info: res });
              this.price[index] = this.$store.state.requests.fileInfo[index].cost;
              this.checkSendFile = true;
            } else {
              console.log("5")
            }
            this.$nuxt.$loading.finish();
            console.log("6")
          } catch(err) {
            console.log(err);
          }
        } else {
            console.log("e is null!!!");
        }
    },
    onClearFile(index) {
      this.checkSendFile = false;
        this.$store.dispatch('requests/removeFile', index);
    },
    commas(value) {
      if (typeof(value) === 'number')
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      else {
        return value;
      }
    },
    loginCheck() {
      if (!this.loginState) {
        this.$refs.toggle._data.internalLazyValue = 0;
        this.sels = 0;
        this.$manage.showMessage({ message: '로그인이 필요한 작업입니다.', color: 'red'});
      }
    },
    calcCost() {
      if (this.language === '한국어')
        this.$CALC_COST(this.languages[this.selectLanguage1], this.languages[this.selectLanguage2], this.field[this.selectField]);
      else 
        this.$CALC_COST(this.e_languages[this.selectLanguage1], this.e_languages[this.selectLanguage2], this.e_field[this.selectField]);
    },
    requestCost(selLang1, selLang2, selField) {
      this.$CALC_COST(selLang1, selLang2, selField);
      return this.$store.state.requests.ex_cost;
    },
  }
}
</script>