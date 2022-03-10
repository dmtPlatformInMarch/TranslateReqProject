<template>
  <v-container>
    <!--선택 토글-->
    <v-col>
      <v-btn-toggle class="d-flex align-center justify-center" mandatory group style="width: 100%" v-model="sels" ref="toggle" @change="loginCheck">
        <v-btn color="primary" text width="50%" style="margin: 0; padding: 0">
          {{ language === "한국어" ? "견적" : "Estimate" }}
        </v-btn>
        <v-btn color="primary" text width="50%" style="margin: 0; padding: 0">
          {{ language === "한국어" ? "의뢰" : "Request" }}
        </v-btn>
      </v-btn-toggle>
    </v-col>

    <!--견적 페이지-->
    <v-card outlined elevation="10" v-if="sels === 0">
      <!--한국어 필드-->
      <v-container v-if="language === '한국어'">
        <v-row>
          <v-col>
            <v-toolbar class="toolbar_class" elevation="0">
              <v-toolbar-title class="font-weight-bold"> 원본 언어 </v-toolbar-title>
            </v-toolbar>
            <v-list class="overflow-y-auto">
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
              <v-toolbar-title class="font-weight-bold"> 번역 언어 </v-toolbar-title>
            </v-toolbar>
            <v-list class="overflow-y-auto">
              <v-list-item-group v-model="selectLanguage2" mandatory>
                <v-list-item v-for="(lang, i) in selectLanguage1 == 0 ? languages : ['한국어']" :key="i" active-class="list_select">
                  <v-list-item-title>{{ lang }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col>
            <v-toolbar class="toolbar_class" elevation="0">
              <v-toolbar-title class="font-weight-bold"> 요청 분야 </v-toolbar-title>
            </v-toolbar>
            <v-list class="overflow-y-auto">
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
            <v-list class="overflow-y-auto">
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
            <v-list class="overflow-y-auto">
              <v-list-item-group v-model="selectLanguage2" mandatory>
                <v-list-item v-for="(lang, i) in selectLanguage1 == 0 ? e_languages : ['Korean']" :key="i" active-class="list_select">
                  <v-list-item-title>{{ lang }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col>
            <v-toolbar color="primary">
              <v-toolbar-title>Request Field</v-toolbar-title>
            </v-toolbar>
            <v-list class="overflow-y-auto">
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
          <v-text-field v-model="wordCount" type="number" hide-spin-buttons prefix="글자" reverse dense />
        </v-card-title>
        <v-card-subtitle class="text-caption">
          중국어/일본어 = 1글자 당 <br />
          그 외 = 1단어 당
        </v-card-subtitle>
        <v-spacer />
      </v-card>
      <!--영어-->
      <v-card v-else-if="language === '영어'">
        <v-card-title class="text-h4">
          Words(Characters)
          <v-spacer />
          <v-text-field v-model="wordCount" type="number" hide-spin-buttons prefix="words" reverse dense />
        </v-card-title>
        <v-card-subtitle class="text-caption">
          Chinese/Japanese = per letter <br />
          Other = per word
        </v-card-subtitle>
        <v-spacer />
      </v-card>

      <v-divider />

      <!--전체 가격 필드-->
      <v-card>
        <v-card-title class="text-h4">
          <v-btn icon v-model="dollar" @click="dollar = !dollar">
            <v-icon v-if="dollar">mdi-currency-usd</v-icon>
            <v-icon v-else>mdi-currency-krw</v-icon>
          </v-btn>
          <v-spacer />
          {{ commas(dollar ? totalPrice : (totalPrice / exRate).toFixed(3)) * wordCount }}
          {{ dollar ? "원" : "$" }}
        </v-card-title>
        <v-card-title class="text-caption">
          <div>
            단위 가격(Unit Cost) * 글자 수(Words) <br />
            단위 가격(Unit Cost) = 언어 종류(Language type) * 분야(Field)
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
        <v-subheader v-text="'※This estimate may not be accurate and there may be an additional charge for the presence or absence of images in the file.'" />
      </v-card-title>
    </v-card>

    <!--의뢰 페이지-->
    <v-card outlined elevation="10" v-else-if="sels === 1">
      <!--한국어 필드-->
      <v-container v-if="language === '한국어'">
        <v-form ref="form" v-model="valid" @submit.prevent>
          <v-text-field v-model="name" type="text" label="*성명" prepend-inner-icon="mdi-account" :rules="[(v) => !!v || '이름을 입력하셔야 합니다.']" />
          <v-text-field v-model="phone" type="tel" label="*휴대전화" prepend-inner-icon="mdi-cellphone" :rules="[(v) => !!v || '전화번호를 입력하셔야 합니다.']" />
          <v-text-field v-model="email" type="email" label="*이메일" prepend-inner-icon="mdi-email" :rules="[(v) => !!v || '이메일을 입력하셔야 합니다.']" />
          <v-text-field v-model="company" type="text" label="*회사명" prepend-inner-icon="mdi-office-building" :rules="[(v) => !!v || '회사이름이나 소속명을 입력해주세요.']" />
          <v-text-field v-model="second_phone" type="tel" label="전화" prepend-inner-icon="mdi-deskphone" />
          <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" offset-y min-width="auto">
            <template #activator="{ on, attrs }">
              <v-text-field v-model="date" prepend-inner-icon="mdi-calendar" v-bind="attrs" readonly label="*희망 납품일" :rules="[(v) => !!v || '희망 납품일을 입력해주세요.']" v-on="on" />
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
                <v-select v-model="req_field[0]" class="selector" :items="field" label="요청분야" prepend-icon="mdi-shape" outlined dense />
              </div>
              <div>
                <v-file-input
                  v-model.lazy="file[0]"
                  ref="file0"
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
                <v-select v-model="req_lang[1]" class="selector" :items="languages" label="번역이 필요한 언어" prepend-icon="mdi-book-sync" outlined dense />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select v-model="grant_lang[1]" class="selector" :items="languages" label="번역할 언어" prepend-icon="mdi-book-check" outlined dense />
              </div>
              <div>
                <v-select v-model="req_field[1]" class="selector" :items="field" label="요청분야" prepend-icon="mdi-shape" outlined dense />
              </div>
              <div>
                <v-file-input
                  v-model.lazy="file[1]"
                  ref="file1"
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
                <v-select v-model="req_lang[2]" class="selector" :items="languages" label="번역이 필요한 언어" prepend-icon="mdi-book-sync" outlined dense />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select v-model="grant_lang[2]" class="selector" :items="languages" label="번역할 언어" prepend-icon="mdi-book-check" outlined dense />
              </div>
              <div>
                <v-select v-model="req_field[2]" class="selector" :items="field" label="요청분야" prepend-icon="mdi-shape" outlined dense />
              </div>
              <div>
                <v-file-input
                  v-model.lazy="file[2]"
                  ref="file2"
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
                <v-select v-model="req_lang[3]" class="selector" :items="languages" label="번역이 필요한 언어" prepend-icon="mdi-book-sync" outlined dense />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select v-model="grant_lang[3]" class="selector" :items="languages" label="번역할 언어" prepend-icon="mdi-book-check" outlined dense />
              </div>
              <div>
                <v-select v-model="req_field[3]" class="selector" :items="field" label="요청분야" prepend-icon="mdi-shape" outlined dense />
              </div>
              <div>
                <v-file-input
                  v-model.lazy="file[3]"
                  ref="file3"
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
                <v-select v-model="req_lang[4]" class="selector" :items="languages" label="번역이 필요한 언어" prepend-icon="mdi-book-sync" outlined dense />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select v-model="grant_lang[4]" class="selector" :items="languages" label="번역할 언어" prepend-icon="mdi-book-check" outlined dense />
              </div>
              <div>
                <v-select v-model="req_field[4]" class="selector" :items="field" label="요청분야" prepend-icon="mdi-shape" outlined dense />
              </div>
              <div>
                <v-file-input
                  v-model.lazy="file[4]"
                  ref="file4"
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
          <v-textarea v-model="options" outlined auto-grow clearable label="특이사항" prepend-inner-icon="mdi-star-cog" :hide-details="hideDetails" @input="onChangeTextarea" />
          <div style="display: flex; align-content: center; justify-content: flex-start; margin: auto; padding: 10px 0">
            <v-spacer />
            <v-btn depressed color="#0d6efd" dark large style="margin: 10px" @click="pdfTest">
              견적서 발급
              <v-icon right>mdi-file-download</v-icon>
            </v-btn>
            <v-btn depressed color="success" :disabled="!loginState" dark large style="margin: 10px" @click="dialog = true">
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
                  <v-btn color="success" text @click="onSubmitForm" type="submit">확인</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-form>
      </v-container>

      <!--영어 필드-->
      <v-container v-else-if="language === '영어'">
        <v-form ref="form" v-model="valid" @submit.prevent="">
          <v-text-field v-model="name" type="text" label="*Name" prepend-inner-icon="mdi-account" :rules="[(v) => !!v || 'You have to enter your name.']" />
          <v-text-field v-model="phone" type="tel" label="*Phone Number" prepend-inner-icon="mdi-cellphone" :rules="[(v) => !!v || 'You have to enter your phone number.']" />
          <v-text-field v-model="email" type="email" label="*Email" prepend-inner-icon="mdi-email" :rules="[(v) => !!v || 'You have to enter an email.']" />
          <v-text-field v-model="company" type="text" label="*Company" prepend-inner-icon="mdi-office-building" :rules="[(v) => !!v || 'Please enter name of your company.']" />
          <v-text-field v-model="second_phone" type="tel" label="Tel" prepend-inner-icon="mdi-deskphone" />
          <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" offset-y min-width="auto">
            <template #activator="{ on, attrs }">
              <v-text-field v-model="date" prepend-inner-icon="mdi-calendar" v-bind="attrs" readonly label="*Desired date" :rules="[(v) => !!v || 'Please enter the desired date.']" v-on="on" />
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
                  :items="e_languages"
                  label="To translate"
                  prepend-icon="mdi-book-check"
                  outlined
                  dense
                  :rules="[(v) => !!v || 'Choose a language to translate.']"
                />
              </div>
              <div>
                <v-select v-model="req_field[0]" class="selector" :items="e_field" label="Request field" prepend-icon="mdi-shape" outlined dense />
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
                <v-select v-model="req_lang[1]" class="selector" :items="e_languages" label="Need translation" prepend-icon="mdi-book-sync" outlined dense />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select v-model="grant_lang[1]" class="selector" :items="e_languages" label="To translate" prepend-icon="mdi-book-check" outlined dense />
              </div>
              <div>
                <v-select v-model="req_field[1]" class="selector" :items="e_field" label="Request field" prepend-icon="mdi-shape" outlined dense />
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
                <v-select v-model="req_lang[2]" class="selector" :items="e_languages" label="Need translation" prepend-icon="mdi-book-sync" outlined dense />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select v-model="grant_lang[2]" class="selector" :items="e_languages" label="To translate" prepend-icon="mdi-book-check" outlined dense />
              </div>
              <div>
                <v-select v-model="req_field[2]" class="selector" :items="e_field" label="Request field" prepend-icon="mdi-shape" outlined dense />
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
                <v-select v-model="req_lang[3]" class="selector" :items="e_languages" label="Need translation" prepend-icon="mdi-book-sync" outlined dense />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select v-model="grant_lang[3]" class="selector" :items="e_languages" label="To translate" prepend-icon="mdi-book-check" outlined dense />
              </div>
              <div>
                <v-select v-model="req_field[3]" class="selector" :items="e_field" label="Request field" prepend-icon="mdi-shape" outlined dense />
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
                <v-select v-model="req_lang[4]" class="selector" :items="e_languages" label="Need translation" prepend-icon="mdi-book-sync" outlined dense />
              </div>
              <div style="text-align: center">
                <v-icon>mdi-arrow-right-bold</v-icon>
              </div>
              <div>
                <v-select v-model="grant_lang[4]" class="selector" :items="e_languages" label="To translate" prepend-icon="mdi-book-check" outlined dense />
              </div>
              <div>
                <v-select v-model="req_field[4]" class="selector" :items="e_field" label="Request field" prepend-icon="mdi-shape" outlined dense />
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
          <v-textarea v-model="options" outlined auto-grow clearable label="Special Order" prepend-inner-icon="mdi-star-cog" :hide-details="hideDetails" @input="onChangeTextarea" />
          <div style="display: flex; align-content: center; justify-content: flex-start; margin: auto; padding: 10px 0">
            <v-spacer />
            <v-btn depressed color="#0d6efd" dark large style="margin: 10px" @click="pdfTest">
              Issuing Quotation
              <v-icon right>mdi-file-download</v-icon>
            </v-btn>
            <v-btn depressed color="success" :disabled="!loginState" dark large style="margin: 10px" @click="dialog = true">
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
                  <v-btn color="success" text @click="onSubmitForm" type="submit">OK</v-btn>
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
    name: '',
    phone: '',
    email: '',
    company: '',
    second_phone: '',
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    req_field: ['', '', '', '', ''],
    req_lang: ['', '', '', '', ''],
    grant_lang: ['', '', '', '', ''],
    price: [ , , , , ],
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
  }),
  computed: {
    ...mapState('requests', ['imagePaths']),
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
    }
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
    }
  },
  asyncData({ store }) {
    store.commit('requests/setExcost', 0);
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
          [].forEach.call(e, (f) => {
            if (f.type === 'application/pdf' || // .pdf
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
              console.log(this.$refs.file0);
              this.$refs.file0.hasInput = false;
              this.$refs.file0.initialValue = null;
              this.$refs.file0.lazyValue = null;
              e = null;
            }
          });
          this.$store.dispatch('requests/uploadFile', {index: index, file: fileFormData});
        } else {
            console.log("e is null!!!");
        }
    },
    onClearFile(index) {
        this.$store.dispatch('requests/removeFile', index);
    },
    commas(value) {
      if (typeof(value) === 'number')
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      else {
        console.log(typeof(value));
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
      this.$CALC_COST(this.languages[this.selectLanguage1], this.languages[this.selectLanguage2], this.field[this.selectField])
    }
  }
}
</script>