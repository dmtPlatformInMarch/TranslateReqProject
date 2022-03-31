<template>
  <v-app>
    <v-toolbar elevation="0" style="flex: initial; width: 100%">
      <!--로고-->
      <v-toolbar-title>
        <nuxt-link to="/">
          <v-avatar height="80px" width="200px" tile>
            <img src="https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo3.png" />
          </v-avatar>
        </nuxt-link>
      </v-toolbar-title>
      <!--툴바 목록-->
      <v-toolbar-items v-if="language === '한국어'">
        <v-menu open-on-hover offset-y tile>
          <template #activator="{ on, attrs }">
            <v-btn class="font-weight-bold" depressed v-bind="attrs" v-on="on"> 텍스트 번역 </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-title> 소개 </v-list-item-title>
              </v-list-item>
              <v-list-item @click="go('/user/textmain')">
                <v-list-item-title> 텍스트 번역 의뢰 </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title> 번역 단가 </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-menu open-on-hover offset-y tile>
          <template #activator="{ on, attrs }">
            <v-btn class="font-weight-bold" depressed v-bind="attrs" v-on="on"> 영상 번역 </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-title>소개</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title> 영상 번역 의뢰 </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title> 번역 단가 </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-menu open-on-hover offset-y tile>
          <template #activator="{ on, attrs }">
            <v-btn class="font-weight-bold" depressed v-bind="attrs" v-on="on"> 음성 번역 </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-title> 소개 </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title> 음성 번역 의뢰 </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title> 번역 단가 </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-toolbar-items>

      <v-toolbar-items v-else-if="language === '영어'">
        <v-menu open-on-hover offset-y tile>
          <template #activator="{ on, attrs }">
            <v-btn depressed v-bind="attrs" v-on="on"> Text Translation </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-title> Introduce </v-list-item-title>
              </v-list-item>
              <v-list-item @click="go('/user/textmain')">
                <v-list-item-title> Request </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title> Unit Price </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-menu open-on-hover offset-y tile>
          <template #activator="{ on, attrs }">
            <v-btn depressed v-bind="attrs" v-on="on"> Video Translation </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-title> Introduce </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title> Request </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title> Unit Price </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-menu open-on-hover offset-y tile>
          <template #activator="{ on, attrs }">
            <v-btn depressed v-bind="attrs" v-on="on"> Speech Translation </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-title> Introduce </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title> Request </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title> Unit Price </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-toolbar-items>

      <v-spacer />

      <!--페이지 언어 선택-->
      <v-toolbar-items>
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn tile icon v-bind="attrs" v-on="on">
              <v-icon>mdi-translate</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item-group v-model="language" mandatory>
              <v-list-item value="한국어">
                <v-list-item-title class="text-center" value="한국어"> 한국어 </v-list-item-title>
              </v-list-item>
              <v-list-item value="영어">
                <v-list-item-title class="text-center" value="영어"> English </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <nuxt />
    <bottom-component />
    <snack-bar />
  </v-app>
</template>

<style scoped>
</style>

<script>
import SnackBar from "~/components/SnackBar";
import BottomComponent from "~/components/BottomComponent";

export default {
  name: "default",
  components: { SnackBar, BottomComponent },
  data() {
    return {};
  },
  computed: {
    language: {
      get() {
        return this.$store.state.manager.language;
      },
      set(value) {
        return this.$store.commit("manager/setLanguage", value);
      },
    },
  },
  methods: {
    go(url) {
      this.$router.push({ path: `${url}` });
    },
  },
};
</script>
