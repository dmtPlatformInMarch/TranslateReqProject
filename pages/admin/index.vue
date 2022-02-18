<template>
  <v-container style="dispaly: flex; flex-direction: column; margin: auto">
    <v-container style="width: 80vw; height: auto" fluid>
      <v-toolbar elevation="0">
        <v-spacer />
        <v-btn
          rounded
          depressed
          color="success"
          @click="
            tmp.push({
              name: '새로 추가된 카드',
              field: ['단순 번역', '', '', '', ''],
              req_lang: ['한국어', '', '', '', ''],
              grant_lang: ['중국어', '', '', '', ''],
            })
          "
          >추가</v-btn
        >
      </v-toolbar>
      <v-row dense>
        <v-col v-for="(item, index) in tmp" :key="index" :cols="3">
          <v-card style="height: 55vh" elevation="10">
            <v-card-title style="background: #1a237e; color: white"
              >의뢰
              <v-spacer />
              <v-btn icon dark @click="tmp.splice(index, 1)">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-container>
              <v-card flat>
                <v-card-subtitle> 의뢰분야 </v-card-subtitle>
                <v-chip-group column>
                  <div v-for="i in 5" :key="i">
                    <template>
                      <v-chip v-if="item.field[i - 1] != ''">{{
                        item.field[i - 1]
                      }}</v-chip>
                    </template>
                  </div>
                </v-chip-group>
              </v-card>
            </v-container>
            <v-divider />
            <v-container>
              <v-card flat>
                <v-card-subtitle>의뢰언어</v-card-subtitle>
                <div v-for="i in 5" :key="i" style="display: flex">
                  <template
                    v-if="
                      item.req_lang[i - 1] != '' || item.grant_lang[i - 1] != ''
                    "
                  >
                    <v-chip>{{ item.req_lang[i - 1] }}</v-chip>
                    <v-icon>mdi-arrow-right-bold</v-icon>
                    <v-chip>{{ item.grant_lang[i - 1] }}</v-chip>
                    <v-spacer />
                    <v-btn icon><v-icon>mdi-file</v-icon></v-btn>
                  </template>
                </div>
              </v-card>
            </v-container>

            <v-toolbar class="bottom" color="grey lighten-1" flat>
              <v-toolbar-title v-text="item.name" />
              <v-spacer />
              <v-btn rounded color="blue-grey lighten-4"> 조회 </v-btn>
            </v-toolbar>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>
.bottom {
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>

<script lang="js">
export default {
    layout: 'admin_layout',
    data() {
      return {
        tmp: [
        { name: '123Company', field: ['단순 번역', '논문', '자막', '', ''], req_lang: ['한국어', '중국어', '영어', '한국어', '영어'], grant_lang: ['중국어', '일본어', '한국어', '영어', '러시아어'] },
        { name: '(주)123주식회사', field: ['논문', '', '', '', ''], req_lang: ['한국어', '중국어', '', '', ''], grant_lang: ['중국어', '일본어', '', '', ''] },
        { name: '123영화사', field: ['자막', '', '', '', ''], req_lang: ['한국어', '아랍어', '', '', ''], grant_lang: ['중국어', '러시아어', '', '', ''] },
        { name: '123출판사', field: ['자막', '', '', '', ''], req_lang: ['한국어', '', '', '', ''], grant_lang: ['중국어', '', '', '', ''] },
        { name: '123출판사', field: ['자막', '', '', '', ''], req_lang: ['한국어', '', '', '', ''], grant_lang: ['영어', '', '', '', ''] },
        { name: '123출판사', field: ['자막', '', '', '', ''], req_lang: ['한국어', '', '', '', ''], grant_lang: ['영어', '', '', '', ''] },
        { name: '123출판사', field: ['자막', '', '', '', ''], req_lang: ['한국어', '', '', '', ''], grant_lang: ['영어', '', '', '', ''] },
        { name: '123출판사', field: ['자막', '', '', '', ''], req_lang: ['한국어', '', '', '', ''], grant_lang: ['영어', '', '', '', ''] },
        { name: '123출판사', field: ['자막', '', '', '', ''], req_lang: ['한국어', '', '', '', ''], grant_lang: ['영어', '', '', '', ''] },
        { name: '123출판사', field: ['자막', '', '', '', ''], req_lang: ['한국어', '', '', '', ''], grant_lang: ['영어', '', '', '', ''] },
        { name: '123출판사', field: ['자막', '', '', '', ''], req_lang: ['한국어', '', '', '', ''], grant_lang: ['영어', '', '', '', ''] },
      ],
      }
    }
}
</script>