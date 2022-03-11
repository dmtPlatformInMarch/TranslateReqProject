<template>
  <v-container style="dispaly: flex; flex-direction: column; margin: auto">
    <v-container style="width: 80vw; height: 100vh" fluid>
      <!--필터-->
      <v-toolbar elevation="0">
        <v-toolbar-title class="text-center">filter</v-toolbar-title>
        <v-spacer />

        <v-toolbar-items class="text-center">
          <v-container fluid>
            <v-row align="center">
              <v-col class="d-flex" cols="12" sm="3">
                <v-select dense label="유저(User)" />
              </v-col>
              <v-col class="d-flex" cols="12" sm="3">
                <v-select dense label="분야(Field)" />
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select dense label="날짜(Date)" outlined />
                <v-select dense label="날짜(Date)" outlined />
              </v-col>
            </v-row>
          </v-container>
        </v-toolbar-items>
        <v-spacer />

        <v-btn rounded depressed color="success" @click="reload">Reload</v-btn>
      </v-toolbar>

      <!--의뢰 카드-->
      <v-row dense>
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
                    <v-btn icon @click="download(i.src)" :value="i.src"><v-icon>mdi-file</v-icon></v-btn>
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
</style>

<script lang="js">
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
      }
    },
    fetch({ store }) {
        return store.dispatch('admin/loadReq');
    },
    computed: {
      list() {
        return this.$store.state.admin.allRequest;
      }
    },
    methods: {
      reload() {
        this.$store.dispatch('admin/loadReq');
        console.log('Reload');
      },
      download(file) {
        this.$store.dispatch('admin/download', file);
        console.log(`File Download : ${file}`);
      },
      cancelRequest(id) {
        this.$store.dispatch('admin/deleteRequest', id);
        this.dialog = false;
      }
    }
}
</script>