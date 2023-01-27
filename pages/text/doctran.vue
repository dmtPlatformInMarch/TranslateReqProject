<template>
    <v-container>
        <v-container class="display_desktop">
            <v-row justify="center" no-gutters>
                <v-col cols="12" md="5" sm="5">
                    <v-card v-if="!file_upload" class="col1__border" height="600px" flat>
                        <label class="fileupload__btn" for="chooseFile">파일 업로드</label>
                        <v-file-input v-if="language === '한국어'" id="chooseFile" class="file__upload"
                            :accept="acceptFiles" outlined rounded multiple @change="uploadFile" />
                        <!-- <v-btn class="" rounded  color="#383981" outlined depressed x-large>
                        파일 업로드
                    </v-btn> -->
                        <div class="uploadfile__msg">
                            <div style="color: #4A4A4A; font-size: 1.2em; font-weight: 500;">지원 파일 형식</div>
                            <div>
                                50MB 이하 파일만 업로드 가능합니다.<br>
                                txt, pdf, docx 파일만 업로드 가능합니다.
                            </div>
                        </div>
                    </v-card>
                    <v-card v-if="file_upload" class="col1__border" height="600px" flat>
                        <div class="file__uploaded__box">
                            <div class="close__circle__box" @click="clickClose">
                                <v-icon class="close__circle__icon" color="#383981">mdi-close-circle-outline</v-icon>
                            </div>
                            <div class="file__icon">
                                <v-icon color="#383981" size="80px">mdi-file-document</v-icon>
                            </div>
                            <div class="file__info__box">
                                <div>{{ this.test_file[0].name }}</div>
                                <div>{{ this.test_file[0].size > 1000 ? this.test_file[0].size/1000 : this.test_file[0].size }} {{ this.test_file[0].size > 1000 ? 'MB' : 'KB' }}</div>
                            </div>
                        </div>
                        <v-btn class="translate__btn" color="#383981" depressed x-large dark @click="translateFile">
                            번역하기
                        </v-btn>
                    </v-card>

                </v-col>
                <v-col cols="12" md="5" sm="5">
                    <v-card class="col2__border" height="600px" flat>
                        <div class="col2__box">
                            더 정확한 번역을 원하신다면<br> 번역 의뢰를 요청하세요.
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" md="2" sm="2">
                    <v-card class="col3__border" color="#F6F8FC" height="600px" flat>
                        <div class="language__select__box">
                            <v-select 
                            class="language__select" 
                            v-model="from_file_lang" 
                            :items="from_languages"
                            placeholder='언어 선택'
                            outlined 
                            color="#383981" 
                            item-color="#38398" 
                            hide-details=""
                            >
                            </v-select>
                            <v-select 
                            class="language__select" 
                            v-model="to_file_lang" 
                            :items="file_languages"
                            placeholder='언어 선택' 
                            outlined color="#383981" 
                            item-color="#38398" 
                            hide-details=""
                            >
                            </v-select>
                        </div>
                        <div class="down__req__box">
                            <v-btn class="down__req__btn" color="#BBB8B8" height="40px" outlined depressed block>
                                다운로드
                            </v-btn>
                            <v-btn class="down__req__btn" color="#BBB8B8" height="40px" outlined depressed block>
                                번역 의뢰
                            </v-btn>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <!-- 모바일 작동 부분      -->
        <!-- 모바일 작동 부분      -->
        <!-- 모바일 작동 부분      -->
        <!-- 모바일 작동 부분      -->
        <v-container class="display_mobile">
            <v-layout class="layout_mo">
                <v-container class="menu_layout_mo">
                    <v-row>
                        <v-col class="menu_layout_col_mo" md="2">
                            <v-select v-model="from_lang" class="selector" dense
                                :items="language === '한국어' ? from_languages : e_from_languages"
                                :placeholder="language === '한국어' ? '언어 선택' : 'Select'" single-line hide-details="" />
                        </v-col>
                        <v-col class="menu_layout_col_mo" md="2">
                            <v-btn class="down__req__btn_mo" color="#BBB8B8" outlined depressed small>
                                다운로드
                            </v-btn>
                        </v-col>

                    </v-row>
                    <v-row>
                        <v-col class="menu_layout_col_mo" md="2">
                            <v-select v-model="from_lang" class="selector" dense
                                :items="language === '한국어' ? from_languages : e_from_languages"
                                :placeholder="language === '한국어' ? '언어 선택' : 'Select'" single-line hide-details="" />
                        </v-col>
                        <v-col class="menu_layout_col_mo" md="2">
                            <v-btn class="down__req__btn_mo" color="#BBB8B8" outlined depressed small>
                                번역 의뢰
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>


                <v-container v-if="!file_upload" class="file_container_mo">
                    <v-row>
                        <v-col style="text-align: center;">
                            <br />
                            <label class="file-label_mo" for="chooseFile">파일 업로드</label>
                            <input v-if="language === '한국어'" id="chooseFile" class="file_upload" type="file"
                                :accept="acceptFiles" outlined rounded multiple @change="uploadFile" />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="file_guid_text_mo">
                            <div>
                                <h4>지원 파일 형식</h4>
                                <p>
                                    <br />
                                    · 50MB 이하 파일만 업로드 가능합니다.
                                    <br />
                                    · txt, pdf, docx 파일만 업로드 가능합니다.
                                </p>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
                <v-container v-if="file_upload" class="file_container_mo">
                    <v-row>
                        <v-col
                            style="display:flex; flex-direction: column; justify-content: space-around; align-items: center;">
                            <div style="
                            width: 60%;
                            border: 2px solid #383981;
                            text-align: center;
                            background-color: #F6F8FC;
                            ">
                                <v-icon class="text-h4" style="padding-top: 20px;">mdi-file-upload</v-icon>
                                <div style="font-size: 12;">
                                    {{ this.file_naem }}
                                </div>
                                <div style="font-size: 10;padding-bottom: 20px;">
                                    {{ this.file_naem }}
                                </div>
                            </div>
                            <v-btn>
                                번역하기
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
                <div class="translated_box_mo">
                    더 정확한 번역을 원하신다면<br />
                    번역 의뢰를 요청 하세요.
                </div>
            </v-layout>
        </v-container>
    </v-container>
