<template>
    <v-container>
        <h1>번역 의뢰 페이지</h1>
        <v-card>
            <v-container>
                <v-form>
                    <v-text-field type="text" label="성명" />
                    <v-text-field type="tel" label="휴대전화" />
                    <v-text-field type="email" label="이메일" />
                    <v-text-field type="text" label="직장명" />
                    <v-text-field type="tel" label="전화" />
                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" offset-y min-width="auto">
                        <template #activator="{ on, attrs }">
                            <v-text-field v-model="date" prepend-icon="mdi-calendar" v-bind="attrs" readonly label="희망 납품일" v-on="on" />
                        </template>
                        <v-date-picker v-model="date" no-title scrollable>
                            <v-spacer />
                            <v-btn text @click="menu = false">Cancel</v-btn>
                            <v-btn text @click="$refs.menu.save(date)">OK</v-btn>
                        </v-date-picker>
                    </v-menu>
                    <div style="display:flex; justify-content: space-around;">
                        <div><v-text-field readonly solo value="의뢰할 내용" dense /></div>
                        <div><v-select class="selector" :items="countrys" label="번역이 필요한 언어" outlined dense /></div>
                        <div>-></div>
                        <div><v-select class="selector" :items="countrys" label="번역할 언어" outlined dense /></div>
                        <div><v-file-input class="selector" prepend-icon="mdi-content-save" label="파일 첨부" dense /></div>
                    </div>
                    <v-textarea outlined label="특이사항" />
                    <div>
                        <v-btn depressed @click="pdfTest">견적서 발급</v-btn>
                        <v-btn depressed>번역 의뢰</v-btn>
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
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts.js";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default {
    data: () => ({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        countrys: ['한국어', '중국어', '일본어', '독일어', '러시아어', '아랍어'],
    }),
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
    }
}
</script>