<template>
    <v-container>
        <h2>DMTLABS 번역</h2>
        <v-row style="dispaly: flex; flex-direction: column; margin: auto;">
            <!--버튼 레이아웃-->
            <v-layout style="height: 8vh;">
                <v-col cols="12" md="12">
                    <v-btn-toggle v-model="toggle" tile mandatory>
                        <v-btn style="display: flex; width: 140px; align-content: center; justify-content: space-around;">
                            <div style="display: flex; align-content: center; justify-content: center;">
                                <v-icon>mdi-earth</v-icon>
                            </div>
                            <div style="display: flex; flex-direction: column;">
                                <h4 style="margin-right: auto;">언어 번역</h4>
                                <div style="margin-right: auto; font-size: 50%;">5개의 언어</div>
                            </div>
                        </v-btn>
                        <v-btn style="display: flex; width: 170px; align-content: center; justify-content: space-around;">
                            <div style="display: flex; align-content: center; justify-content: center;">
                                <v-icon>mdi-file</v-icon>
                            </div>
                            <div style="display: flex; flex-direction: column;">
                                <h4 style="margin-right: auto;">파일 번역</h4>
                                <div style="margin-right: auto; font-size: 50%;">.pdf .docx .pptx</div>
                            </div>
                        </v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-layout>
            <!--언어 번역 레이아웃-->
            <v-layout v-if="toggle===0" style="height: 45vh;">
                <v-col cols="12" md="5">
                    <v-textarea label="번역할 언어" hint="번역할 언어를 적어주세요." rows="15" auto-grow clearable counter outlined />
                </v-col>
                <v-col cols="12" md="2" style="text-align: center; margin: auto;">
                    <v-icon>mdi-arrow-right-bold</v-icon>
                </v-col>
                <v-col cols="12" md="5">
                    <v-textarea label="번역된 언어" hint="번역한 결과입니다." rows="15" auto-grow clearable counter outlined />
                </v-col>
            </v-layout>
            <!--파일 번역 레이아웃-->
            <v-layout v-else style="height: 45vh;">
                <v-col cols="12" md="12" >
                    <div style="height: 30vh; display: flex; flex-direction: column; align-content: center; justify-content: center;">
                        <v-icon class="text-h1">mdi-folder-upload</v-icon>
                        <div style="text-align: center;">
                            .pdf .docx .pptx
                        </div>
                        <div style="text-align: center;">
                            <v-btn style="width: 8vw" outlined>
                                업로드
                            </v-btn>
                        </div>
                    </div>
                </v-col>
            </v-layout>
            <!--번역자 레이아웃-->
            <v-layout style="height: 45vh;">
                <v-col cols="12" md="12">
                    <v-carousel cycle interval="3000" height="400" hide-delimiter-background hide-delimiters :show-arrows="false">
                        <v-carousel-item v-for="(slide, i) in slides" :key="i">
                            <v-sheet :color="colors[i]" height="100%">
                                <v-row class="fill-height" align="center" justify="center" >
                                    <v-col cols="4" md="1">
                                        <v-icon class="text-h1">mdi-account-box</v-icon>
                                    </v-col>
                                    <v-col cols="4" md="3">
                                        <div class="text-h4">
                                            번역자 : {{ slide }}<br>
                                            번역 건수 : {{ i + (i+1)*20 }}<br>
                                            번역 분야 : {{ fields[i] }}
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-layout>
        </v-row>
    </v-container>
</template>

<style scoped>

</style>

<script lang="js">
export default {
    data() {
        return {
            colors: ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'],
            slides: ['김민수', '이민지', '김철수', '홍길동', '제임스'],
            fields: ['경제', '정보통신', '언어', '과학', '자동차'],
            toggle: 0
        }
    }
}
</script>