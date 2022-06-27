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
                <v-text-field v-model="searchName" class="search_input" dense full-width label="유저(User)" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select v-model="searchField" class="search_input" :items="ko_field" dense full-width clearable label="분야(Field)" />
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
                    <v-chip v-if="i.field != ''">{{ i.field }}</v-chip>
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
                        (isDev ? 'http://localhost:3085' : 'https://api.dmtlabs.kr') +
                        '/admin/file/download/' +
                        i.src.substring(i.src.lastIndexOf('/') + 1)
                      "
                      download
                    >
                      <v-icon>mdi-file-download</v-icon>
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
        <v-card>
          <v-toolbar dark color="#013183">
            <v-btn icon dark @click="show = false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>
              {{ inquery.name }} 님의 의뢰
            </v-toolbar-title>
          </v-toolbar>
          <div class="overflow-y-auto">
            <v-card v-for="item in inquery.Files" :key="item.id">
              <v-card-title>
                {{ item.src.substring(item.src.lastIndexOf('/') + 1) }}
                <v-spacer />
                <v-btn
                  icon
                  :href="
                    (isDev ? 'http://localhost:3085' : 'https://api.dmtlabs.kr') +
                    '/admin/file/download/' +
                    item.src.substring(item.src.lastIndexOf('/') + 1)
                  "
                  download
                >
                  <v-icon>mdi-file-download</v-icon>
                </v-btn>
              </v-card-title>
              <v-row class="text-center align-center" no-gutters>
                <v-col cols="12" md="4">
                  <div style="border: 1px solid black">
                    <h3>분류</h3>
                    <v-divider />
                    <v-container>
                      {{ item.field }}
                    </v-container>
                  </div>
                </v-col>
                <v-col cols="12" md="4">
                  <div style="border: 1px solid black">
                    <h3>요청 언어</h3>
                    <v-divider />
                    <v-container>
                      {{ item.req_lang }}
                    </v-container>
                  </div>
                </v-col>
                <v-col cols="12" md="4">
                  <div style="border: 1px solid black">
                    <h3>번역 언어</h3>
                    <v-divider />
                    <v-container>
                      {{ item.grant_lang }}
                    </v-container>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </div>

          <v-row class="text-center align-center bottom" no-gutters>
            <v-col cols="12" md="12">
              <div style="border: 1px solid black">
                <h3>현재 상태</h3>
                <v-divider />
                <v-container>
                  <v-btn 
                    :color="stateColor(inquery.trans_state)"
                    dark
                    rounded
                    readonly
                    depressed
                  >
                    {{ inquery.trans_state }}
                    <v-icon right>{{ stateIcon(inquery.trans_state) }}</v-icon>
                  </v-btn>
                </v-container>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <v-container>
                <v-btn :color="stateColor('번역 준비중')" :disabled="inquery.trans_state === '번역 준비중'" :dark="inquery.trans_state != '번역 준비중'" rounded block @click="setState('번역 준비중')">
                  번역 준비중
                  <v-icon right>{{ stateIcon('번역 준비중') }}</v-icon>
                </v-btn>
              </v-container>
            </v-col>
            <v-col cols="12" md="3">
              <v-container>
                <v-btn :color="stateColor('번역 시작')" :disabled="inquery.trans_state === '번역 시작'" :dark="inquery.trans_state != '번역 시작'" rounded block @click="setState('번역 시작')">
                  번역 시작
                  <v-icon right>{{ stateIcon('번역 시작') }}</v-icon>
                </v-btn>
              </v-container>
            </v-col>
            <v-col cols="12" md="3">
              <v-container>
                <v-btn :color="stateColor('번역 검수중')" :disabled="inquery.trans_state === '번역 검수중'" :dark="inquery.trans_state != '번역 검수중'" rounded block @click="setState('번역 검수중')">
                  번역 검수중
                  <v-icon right>{{ stateIcon('번역 검수중') }}</v-icon>
                </v-btn>
              </v-container>
            </v-col>
            <v-col cols="12" md="3">
              <v-container>
                <v-btn :color="stateColor('번역 완료')" :disabled="inquery.trans_state === '번역 완료'" :dark="inquery.trans_state != '번역 완료'" rounded block @click="setState('번역 완료')">
                  번역 완료
                  <v-icon right>{{ stateIcon('번역 완료') }}</v-icon>
                </v-btn>
              </v-container>
            </v-col>
          </v-row>
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
    layout: 'AdminLayout',
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
        stateSelect: '',
      }
    },
    fetch({ store }) {
        return store.dispatch('admin/loadReq');
    },
    mounted() {
      this.list = this.$store.state.admin.allRequest;
    },
    computed: {
      ko_field() {
        return this.$FIELDS_KO;
      }
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
    methods: {
      reload() {
        this.$store.dispatch('admin/reloadReq');
      },
      cancelRequest(id) {
        this.$store.dispatch('admin/deleteRequest', id);
        this.dialog = false;
      },
      setinq(item) {
        this.show = true;
        this.inquery = item;
      },
      async setState(st) {
        try {
          await this.$store.dispatch('admin/setState', {
            request: this.inquery,
            state: st,
          });
          
          this.list = this.$store.state.admin.allRequest;
          this.inquery = this.list.find(item => item.id === this.inquery.id);
          // this.inquery를 바뀐걸로 해줘야 함.
          this.$manage.showMessage({ message: `번역 상태 [ ${st} ]로 변경`, color: 'success' });
        } catch (err) {

        }
      },
      stateIcon(state) {
        if (state === '번역 준비중') return "mdi-briefcase-clock";
        else if (state === '번역 시작') return "mdi-briefcase-edit";
        else if (state === '번역 검수중') return "mdi-briefcase-search";
        else if (state === '번역 완료') return "mdi-briefcase-check";
        else return "mdi-briefcase-off";
      },
      stateColor(state) {
        if (state === '번역 준비중') return "orange";
        else if (state === '번역 시작') return "primary";
        else if (state === '번역 검수중') return "indigo";
        else if (state === '번역 완료') return "success";
        else return "grey";
      }
    }
}
</script>