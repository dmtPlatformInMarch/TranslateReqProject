<template>
  <v-container style="dispaly: flex; flex-direction: column; margin: auto">
    <v-container style="width: 80vw; height: 100vh" fluid>
      <v-toolbar elevation="0">
        <v-toolbar-title
          class="text-center"
          style="border: 1px solid red; padding: 10px"
          >filter</v-toolbar-title
        >
        <v-divider vertical inset />
        <v-spacer />
        <v-toolbar-items class="text-center">
          <v-container fluid>
            <v-row align="center">
              <v-col class="d-flex" cols="12" sm="3">
                <v-select dense label="filter content" />
              </v-col>
              <v-col class="d-flex" cols="12" sm="3">
                <v-select dense label="filter content" />
              </v-col>
              <v-col class="d-flex" cols="12" sm="3">
                <v-select dense label="filter content" />
              </v-col>
              <v-col class="d-flex" cols="12" sm="3">
                <v-select dense label="filter content" />
              </v-col>
            </v-row>
          </v-container>
        </v-toolbar-items>
        <v-spacer />
        <v-btn rounded depressed color="success" @click="reload">Reload</v-btn>
      </v-toolbar>
      <v-row dense>
        <v-col v-for="(item, index) in list" :key="index" :cols="3">
          <v-card style="height: 55vh" elevation="10">
            <v-card-title style="background: #1a237e; color: white"
              >의뢰
              <v-spacer />
              <v-btn icon dark>
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
                    <v-btn icon @click="download(i.src)" :value="i.src"
                      ><v-icon>mdi-file</v-icon></v-btn
                    >
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
      }
    }
}
</script>