<template>
    <v-container>
        <v-toolbar elevation="0">
            <v-toolbar-title>
                <h1>기업 토큰 관리</h1>
            </v-toolbar-title>
            <v-spacer />
            <v-btn rounded color="success" @click="update">조회하기</v-btn>
        </v-toolbar>

        <v-card>
            <v-container>
                <v-card-title class="titleStyle">토큰 생성</v-card-title>
                <v-card class="overflow-y-auto" style="height: 20vh" elevation="10">
                    <div class="token__create__section">
                        <v-text-field v-model="token" style="flex: 0; width: 60%" rounded outlined readonly value="asdf1234">
                            <template v-slot:append>
                                <v-tooltip v-model="copied" top :disabled="!copied">
                                    <template v-slot:activator="{ attrs }">
                                        <v-btn v-bind="attrs" icon class="token__create__clipboard" @click.stop="copy">
                                            <v-icon v-if="!copied">
                                                mdi-clipboard-text
                                            </v-icon>
                                            <v-icon v-else>
                                                mdi-clipboard-check
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Copied!</span>
                                </v-tooltip>
                            </template>
                        </v-text-field>
                        <v-btn depressed outlined rounded color="primary" @click="tokenCreate">
                            생성하기
                        </v-btn>
                    </div>
                </v-card>
            </v-container>
            <v-container>
                <v-card-title class="titleStyle">토큰 등록</v-card-title>
                <v-card class="overflow-y-auto" style="height: 50vh" elevation="10">
                    <div class="token__register__section">
                        <v-spacer />
                        <div class="token__register__company">
                            <h1>등록 기업(회사, 소속)</h1>
                            <v-text-field class="centered_input" v-model="registCompany" outlined block hide-details />
                        </div>
                        <v-spacer />
                        <div class="token__register__company">
                            <h1>등록 토큰</h1>
                            <v-text-field class="centered_input" v-model="registToken" outlined block hide-details />
                        </div>
                        <v-spacer />
                        <div class="d-flex flex-column" style="width: 60%; height: 10%">
                            <v-btn rounded block color="primary" @click="dialog = !dialog" :disabled="registCompany === '' || registToken === ''">
                                등록하기
                            </v-btn>
                        </div>
                        <v-spacer />
                    </div>
                </v-card>
            </v-container>
        </v-card>

        <v-dialog v-model="dialog" width="600">
            <v-card>
                <v-card-title class="titleStyle">
                    정보 확인
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row justify="center">
                            <v-col>
                                <h2>등록 기업 : </h2><br />
                                <h2>등록 토큰 : </h2>
                            </v-col>
                            <v-col>
                                <h2>{{ registCompany }} </h2><br />
                                <h2>{{ registToken }}</h2>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="success" @click="tokenRegist">
                        등록
                    </v-btn>
                    <v-btn color="error" @click="dialog = !dialog">
                        취소
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<style scoped>
.titleStyle {
  color: aliceblue;
  background: #013183;
}
.token__create__section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.token__create__clipboard {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 !important;
    width: auto;
    height: 100%;
    border-radius: 0;
}
.token__register__section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.token__register__company {
    width: 80%;
    text-align: center;
}
.centered_input >>> input {
    text-align: center;
}
</style>

<script>
export default {
    layout: 'AdminLayout',
    data() {
        return {
            dialog: false,
            copied: false,
            token: "",
            registCompany: "",
            registToken: "",
        }
    },
    methods: {
        update() {

        },
        copy() {
            this.copied = true;
            navigator.clipboard.writeText(this.token);
            setTimeout(() => {
                this.copied = false;
            }, 650);
        },
        tokenCreate() {
            // UUID 기반 랜덤 토큰 생성
            const uuid = window.crypto.randomUUID();
            //console.log(uuid.replaceAll("-", ""));
            this.token = uuid.replaceAll("-", "");
        },
        async tokenRegist() {
            const registToken = await this.$store.dispatch('admin/registToken', {
                organization: this.registCompany,
                token: this.token
            });
            this.dialog = false;
            console.log(registToken);
            if (registToken.code) {
                this.$manage.showMessage({ message: `토큰 등록 완료 : ${registToken.message}`, color: 'success' });
            } else {
                this.$manage.showMessage({ message: `토큰 등록 에러 : ${registToken.message}`, color: 'error' });
            }
        }
    }
}
</script>
