<template>
  <v-container style="dispaly: flex; flex-direction: column; margin: auto">
    <v-container style="width: 80vw; height: 100vh" fluid>
      <!--필터-->
      <v-toolbar elevation="0">
        <v-toolbar-title class="text-center">filter</v-toolbar-title>

        <v-spacer />

        <v-toolbar-items>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field class="search_input" dense full-width label="유저(User)" v-model="searchName" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select class="search_input" dense full-width clearable label="분야(Field)" v-model="searchField" :items="ko_field" />
              </v-col>
            </v-row>
          </v-container>
        </v-toolbar-items>
        
        <v-spacer />

        <v-btn rounded depressed color="success" @click="reload">Reload</v-btn>
      </v-toolbar>

      <!--의뢰 카드-->
      <v-card v-if="list.length === 0" class="d-flex align-center" style="height: 90%">
        <v-card-text class="text-center">
          의뢰 목록이 비어있습니다.
        </v-card-text>
      </v-card>
      <v-row v-else dense>
        <v-col v-for="item in list" :key="item.id" :cols="3">
          <v-card style="height: 55vh" elevation="10">
            <v-card-title style="background: #1a237e; color: white">
              의뢰 {{ item.id }}
              <v-spacer />
              <v-btn
                icon
                dark
                @click="
                  () => {
                    dialog = true;
                    file_id = item.id;
                  }
                "
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-container>
              <v-card flat>
                <v-card-subtitle> 의뢰분야 </v-card-subtitle>
                <v-chip-group column>
                  <div v-for="i in item.Files" :key="i.id">
                    <template>
                      <v-chip v-if="i.field != ''">{{ i.field }}</v-chip>
                    </template>
                  </div>
                </v-chip-group>
              </v-card>
            </v-container>
            <v-divider />
            <v-container>
              <v-card flat>
                <v-card-subtitle>의뢰언어</v-card-subtitle>
                <div v-for="i in item.Files" :key="i.id" style="display: flex">
                  <template v-if="i.req_lang != '' || i.grant_lang != ''">
                    <v-chip>{{ i.req_lang }}</v-chip>
                    <v-icon>mdi-arrow-right-bold</v-icon>
                    <v-chip>{{ i.grant_lang }}</v-chip>
                    <v-spacer />
                    <v-btn
                      icon
                      :href="
                        (isDev ? 'http://localhost:3085' : 'http://api.dmtlabs.kr') +
                        '/admin/file/download/' +
                        i.src.substring(i.src.lastIndexOf('/') + 1)
                      "
                      download
                    >
                      <v-icon>mdi-file</v-icon>
                    </v-btn>
                  </template>
                </div>
              </v-card>
            </v-container>

            <v-toolbar class="bottom" color="grey lighten-1" flat>
              <v-toolbar-title v-text="item.name" />
              <v-spacer />
              <v-btn rounded color="blue-grey lighten-4" @click="setinq(item)"> 조회 </v-btn>              
            </v-toolbar>
          </v-card>
        </v-col>
      </v-row>

      <v-dialog v-model="dialog" width="30vw">
        <v-card>
          <v-card-title>의뢰 취소</v-card-title>
          <v-card-text>[의뢰{{ file_id }}] 을(를) 취소하시겠습니까?</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text @click="dialog = false">취소</v-btn>
            <v-btn color="success" text @click="cancelRequest(file_id)">확인</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card class="overflow-y-auto">
          <v-toolbar dark color="#013183">
            <v-btn icon dark @click="show = false;">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>
              {{ inquery.name }} 님의 의뢰
            </v-toolbar-title>
          </v-toolbar>

          <v-card v-for="item in inquery.Files" :key="item.id">
            <v-card-title>
              {{ item.src.substring(item.src.lastIndexOf('/') + 1, item.src.length) }}
            </v-card-title>
            <v-row class="text-center align-center" no-gutters>
              <v-col cols="12" md="4">
                <div style="border: 1px solid black">
                  <h3>분류</h3>
                  <v-divider />
                  {{ item.field }}
                </div>
              </v-col>
              <v-col cols="12" md="4">
                <div style="border: 1px solid black">
                  <h3>요청 언어</h3>
                  <v-divider />
                  {{ item.req_lang }}
                </div>
              </v-col>
              <v-col cols="12" md="4">
                <div style="border: 1px solid black">
                  <h3>번역 언어</h3>
                  <v-divider />
                  {{ item.grant_lang }}
                </div>
              </v-col>

              <v-col cols="12" sm="2">
                <v-btn color="orange" dark depressed rounded block>
                  번역 준비중
                </v-btn>
              </v-col>
              <v-col cols="12" sm="1">
                <v-icon>
                  mdi-arrow-right-bold
                </v-icon>
              </v-col>
              <v-col cols="12" sm="2">
                <v-btn color="primary" dark depressed rounded block>
                  번역 시작
                </v-btn>
              </v-col>
              <v-col cols="12" sm="1">
                <v-icon>
                  mdi-arrow-right-bold
                </v-icon>
              </v-col>
              <v-col cols="12" sm="2">
                <v-btn color="indigo" dark depressed rounded block>
                  번역 검수중
                </v-btn>
              </v-col>
              <v-col cols="12" sm="1">
                <v-icon>
                  mdi-arrow-right-bold
                </v-icon>
              </v-col>
              <v-col cols="12" sm="2">
                <v-btn color="success" dark depressed rounded block>
                  번역 완료
                </v-btn>
              </v-col>
              <v-col>
                <v-btn large plain>
                  전송
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-card>
      </v-dialog>

    </v-container>
    <snack-bar />
  </v-container>