</template>

<style>
.display_mobile {
    display: none;
}

.col1__border {
    border-color: #383981 !important;
    border-width: 2px 1px 2px 2px;
    border-style: solid;
    border-radius: 5px 0 0 5px !important;
}
.fileupload__btn {
    font-size: 20px !important;
    border: #383981 solid 2px;
    border-radius: 30px !important;
    width: 150px;
    height: 45px;
    text-align: center;
    line-height: 40px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.fileupload__btn:hover {
    background-color: #DAE3F3;
}
.uploadfile__msg {
    color: #8A8A8A;
    font-size: 0.9em;
    width: 300px;
    position: absolute;
    left: 30px;
    bottom: 30px;
}
.close__circle__icon:hover {
    background-color: #DAE3F3;
    border-radius: 50%;
}
.file__uploaded__box {
    background-color: antiquewhite;
    width: 90%;
    height: 250px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #F6F8FC;
    border: #383981 2px solid;
    border-radius: 0px !important;
}
.translate__btn {
    font-size: 20px !important;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.close__circle__box {
    position: absolute;
    top: 1px;
    right: 2px;
}
.file__icon {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.file__info__box {
    color: #383981;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
.col2__border {
    border-color: #383981 !important;
    border-width: 2px 2px 2px 1px;
    border-style: solid;
    border-radius: 0 5px 5px 0 !important;
}
.col2__box {
    width: 300px;
    font-size: 1.5em;
    text-align: center;
    position: absolute;
    color: #4A4A4A;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.col3__border {
    border-color: #383981 !important;
    border-width: 2px;
    border-style: solid;
    border-radius: 5px !important;
    margin-left: 5px;
}
.theme--light.v-select .v-select__selections {
    color: #383981; 
}
.theme--light.v-list {
    background: #F6F8FC;
}
.language__select__box {
    padding: 4px !important;
}
.language__select {
    padding-bottom: 5px;
}
.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
    > .v-input__control
    > .v-input__slot
    fieldset {
        color: #383981;
        border-width: 2px;
    }
.v-text-field.v-text-field--enclosed {
    padding-bottom: 10px;
}
.down__req__box {
    padding: 4px;
    position: absolute;
    bottom: 4px;
    width:100%;
} 
.down__req__btn {
    border-width: 2px;
    font-size: 17px !important;
    margin-top: 7px;
}
.file__upload {
    display: none;
}
@media screen and (max-width: 800px) {
    .display_desktop {
        display: none;
    }

    .display_mobile {
        display: block;
    }
}

.layout_mo {
    display: flex;
    flex-direction: column;
}

.menu_layout_mo {
    border: 2px #383981 solid;
    border-top-right-radius: 10px;
    border-radius: 10px;
    background-color: #F6F8FC;
    float: left;
}

.menu_layout_col_mo {
    text-align: center;
    padding: 7px;
}

.selector {
    border: 2px solid #383981;
    border-radius: 5px;
    text-align: center;
    background-color: #FFFFFF;
    padding: 0;
}

.file_container_mo {
    display: flex;
    flex-direction: column;
    margin-top: 3%;
    border: 2px #383981 solid;
    border-bottom: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    height: 35vh;
}

.file-label_mo {
    border: 2px #383981 solid;
    border-radius: 30px;
    padding: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    color: #383981;
}

.file_guid_text_mo {
    text-align: left;
    font-size: 0.7em;
    color: #8A8A8A;
}

.translated_box_mo {
    display: flex;
    border: 2px #383981 solid;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 100%;
    height: 30vh;
    align-items: center;
    justify-content: center;
}

.file_upload {
    display: none;
}

.down__req__btn_mo {
    border-width: 2px;
    font-size: 12px !important;
}
</style>


<script lang="js">
// flex box --> 이걸로 정렬 컴포넌트
// 반응형 디자인 - % O / px X
// 사이즈 기준 - 항상 부모에서
// 스타일 제작 순서 - 레이아웃 -> 페이지 -> 컴포넌트
// figma 사이트 이용해서 디자인 시안 올려요 -> 나한테 보고해라 카톡으로
import _ from 'lodash';
import JSZip from 'jszip';

export default {
    layout: "TestLayout",
    data() {
        return {
            colors: ['indigo lighten-4', 'amber lighten-2', 'pink lighten-4', 'red lighten-3', 'deep-purple lighten-3'],
            slides: ['김민수', '이민지', '김철수', '홍길동', '제임스'],
            fields: ['경제', '정보통신', '언어', '과학', '자동차'],
            toggle: 0,
            width: 0,

            from_lang: '',
            from_code: 'ko',
            to_lang: '',
            to_code: 'zh-chs',
            from_text: '',
            acceptFiles: '.txt,.pdf,.docx',
            test_file: '',
            from_file_lang: '',
            to_file_lang: '',
            from_file_code: '',
            to_file_code: '',
            file_text: '',
            file_naem: 'dkahffk',
            file_upload: false,
        }
    },
    created() {
        this.from_lang = this.language === '한국어' ? '한국어' : 'Korean';
        this.to_lang = this.language === '한국어' ? '중국어(간체)' : 'Chinese(Simplified)';
        this.from_file_lang = this.language === '한국어' ? '한국어' : 'Korean';
        this.to_file_lang = this.language === '한국어' ? '중국어(간체)' : 'Chinese(Simplified)';
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    computed: {
        language() {
            return this.$store.state.manager.language;
        },
        from_languages() {
            return this.$LANGUAGES_KO;
        },
        e_from_languages() {
            return this.$LANGUAGES_EN;
        },
        languages() {
            let newLanguages = this.$LANGUAGES_KO;
            if (newLanguages != undefined) newLanguages = newLanguages.filter(lang => lang != this.from_lang);
            return newLanguages;
        },
        e_languages() {
            let newLanguages = this.$LANGUAGES_EN;
            if (newLanguages != undefined) newLanguages = newLanguages.filter(lang => lang != this.from_lang);
            return newLanguages;
        },
        file_languages() {
            let newLanguages = this.$LANGUAGES_KO;
            if (newLanguages != undefined) newLanguages = newLanguages.filter(lang => lang != this.from_file_lang);
            return newLanguages;
        },
        e_file_languages() {
            let newLanguages = this.$LANGUAGES_EN;
            if (newLanguages != undefined) newLanguages = newLanguages.filter(lang => lang != this.from_file_lang);
            return newLanguages;
        },
    },
    watch: {
        language: function(lang) {
            this.from_lang = lang === '한국어' ? '한국어' : 'Korean';
            this.to_lang = lang === '한국어' ? '중국어(간체)' : 'Chinese(Simplified)';
            this.from_file_lang = this.language === '한국어' ? '한국어' : 'Korean';
            this.to_file_lang = this.language === '한국어' ? '중국어(간체)' : 'Chinese(Simplified)';
        },
        from_lang: _.debounce(function(from) {
            this.from_code = this.language === '한국어' ? this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(from)] : this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(from)];
            this.translate();
        }, 500),
        to_lang: _.debounce(function(to) {
            this.to_code = this.language === '한국어' ? this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(to)] : this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(to)];
            this.translate();
        }, 500),
        from_file_lang: _.debounce(function(lang) {
            this.from_file_code = this.language === '한국어' ? this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(lang)] : this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(lang)];
            if (this.from_text != "" || this.from_text != null) this.uploadFile(this.test_file);
        }, 500), 
        to_file_lang: _.debounce(function(lang) {
            this.to_file_code = this.language === '한국어' ? this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(lang)] : this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(lang)];
            if (this.from_text != "" || this.from_text != null) this.uploadFile(this.test_file);
        }, 500),
            from_text: _.debounce(function(text) {
            this.translate();
        }, 500)
    },
    methods: {
        handleResize(event) {
            this.width = window.innerWidth;
        },
        async translate() {
            if (this.from_lang.length == 0 || this.to_lang.length == 0) {
                this.$manage.showMessage({ message: '언어를 선택해주세요.', color: 'red' });
            } else {
                if (this.from_text == "" || this.from_text == null) {
                    this.$store.commit('manager/setTranslate', '');
                } else {
                    try {
                        this.$nuxt.$loading.start();
                        const res = await this.$store.dispatch('manager/Test', {
                            from: this.from_code,
                            to: this.to_code,
                            text: this.from_text,
                            returnValue: false,
                        });
                        this.$nuxt.$loading.finish();
                    } catch (err) {

                    }
                }
            }
        },
        async uploadFile(file) {
            //console.log(file.target.files); input 으로 파열 받을경우 $refs로 받아서 file 데이터 가져오기
            
            if (file != null && typeof (file) == 'object') {
                if ((file.size / 1000000) >= 5.5) {
                    this.$manage.showMessage({ message: '파일 크기가 너무 큽니다.', color: 'red' });
                } else {
                    this.test_file = file;
                    this.file_upload = !this.file_upload;
                    // const filename = '' + this.test_file[0].name;
                    // console.log(filename)
                    // this.file_upload = !this.file_upload;
                    // const ext = filename.substring(filename.lastIndexOf('.') + 1, filename.length).toLowerCase();
                    // this.file_len = file;
                    // console.log(ext);
                    // console.log(this.test_file)
                    // console.log(this.test_file[0].name)

                    // switch (ext) {
                    //     case 'txt':
                    //         // 텍스트 파일
                    //         this.$nuxt.$loading.start();
                    //         let txt_text = await this.test_file[0].text();
                    //         const txtResponse = await this.$store.dispatch('manager/Test', {
                    //             from: this.from_file_code,
                    //             to: this.to_file_code,
                    //             text: txt_text,
                    //             returnValue: true,
                    //         });
                    //         this.$nuxt.$loading.finish();
                    //         this.file_text = txtResponse;
                    //         break;
                    //     case 'docx':
                    //         // 워드 파일
                    //         const docxResponse = await this.$store.dispatch('manager/textExtract', { 
                    //           file: this.test_file, 
                    //           to: this.to_file_code,
                    //         });
                    //         console.log(docxResponse);
                    //         break;
                    //     case 'pdf':
                    //         // pdf 파일
                    //         this.$nuxt.$loading.start();
                    //         const pdfResponse = await this.$store.dispatch('manager/textExtract', {
                    //             from: this.from_file_code,
                    //             to: this.to_file_code,
                    //             file: this.test_file,
                    //         });
                    //         this.$nuxt.$loading.finish();
                    //         //console.log(pdfResponse);
                    //         this.file_text = pdfResponse;
                    //         break;
                    //     default:
                    //         break;
                    // }
                }
            } else {
                this.file_text = '';
                this.test_file = '';
            }
        },
        clickClose() {
            this.file_text = '';
            this.test_file = '';
            this.file_upload = !this.file_upload;
        },
        async translateFile() {
            const filename = '' + this.test_file[0].name;
            console.log(filename)
            this.file_upload = !this.file_upload;
            const ext = filename.substring(filename.lastIndexOf('.') + 1, filename.length).toLowerCase();
            
            console.log(ext);
            console.log(this.test_file)
            console.log(this.test_file[0].name)

            switch (ext) {
                case 'txt':
                    // 텍스트 파일
                    this.$nuxt.$loading.start();
                    let txt_text = await this.test_file[0].text();
                    console.log(txt_text); // 번역 전 텍스트
                    const txtResponse = await this.$store.dispatch('manager/Test', {  // 번역해오는
                        from: this.from_file_code,
                        to: this.to_file_code, 
                        text: txt_text,
                        returnValue: true,
                    });
                    this.$nuxt.$loading.finish();
                    this.file_text = txtResponse; // 번역후 텍스트
                    console.log(this.file_text);
                    break;
                case 'docx':
                    // 워드 파일
                    const fileReader = new FileReader();
                    const jsZip = new JSZip();
                    fileReader.readAsBinaryString(this.test_file[0]);
                    //fileReader.readAsText(this.test_file[0]);
                    const xmlFile = '';
                    const xmldata = [];
                    fileReader.onload = function(e) {
                        try {
                            //const xmlData = JSZip.loadAsync(e.target.result).then((zip) =>{ console.log(zip); const data = zip.file('word/document.xml').async("string"); console.log(data)});
                            JSZip.loadAsync(e.target.result).then((zip) =>{ 
                                console.log(zip);
                                zip.file('word/document.xml').async("base64").then(
                                    function(stringText) {
                                        // console.log(stringText);
                                        xmldata.push(stringText);
                                        // data[1] = data[0];
                                        // console.log("test\n"+data[1]);

                                        // xmlFile = new File(data, "hello.xml", {type: 'text/plain'});
                                        // console.log(xmlFile);
                                    }
                                )
                            });
                        } catch (err) {
                            console.error(err);
                        }                       
                    }
                    

                    // const data = await zip.file('word/document.xml').async("string");
                    // console.log(data);
                    const docxResponse = await this.$store.dispatch('manager/textExtract', { 
                        file: this.test_file, 
                        to: this.to_file_code,
                        data: xmldata,
                    });
                    console.log(docxResponse);
                    break;
                case 'pdf':
                    // pdf 파일
                    this.$nuxt.$loading.start();
                    const pdfResponse = await this.$store.dispatch('manager/textExtract', {
                        from: this.from_file_code,
                        to: this.to_file_code,
                        file: this.test_file,
                    });
                    this.$nuxt.$loading.finish();
                    //console.log(pdfResponse);
                    this.file_text = pdfResponse;
                    break;
                default:
                    break;
            }
        },
    }
}
</script>