<template>
    <div>
            <div class = "main-background">
            <h4 class = "main-title">DMT LABS TEST PAGE</h4>
                <p class = "main-content"> DMT Labs is new-type IT-based language service supplier as well as a language translation service provider located in Seoul, South Korea.
                </p>
            </div>

                <div class = "container">
                    <div class = "item1">
                        <h1>Technology</h1>
                        <br>
                        <p>영상에서 음성을 추출한 후 번역을 진행하고 있습니다. <br>하나의 영상에 대해 2개 국어 이상으로 번역 시, 언어별 일관성, 씽크 등 번역 품질에 집중하고 있습니다.</p>
                        </div>
        
                    <div class = "item2">
                        <h1>Direction</h1>
                        <br>
                        <p>코로나 출현과 OTT의 급부상으로 인해 기존 텍스트 번역 산업에 버금가는 거대 산업으로 발전하고 있습니다.<br>온라인 강의 ,OTT의 자막 번역 및 더빙은 자사의 주요 서비스 분야입니다.</p>
                        <div class = "line2"></div>
                    </div>
        
                    <div class = "item3">
                        <h1>Performance</h1>
                        <br>
                        <p>자사의 강점인 영상 내부 이미지 번역과 더불어, 기술적 단계의 도약을 위한 학습데이터 확보,<br>적용 가능한 도메인 영역 확장으로 다음 단계를 준비하고 있습니다.</p>
                        <div class = "line3"></div>
                    </div>
        
                    <div class = "item4">
                        <h1>Service</h1>
                        <br>
                        <p>방송, OTT 및 대학교 등 영상 매체를 활용하는 모든 채널이 주 고객층입니다.<br>영상 번역은 요청에 따라 영상 편집을 통해 전달하기도 합니다.<br>이 경우 자막화 작업, 영상 내부 특정 프레임 번역 서비스도 가능합니다.</p>
                        <div class = "line4"></div>
                    </div>
                </div>
    </div>
</template>

<script>


export default {
    layout: 'TestLayout',
    data(){
        return{
        }     
    },
    methods : {
    },
    components:{

    }
}
</script>

<style>

    div {
        box-sizing: border-box;
    }

    p {
        font-size : large;
    }

    .main-background {
    height : 40%;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("assets/back_img.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    }

    .main-title{
        text-align: center;
        color :white;
        font-size : 4rem;
        padding-top : 3rem;      
    }

    .main-content{
        text-align: center;
        color : white;
        font-size : 2rem;
        padding: 3
        rem;
        padding-bottom: 4rem;
    }

    .container{
        display : flex;
        width : 45%;
        margin-top : 2%;

        flex-direction: column;
        flex-grow: 1;
    }

    .item1{
        margin-top: 2rem;
        border-bottom: 10px solid #23bbb1;
    }

    .item2{
        margin-top: 2rem;
        border-bottom: 10px solid #512FDB;
    }

    .item3{
        margin-top: 2rem;
        border-bottom: 10px solid #013183;
    }

    .item4{
        margin-top: 2rem;
        border-bottom: 10px solid #2172FF;
    }


</style>