</template>

<style scoped>
.bottom {
  position: absolute;
  width: 100%;
  bottom: 0;
}
.search_input {
  width: 20vw;
}
</style>

<script lang="js">
import _ from 'lodash';
import SnackBar from '~/components/SnackBar';

export default {
    layout: 'adminLayout',
    components: {
      SnackBar,
    },
    data() {
      return {
        dialog: 0,
        file_id: 0,
        isDev: process.env.NODE_ENV.includes('dev'),
        show: false,
        inquery: '',
        searchName: '',
        searchField: '',
        list: [],
      }
    },
    fetch({ store }) {
        return store.dispatch('admin/loadReq');
    },
    mounted() {
      this.list = this.$store.state.admin.allRequest;
    },
    watch: {
      searchName: _.debounce(function (name) {
        if (name) {
          if (this.searchField) this.list = _.filter(this.list, obj => new RegExp(name, 'i').test(obj.name));
          else this.list = _.filter(this.$store.state.admin.allRequest, obj => new RegExp(name, 'i').test(obj.name));
        } else {
          if (this.searchField) this.list = _.filter(this.$store.state.admin.allRequest, item => item.Files.some((file) => file.field === field));
          else this.list = this.$store.state.admin.allRequest;
        }
      }, 500),
      searchField: _.debounce(function (field) {
        if (field) {
          if (this.searchName) this.list = _.filter(this.list, item => item.Files.some((file) => file.field === field));
          else this.list = _.filter(this.$store.state.admin.allRequest, item => item.Files.some((file) => file.field === field));
        } else {
          if (this.searchName) this.list = _.filter(this.$store.state.admin.allRequest, obj => new RegExp(this.searchName, 'i').test(obj.name));
          else this.list = this.$store.state.admin.allRequest;
        }
      }, 500),
    },
    computed: {
      ko_field() {
        return this.$FIELDS_KO;
      }
    },
    methods: {
      reload() {
        this.$store.dispatch('admin/loadReq');
        console.log('Reload');
      },
      cancelRequest(id) {
        this.$store.dispatch('admin/deleteRequest', id);
        this.dialog = false;
      },
      setinq(item) {
        this.show = true;
        this.inquery = item;
      },
    }
}
</script>