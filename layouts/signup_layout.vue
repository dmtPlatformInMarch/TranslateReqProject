<template>
  <v-app>
    <v-toolbar elevation="0" style="flex: initial; width: 100%">
      <v-spacer />
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

    <h1 class="text-center">
      {{ language === "한국어" ? "회원 가입" : "SignUp" }}
    </h1>
    <div class="text-center">
      <nuxt />
    </div>
    <div class="text-center">
      <v-btn to="/" color="primary">{{ language === "한국어" ? "돌아가기" : "Back" }}</v-btn>
    </div>
    <v-spacer />
    <snack-bar />
    <bottom-component />
  </v-app>
</template>

<style scoped>
</style>

<script lang="js">
import SnackBar from '~/components/SnackBar'
import BottomComponent from '~/components/BottomComponent'

export default {
    layout: 'signup_layout',
    components: {
        SnackBar,
        BottomComponent,
    },
    computed: {
      language: {
        get() {
          return this.$store.state.manager.language;
        },
        set(value) {
          return this.$store.commit('manager/setLanguage', value);
        }
      }
    }
}
</script>
