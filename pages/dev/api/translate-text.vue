<template>
    <v-container class="d-flex flex-column align-center page">
        <div class="page__section">
            <h1>DMTLABS Translation API Service</h1>

            <v-divider />

            <h2 class="subtitle">Version</h2>
            <v-data-table class="elevation-1 version__table"
                :headers="versionHeaders" 
                :items="versionInfo" 
                disable-filtering 
                disable-pagination 
                disable-sort 
                hide-default-footer 
            />

            <h2 class="subtitle">DMT Translate API</h2>
            <p>
                발급받은 토큰(token)을 기반으로 번역 결과를 반환합니다.
                <br />
                <ul>
                <li>API 요청 시 헤더(header)에 토큰(token)을 넣어 요청해야 합니다.</li>
                <li>토큰 발급 참고 (<a href="/dev/enterprise/token-issue">Enterprise - API Token</a>)</li>
                </ul>
            </p>
            <pre class="code__box">

            <strong>요청 헤더</strong>: {
                ...
                token: [<strong> 발급 받은 토큰 </strong>],
                ...
            }
            </pre>

            <h2 class="subtitle">DMT Translate API Request</h2>
            <h3 class="subtitle">POST /api/translate-text</h3>
            <v-simple-table class="simple__table">
                <thead>
                    <tr class="simple__table__header">
                        <th>Method</th>
                        <th>Request URI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>POST</td>
                        <td>${DMT URL}/api/translate-text</td>
                    </tr>
                </tbody>
            </v-simple-table>
            
            <h3 class="subtitle">요청 헤더</h3>
            <v-simple-table class="simple__table">
                <thead>
                    <tr class="simple__table__header">
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Token</td>
                        <td>발급 토큰</td>
                    </tr>
                </tbody>
            </v-simple-table>

            <h3 class="subtitle">요청 바디</h3>
            <v-simple-table class="simple__table">
                <thead>
                    <tr class="simple__table__header">
                        <th>Name</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Require</th>
                        <th>Value</th>
                        <th>Default</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>from</td>
                        <td>원본 언어 종류</td>
                        <td>String</td>
                        <td>required</td>
                        <td>'ko', 'en', 'zh-CN', 'ja', 'de', 'fr', 'es', 'pt', 'it', 'ru', 'vi'</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>to</td>
                        <td>번역할 언어 종류</td>
                        <td>String</td>
                        <td>required</td>
                        <td>'ko', 'en', 'zh-CN', 'ja', 'de', 'fr', 'es', 'pt', 'it', 'ru', 'vi'</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>text</td>
                        <td>번역할 텍스트</td>
                        <td>String</td>
                        <td>required</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </v-simple-table>

            <h3 class="subtitle">응답</h3>
            <pre class="code__box">

            <strong>JSON</strong>
            {
                to: [ <strong> 번역된 언어 (Request로 받은 to) </strong> ]
                translations: [<strong> 번역된 텍스트 </strong>],
            }
            </pre>
        </div>
    </v-container>
</template>

<style scoped>
.page {
    width: 85vw;
}
.page__section {
    width: 60vw;
}
.subtitle {
    margin: 32px 0 12px 0;
}
.version__table {
    width: 30vw;
}
.version__table >>> .v-data-table-header {
    background: lightgray;
}
.code__box {
    background: #fafafa;
    border: 1px solid #e3e3e3;
}
.simple__table {
    border: 1px solid #e3e3e3;
}
.simple__table__header {
    background: #eaeaea;
}
@media screen and (min-width: 3440px) {
    .container {
        max-width: 3440px;
    }
}
</style>

<script>
export default {
    layout: 'DevLayout',
    data() {
        return {
            versionHeaders: [
                {
                    text: "Version",
                    value: 'version'
                }, 
                {
                    text: "Date",
                    value: 'date'
                },
                {
                    text: "Description",
                    value: "text"
                }

            ],
            versionInfo: [
                {
                    version: "1.0.0",
                    date: "2022-10-11",
                    text: "문서 최초 작성"
                }
            ]
        }
    },
}
</script>
