<template>
    <v-container>
        <h1>번역 의뢰 페이지</h1>
        <v-card>
            <v-container>
                <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                    <v-text-field v-model="name" type="text" label="*성명" :rules="[ v => !!v || '이름을 입력하셔야 합니다.']" />
                    <v-text-field v-model="phone" type="tel" label="*휴대전화" :rules="[ v => !!v || '전화번호를 입력하셔야 합니다.']" />
                    <v-text-field v-model="email" type="email" label="*이메일" :rules="[ v => !!v || '이메일을 입력하셔야 합니다.']" />
                    <v-text-field v-model="company" type="text" label="*회사명" :rules="[ v => !!v || '회사이름이나 소속명을 입력해주세요.']" />
                    <v-text-field v-model="second_phone" type="tel" label="전화" />
                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" offset-y min-width="auto">
                        <template #activator="{ on, attrs }">
                            <v-text-field v-model="date" prepend-icon="mdi-calendar" v-bind="attrs" readonly label="*희망 납품일" :rules="[ v => !!v || '희망 납품일을 입력해주세요.' ]" v-on="on" />
                        </template>
                        <v-date-picker v-model="date" no-title scrollable>
                            <v-spacer />
                            <v-btn text @click="menu = false">Cancel</v-btn>
                            <v-btn text @click="$refs.menu.save(date)">OK</v-btn>
                        </v-date-picker>
                    </v-menu>
                    <div style="display:flex; justify-content: space-around;">
                        <div><v-text-field readonly solo value="*의뢰할 내용" dense /></div>
                        <div><v-select v-model="req_lang" class="selector" :items="countrys" label="번역이 필요한 언어" outlined dense :rules="[ v => !!v || '번역될 언어를 선택하세요.']" /></div>
                        <div>-></div>
                        <div><v-select v-model="grant_lang" class="selector" :items="countrys" label="번역할 언어" outlined dense :rules="[ v => !!v || '번역할 언어를 선택하세요.']" /></div>
                        <div><v-file-input v-model="file" class="selector" prepend-icon="mdi-content-save" label="파일 첨부" small-chips dense :rules="[ v => !!v || '번역 파일을 첨부해주세요.']" @change="onChangeFile" /></div>
                    </div>
                    <v-textarea v-model="options" outlined auto-grow clearable label="특이사항" :hide-details="hideDetails" @input="onChangeTextarea" />
                    <div>
                        <v-btn depressed @click="pdfTest">견적서 발급</v-btn>
                        <v-btn depressed type="submit">번역 의뢰</v-btn>
                    </div>
                </v-form>
            </v-container>
        </v-card>
    </v-container>
</template>

<style scoped>
    .selector {
        width: 200px;
    }
</style>

<script lang="js">
import { mapState } from 'vuex';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts.js";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default {
    data: () => ({
        hideDetails: true,
        valid: false,
        menu: false,
        countrys: ['한국어', '중국어', '일본어', '독일어', '러시아어', '아랍어'],
        name: 'RQTest',
        phone: '01012341234',
        email: '123@123.com',
        company: '123Company',
        second_phone: '021231234',
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        req_lang: '한국어',
        grant_lang: '중국어',
        file: [],
        options: 'Options Test',
    }),
    computed: {
        ...mapState('requests', ['imagePaths']),
    },
    methods: {
        pdfTest: function() {
            var documentDefinition = {
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
                                [ {text: '한국어 -> 영어', colSpan: 2}, '', {text: '15000원', colSpan: 2}, '', '' ],
                                [ {text: '한국어 -> 일본어', colSpan: 2}, '', {text: '5000원', colSpan: 2}, '', '' ],
                                [ {text: '', colSpan: 2}, '', {text: '', colSpan: 2}, '', '' ],
                                [ {text: '', colSpan: 2}, '', {text: '', colSpan: 2}, '', '' ],
                                [ {text: '', colSpan: 2}, '', {text: '', colSpan: 2}, '', '' ],
                                [ {text: '', colSpan: 2}, '', {text: '', colSpan: 2}, '', '' ],
                                [ {text: '', colSpan: 2}, '', {text: '', colSpan: 2}, '', '' ],
                                [ {text: '', colSpan: 2}, '', {text: '', colSpan: 2}, '', '' ],
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
                        id: this.$store.state.requests.requestCount + 1,
                        name: this.name,
                        phone: this.phone,
                        email: this.email,
                        company: this.company,
                        second_phone: this.second_phone,
                        date: this.date,
                        req_lang: this.req_lang,
                        grant_lang: this.grant_lang,
                        options: this.options,
                        trans_state: '번역 준비중'
                    });
                    console.log(
                        `id: ${this.$store.state.requests.requestCount + 1}\n`,
                        `name: ${this.name}\n`,
                        `phone: ${this.phone}\n`,
                        `email: ${this.email}\n`,
                        `company: ${this.company}\n`,
                        `second_phone: ${this.second_phone}\n`,
                        `date: ${this.date}\n`,
                        `req_lang: ${this.req_lang}\n`,
                        `grant_lang: ${this.grant_lang}\n`,
                        `options: ${this.options}\n`,
                        `trans_state: ${'번역 준비중'}\n`
                    );
                } 
            } catch (error) {
                // 오류처리
                console.error(error);
            }
        },
        onChangeTextarea() {
            this.hideDetails = true;
        },
        onChangeFile(e) {
            const fileFormData = new FormData();
            if (e != null) {
                console.log(e);
                fileFormData.append('fileKey', e);
                this.$store.dispatch('requests/uploadFile', fileFormData);
            }
        },
        removeFile() {
            this.$store.commit('requests/removeImagePaths', 1);
        }
    }
}
</script>