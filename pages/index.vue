<template>
  <div class="main__template">
    <div ref="box" class="scroll__box">

      <!--1 페이지-->
      <div class="scroll__item">
        <v-img class="bg1" height="100vh">
          <transition @leave="leave">
            <div class="scroll__item__textbox" v-if="lookup === 0">
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="enter" :css="false">
                <div class="scroll__item__title">
                  DMTLABS
                </div>
              </transition>
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="subEnter" :css="false">
                <div class="scroll__item__subtitle">
                  <h4 v-show="language === '한국어'">
                    DMTLABS는 다국적 번역 서비스를 제공합니다.
                  </h4>
                  <h4 v-show="language === '영어'">
                    DMTLABS provides multinational translation services.
                  </h4>
                </div>
              </transition>
            </div>
          </transition>
        </v-img>
      </div>

      <!--2 페이지-->
      <div class="scroll__item">
        <v-img class="bg2" height="100vh">
          <transition @leave="leave">
            <div class="scroll__item__textbox" v-if="lookup === 1">
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="enter" :css="false">
                <div class="scroll__item__title">
                  <div v-show="language === '한국어'">
                    <img class="DMT-logo" :src="require('@/assets/logo/logo3.png')">
                    <div class="slider">
                      <div class="image-box">
                        <div><img class="ETRI-logo" :src="require('@/assets/ETRI-logo.png')"></div>
                        <div><img class="ATOMI-logo" :src="require('@/assets/atomi-logo.png')"></div>
                        <div><img class="KT-logo" :src="require('@/assets/kt-logo.png')"></div>
                        <div><img class="KISITI-logo" :src="require('@/assets/kisiti-logo.png')"></div>
                        <div><img class="MARS-logo" :src="require('@/assets/mars-logo.png')"></div>
                        <div><img class="SALTLUX-logo" :src="require('@/assets/saltlux-logo.png')"></div>
                        <div><img class="KDX-logo" :src="require('@/assets/kdx-logo.png')"></div>
                        <div><img class="NIA-logo" :src="require('@/assets/nia-logo.png')"></div>
                        <!--   clone     -->
                        <div><img class="ETRI-logo" :src="require('@/assets/ETRI-logo.png')"></div>
                        <div><img class="ATOMI-logo" :src="require('@/assets/atomi-logo.png')"></div>
                        <div><img class="KT-logo" :src="require('@/assets/kt-logo.png')"></div>
                        <div><img class="KISITI-logo" :src="require('@/assets/kisiti-logo.png')"></div>
                        <div><img class="MARS-logo" :src="require('@/assets/mars-logo.png')"></div>
                        <div><img class="SALTLUX-logo" :src="require('@/assets/saltlux-logo.png')"></div>
                        <div><img class="KDX-logo" :src="require('@/assets/kdx-logo.png')"></div>
                        <div><img class="NIA-logo" :src="require('@/assets/nia-logo.png')"></div>
                      </div>
                    </div>
                  </div>

                  <div v-show="language === '영어'">
                    <img class="DMT-logo" :src="require('@/assets/logo/logo3.png')">
                    <div class="slider">
                      <div class="image-box">
                        <div><img class="ETRI-logo" :src="require('@/assets/ETRI-logo.png')"></div>
                        <div><img class="ATOMI-logo" :src="require('@/assets/atomi-logo.png')"></div>
                        <div><img class="KT-logo" :src="require('@/assets/kt-logo.png')"></div>
                        <div><img class="KISITI-logo" :src="require('@/assets/kisiti-logo.png')"></div>
                        <div><img class="MARS-logo" :src="require('@/assets/mars-logo.png')"></div>
                        <div><img class="SALTLUX-logo" :src="require('@/assets/saltlux-logo.png')"></div>
                        <div><img class="KDX-logo" :src="require('@/assets/kdx-logo.png')"></div>
                        <div><img class="NIA-logo" :src="require('@/assets/nia-logo.png')"></div>
                        <!--   clone     -->
                        <div><img class="ETRI-logo" :src="require('@/assets/ETRI-logo.png')"></div>
                        <div><img class="ATOMI-logo" :src="require('@/assets/atomi-logo.png')"></div>
                        <div><img class="KT-logo" :src="require('@/assets/kt-logo.png')"></div>
                        <div><img class="KISITI-logo" :src="require('@/assets/kisiti-logo.png')"></div>
                        <div><img class="MARS-logo" :src="require('@/assets/mars-logo.png')"></div>
                        <div><img class="SALTLUX-logo" :src="require('@/assets/saltlux-logo.png')"></div>
                        <div><img class="KDX-logo" :src="require('@/assets/kdx-logo.png')"></div>
                        <div><img class="NIA-logo" :src="require('@/assets/nia-logo.png')"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>

            </div>
          </transition>
        </v-img>
      </div>

      <!--3 페이지-->
      <div class="scroll__item">
        <v-img class="bg3" height="100vh">
          <transition @leave="leave">
            <div class="scroll__item__textbox" v-if="lookup === 2">
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="enter" :css="false">
                <div class="scroll__item__title">
                  <div v-show="language === '한국어'">

                    <div class="slogan-page">
                      <div class="slogan-1">
                        <h1>Broad Vision</h1>
                        <ul>
                          <li>해외 시장 진출 및 확장</li>
                          <li>광저우 생물의학 지식재산권 거래 회사 업무 협약 체결 예정</li>
                          <li>2023년도 베트남 하노이, 일본 도쿄 지사 설립 예정</li>
                          <li>2024년도 유럽 진출 예정</li>
                        </ul>
                      </div>

                      <div class="slogan-2">
                        <h1>Honest Service</h1>
                        <ul>
                          <li>지속적인 AI 기술 개발을 통한 사업확장</li>
                          <li>텍스트,영상,멀티미디어 통합 분석 기술 개발</li>
                          <li>데이터 실시간 입력,처리되는 기술 개발</li>
                        </ul>
                      </div>

                      <div class="slogan-3">
                        <h1>Great Value</h1>
                        <ul>
                          <li>국내 연구소 및 대학 협력을 통한 AI 신기술 확보</li>
                          <li>중고등학교 AI 기반 영어 독해 교육에 활용</li>
                          <li>대기업 직원 직무 교육용으로 활용</li>
                          <li>뉴스 주제, 인물 이해 등에 활용</li>
                        </ul>
                      </div>

                    </div>
                  </div>
                  <div v-show="language === '영어'">
                    <div class="slogan-page">
                      <div class="slogan-1">
                        <h1>Broad Vision</h1>
                        <ul>
                          <li>Overseas market entry and expansion</li>
                          <li>Guangzhou biomedical intellectual property trading company business agreement to be signed
                          </li>
                          <li>In 2023, Hanoi, Vietnam, and Tokyo, Japan will be established.</li>
                          <li>Expected to enter Europe in 2024</li>
                        </ul>
                      </div>

                      <div class="slogan-2">
                        <h1>Honest Service</h1>
                        <ul>
                          <li>Business expansion through continuous AI technology development</li>
                          <li>Text, video, multimedia integrated analysis technology development</li>
                          <li>Real-time data input and processing technology development</li>
                        </ul>
                      </div>

                      <div class="slogan-3">
                        <h1>Great Value</h1>
                        <ul>
                          <li>Securing new AI technologies through cooperation with domestic research institutes and
                            universities</li>
                          <li>Used for middle and high school AI-based English reading comprehension education</li>
                          <li>Used for job training for employees of large corporations</li>
                          <li>Used for news topics, understanding people, etc.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="subEnter" :css="false">
                <div class="scroll__item__subtitle">
                  <h4 v-show="language === '한국어'">
                    DMTLABS는 끊임없는 성장을 목표로 나아가고 있습니다.
                  </h4>
                  <h4 v-show="language === '영어'">
                    DMTLABS is moving towards the goal of continuous growth.
                  </h4>
                </div>
              </transition>
            </div>
          </transition>
        </v-img>
      </div>

      <!--4 페이지-->
      <div class="scroll__item">
        <v-img class="bg4" height="100vh">
          <transition @leave="leave">
            <div class="scroll__item__textbox" v-if="lookup === 3">
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="enter" :css="false">
                <div class="scroll__item__title">
                  <div v-show="language === '영어'">
                    <div class="indexpage-1-flexbox">
                      <div class="indexpage-1-flexbox-item">
                        <h3><span style="color : #512FDB">8</span> languages</h3>
                        <p>Automatic translation technology in 8 languages ​​and fields<br>
                          Construction of Korean-Chinese/Chinese-Korean translation DB<br>
                          Technical documentation and patent translation services<br>
                          Old documents translation and processing services<br>
                        </p>
                      </div>


                      <div class="indexpage-1-flexbox-item">
                        <h3><span style="color : #23bbb1">93%</span> accuracy</h3>
                        <p>Text Mining Fields PDF Academic Papers Metadata and Expertise Extraction Techniques<br>
                          Korean-English, Korean-Chinese automatic translation technology in general fields based on
                          artificial intelligence<br>
                          Korean-English, Korean-Chinese automatic translation technology in the field of artificial
                          intelligence-based patent/technology<br>
                          Korean and Chinese OCR technology (Korean 89%, Chinese 94%)</p>
                      </div>

                      <div class="indexpage-1-flexbox-item">
                        <h3><span style="color : #2172FF">3</span> versions</h3>
                        <p>Image translation, document (word,pdf) translation, video translation<br />
                          Image object complex information tagging program<br />
                          Automatic sorting of word-based patent document pairs<br />
                          Cloud-based online post-translational proofreading (MTPE) platform</p>
                      </div>
                    </div>
                  </div>
                  <div v-show="language === '한국어'">
                    <div class="indexpage-1-flexbox">
                      <div class="indexpage-1-flexbox-item">
                        <h3><span style="color : #512FDB">8개</span> 국어</h3>
                        <p>한/중/영/일/프/독/스/베 8개 국어 및 분야 자동 번역 기술<br>
                          한중/중한 번역 DB 구축<br>
                          기술 문서 및 특허 번역 서비스<br>
                          고문서 번역 및 처리 서비스<br>
                        </p>
                      </div>


                      <div class="indexpage-1-flexbox-item">
                        <h3><span style="color : #23bbb1">93%</span> 정확도</h3>
                        <p>텍스트 마이닝 분야 PDF 학술 논문 메타데이터 및 전문 추출 기술 분야<br>
                          인공지능 기반 일반분야 한영, 한중 자동 번역 기술<br>
                          인공지능 기반 특허/기술분야 한영, 한중 자동 번역 기술<br>
                          한국어 및 중국어 OCR 기술 (한국어 89%, 중국어 94%)</p>
                      </div>

                      <div class="indexpage-1-flexbox-item">
                        <h3><span style="color : #2172FF">3가지</span> 버전</h3>
                        <p>이미지 번역, 문서(워드,한글pdf) 번역, 영상 번역<br />
                          이미지 객체 복합 정보 태깅 프로그램<br />
                          워드 기반 특허 문서쌍에 대한 자동 정렬<br />
                          클라우드 기반 온라인 번역사후교정(MTPE) 플랫폼</p>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="subEnter" :css="false">
                <div class="scroll__item__subtitle">
                  <h4 v-show="language === '한국어'">
                    <div class="indexpage-1-head">
                      <h4 style="text-align: center;">전문성 있는 번역이 필요하다면</h4>
                      <h4 style="text-align: center;">DMTLABS <span style="color :#8B00FF">AI 번역</span></h4>
                    </div>
                  </h4>
                  <h4 v-show="language === '영어'">
                    <div class="indexpage-1-head">
                      <h4 style="text-align: center;">If you need professional translation</h4>
                      <h4 style="text-align: center;">DMTLABS <span style="color :#8B00FF">AI translation</span></h4>
                    </div>
                  </h4>
                </div>
              </transition>
            </div>
          </transition>
        </v-img>
      </div>

      <!--5 페이지-->
      <div class="scroll__item">
        <v-img class="bg5" height="100vh">
          <transition @leave="leave">
            <div class="scroll__item__textbox" v-if="lookup === 4">
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="enter" :css="false">
                <div class="scroll__item__title">
                  <div v-show="language === '한국어'">
                    <div class="indexpage-2">
                      <div class="indexpage-2-article">
                        <p class="article-center-1 floating">클라우드 기반 데이터 구축 및 가공 플랫폼 서비스</p>
                        <p class="article-left-1 floating">문서 영역 인식 기반 메타데이터 추출 기술</p>
                        <p class="article-right-1 floating">다양한 분야 대화 데이터 구축 및 대화 지식 가공</p>
                        <p class="article-center-2 floating">8개 국어 양방향 인공지능 자동 번역 기술 솔루션</p>
                        <p class="article-left-2 floating">외국인 행정문서 번역 및 제작 서비스</p>
                        <p class="article-right-2 floating">음성 전사 및 영상 자막 번역 및 생성 서비스</p>
                        <p class="article-center-3 floating">다국어 대역어 및 용례 검색 시스템</p>
                      </div>
                    </div>
                  </div>
                  <div v-show="language === '영어'">
                    <div class="indexpage-2">
                      <div class="indexpage-2-article">
                        <p class="article-center-1 floating">Cloud-based data construction and processing platform service</p>
                        <p class="article-left-1 floating">Document area recognition-based metadata extraction technology</p>
                        <p class="article-right-1 floating">Constructing dialogue data in various fields and processing dialogue knowledge</p>
                        <p class="article-center-2 floating">Bi-lingual artificial intelligence automatic translation technology solution in 8 languages</p>
                        <p class="article-left-2 floating">Foreign administrative document translation and production service</p>
                        <p class="article-right-2 floating">Audio transcription and video subtitle translation and creation service</p>
                        <p class="article-center-3 floating">Multilingual cross-language and example search system</p>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="subEnter" :css="false">
                <div class="scroll__item__subtitle">
                  <h4 v-show="language === '한국어'">
                    <div class="indexpage-2-head">
                      <h4 style="text-align: center;">다양한 서비스가 필요하다면</h4>
                      <h4 style="text-align: center;">DMTLABS <span style="color :#512FDB">SERVICES</span></h4>
                    </div>
                  </h4>
                  <h4 v-show="language === '영어'">
                   <div class="indexpage-2-head">
                      <h4 style="text-align: center;">If you need various services</h4>
                      <h4 style="text-align: center;">DMTLABS <span style="color :#512FDB">SERVICES</span></h4>
                    </div>
                  </h4>
                </div>
              </transition>
            </div>
          </transition>
        </v-img>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main__template {
  overflow: hidden;
  height: 100%;
}

.main__template * {
  touch-action: none;
}

.scroll__box {
  position: relative;
  overflow: hidden;
  transition: 1s cubic-bezier(0.5, 0, 0.5, 1);
}

.scroll__item {
  position: relative;
  height: 100vh;
  overflow: hidden;
  cursor: default;
}

.scroll__item__textbox {
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

.scroll__item__title {
  font-size: 10rem;
  font-weight: lighter;
  color: #666666;
}

.scroll__item__subtitle {
  margin-top: 15px;
  font-size: 2rem;
  color: #666666;
}

.bg1 {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/mainImg1.jpg'); */
  background-size: cover;
}

.bg2 {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/text.jpg'); */
  background-size: cover;
}

.bg3 {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/video.jpg'); */
  background-size: cover;
}

.bg4 {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/voice.jpg'); */
  background-size: cover;
}

.bg5 {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/voice.jpg'); */
  background-size: cover;
}


/* test */
.maintemplete {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}


div {
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

h4{
  margin-top : 0px;

}


.nav-box {
  position: fixed;
  width: 100vw;
  height: 70px;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
}



.title-block {
  text-align: center;
}

.title-name {
  display: inline-block;
  font-size: 40px;
  margin: auto;
  border-bottom: black 4px solid;
}

.title-logo {
  text-align: center;
}

.DMT-logo {
  display: block;
  width: 600px;
  margin: auto;
  margin-top: 100px;

}


.slider {
  overflow: hidden;
  position: relative;
  width: 100vw;
  /*이미지 보여지는 뷰 부분 */
  height: 200px;
  z-index: 0;
}

.image-box {
  width: 5280px;
  /*원본+클론의 총 합*/
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  animation: bannermove 15s linear infinite;
}

@keyframes bannermove {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-50%, 0);
  }
}


.ETRI-logo {
  margin-left: 60px;
  width: 12.5rem;
  height: 100px;
}

.ATOMI-logo {
  margin-left: 70px;
  margin-right: 60px;
  width:12.5rem;
  height: 100px;
}

.KISITI-logo {
  margin-left: 60px;
  margin-right: 60px;
  width:12.5rem;
}

.KT-logo {
  margin-left: 60px;
  margin-right: 60px;
  width: 8rem;
  height: 75px;
}

.KDX-logo {

  margin-left: 30px;
  margin-right: 60px;
  width: 12.5rem;
  height: 100px;
}

.MARS-logo {
  margin-left: 60px;
  margin-right: 20px;
  width:9.375rem;
  height: 150px;
}

.SALTLUX-logo {
  margin-left: 60px;
  margin-right: 60px;
  width:  21.875rem;
  height: 100px;
}

.NIA-logo {
  width: 18.75rem;
  height: 150px;
}

.slogan-page {
  font-size: 1.5rem;
  /* margin-top: 100px; */
  
}

.slogan-page ul {
  font-size: 1rem;
}

.slogan-1 {
  
  margin-right: 50rem;
  
}

.slogan-3 {
  margin-left: 50rem;
  margin-bottom: 40px;
  
}

.slogan-1::first-letter {
  color: #8B00FF;
}

.slogan-2::first-letter {
  color: #23bbb1;
}

.slogan-3::first-letter {
  color: #2172FF;
}

.indexpage-1-flexbox {
  display: flex;
  justify-content: center;
  margin-top : 5%;
  gap: 2%;
}

.indexpage-1-head{
 margin-top : 5%;
}


.indexpage-1-flexbox-item h3 {
  font-size: 3rem;
  text-align: center;
  
}

.indexpage-1-flexbox-item p {
  font-size: 1.25rem;
  text-align: center;
}


.indexpage-2-article {
  margin: 0px;
  margin-top: 5%;
}


.indexpage-2-article p {
  font-size: 2rem;
}



/*
    ==============================================
    floating
    ==============================================
    */

.floating {
  animation-name: floating;
  -webkit-animation-name: floating;

  animation-duration: 2s;
  -webkit-animation-duration: 1.5s;

  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
}

@keyframes floating {
  0% {
    transform: translateY(0%);
  }

  50% {
    transform: translateY(30%);
  }

  100% {
    transform: translateY(0%);
  }
}

@-webkit-keyframes floating {
  0% {
    -webkit-transform: translateY(0%);
  }

  50% {
    -webkit-transform: translateY(30%);
  }

  100% {
    -webkit-transform: translateY(0%);
  }
}

@media screen and (max-width: 900px) {

  .scroll__item__title{
    font-size : 3rem;
  }


  .scroll__item__subtitle{
    font-size : 1rem;
  }

  .DMT-logo {
    width: 400px;
    height: 200px;
  }

  .slogan-page {
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
  }

  .slogan-page li {
    font-size: 0.5rem;
    text-align: center;
  }

  .slogan-1 {
    margin: auto;
    margin-bottom: 20px;
  }

  .slogan-2 {
    margin: auto;
    margin-bottom: 20px;
  }

  .slogan-3 {
    margin: auto;
    margin-bottom: 20px;
  }

  .indexpage-1-flexbox {
    flex-direction: column;
    text-align: center;
  }

.indexpage-1-flexbox-item h3 {
  font-size: 1.5rem;
  text-align: center;
}

.indexpage-1-flexbox-item p {
  font-size: 0.5rem;
  text-align: center;
}


  .indexpage-2-article {
    display: flex;
    flex-direction: column;
  
  }

  .indexpage-2-article p {
    font-size: 1rem;
    margin: auto;
  }


}

@media screen and (max-width: 500px) {

  .scroll__item__title{
    font-size : 3rem;
  }

   .scroll__item__subtitle{
    font-size : 1.25rem;
  }

  .blank-box {
    height: 100px;
  }

  .DMT-logo {
    width: 400px;
    height: 200px;
  }

  .slogan-page {
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
  }

  .slogan-page li {
    font-size: 0.8rem;
  }


  .slogan-1 {
    margin: auto;
    margin-bottom: 10px;
  }

  .slogan-2 {
    margin: auto;
    margin-bottom: 10px;
  }

  .slogan-3 {
    margin: auto;
    margin-bottom: 10px;
  }

  .indexpage-1-flexbox {
    flex-direction: column;
  }
.indexpage-1-flexbox-item h3 {
    font-size : 2rem;
  }

.indexpage-1-flexbox-item p {
   display : none;
}
  .indexpage-2-article {
    display: flex;
    flex-direction: column;
   
  }

  .indexpage-2-article p {
    font-size: 1rem;
    margin: auto;
  }


}

@media screen and (max-width: 361px) {

 
  .scroll__item__title{
    font-size : 50px;
  }

  .blank-box {
    height: 100px;
  }

  .DMT-logo {
    width: 300px;
    height: 150px;
  }

  .slogan-page {
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    margin-top: 50px;
  }

  .slogan-page li {
    font-size: 20px;
    text-align: center;
    display : none;
  }

  .slogan-1 {
    margin: auto;
    margin-bottom: 10px;
  }

  .slogan-2 {
    margin: auto;
    margin-bottom: 10px;
  }

  .slogan-3 {
    margin: auto;
    margin-bottom: 10px;
  }

  .indexpage-1-flexbox {
    flex-direction: column;
    margin: 0;
  }



.indexpage-1-flexbox-item p {
   display : none;
}
  .indexpage-2-article {
    display: flex;
    flex-direction: column;
   
  }

  .indexpage-2-article p {
    font-size: 1rem;
    margin: auto;

  }

}
</style>

<script>
import gsap from "gsap";

export default {
  layout: "Default",
  data() {
    return {
      sections: 5,
      scdir: '',
      swdir: '',
      hold: false,
      sX: 0,
      sY: 0,
      stT: 0,
      dX: 0,
      dY: 0,
      elT: 0,
      alT: 500,
      threshold: 100,
      slack: 50,
      lookup: 0,
    }
  },
  mounted() {
    window.addEventListener("keydown", (event) => {
      if (event.defaultPrevented) {
        return;
      }

      let handleed = false;

      switch (event.key) {
        case "Down": // IE/Edge specific value
        case "ArrowDown":
          // Do something for "down arrow" key press.
          handleed = true;
          break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
          // Do something for "up arrow" key press.
          handleed = true;
          break;
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
          // Do something for "left arrow" key press.
          handleed = true;
          break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
          // Do something for "right arrow" key press.
          handleed = true;
          break;
        default:
          return;
      }
      if (handleed) {
        event.preventDefault();
      }
    }, true);

    const box = this.$refs.box;
    box.style.transform = 'translateY(0)';
    box.addEventListener('wheel', this.handleScroll);
    box.addEventListener('wheel', this.scrollY);
    box.addEventListener('touchstart', this.swipeStart, false);
    box.addEventListener('touchend', this.swipeEnd, false);
  },
  beforeDestroy() {
    const box = this.$refs.box;
    box.removeEventListener('wheel', this.scrollY);
    box.removeEventListener('wheel', this.handleScroll);
    box.removeEventListener('touchstart', this.swipeStart);
    box.removeEventListener('touchend', this.swipeEnd);
  },
  computed: {
    language() {
      return this.$store.state.manager.language;
    },
  },
  methods: {
    handleScroll(e) {
      if (e.deltaY < 0) {
        this.scdir = 'down';
      }
      if (e.deltaY > 0) {
        this.scdir = 'up';
      }
      e.preventDefault();
      e.stopPropagation();
    },
    scrollY() {
      var slength;
      var plength;
      var pan = this.$refs.box;
      var step = 100;
      var vh = window.innerHeight / 100;
      var vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
      plength = parseInt(pan.offsetHeight / vh);
      plength = plength || parseInt(pan.offsetHeight / vmin);
      slength = parseInt(pan.style.transform.replace('translateY(', ''));
      if (this.scdir === 'up' && Math.abs(slength) < (plength - plength / this.sections)) {
        slength = slength - step;
      } else if (this.scdir === 'down' && slength < 0) {
        slength = slength + step;
      } else if (this.scdir === 'top') {
        slength = 0;
      }

      if (this.hold === false) {
        this.hold = true;
        if (this.scdir === 'up') {
          if (this.lookup < this.sections - 1) this.lookup++;
        }
        else if (this.scdir === 'down') {
          if (this.lookup > 0) this.lookup--;
        }
        pan.style.transform = 'translateY(' + slength + 'vh)';
        setTimeout(() => {
          this.hold = false;
        }, 1000);
      }
    },
    swipeStart(e) {
      var tchs = e.changedTouches[0];
      this.swdir = 'none';
      this.sX = tchs.pageX;
      this.sY = tchs.pageY;
      this.stT = new Date().getTime();
    },
    swipeEnd(e) {
      var pan = this.$refs.box;
      var tchs = e.changedTouches[0];
      this.dX = tchs.pageX - this.sX;
      this.dY = tchs.pageY - this.sY;
      this.elT = new Date().getTime() - this.stT;
      if (this.elT <= this.alT) {
        if (Math.abs(this.dX) >= this.threshold && Math.abs(this.dY) <= this.slack) {
          this.swdir = (this.dX < 0) ? 'left' : 'right';
        } else if (Math.abs(this.dY) >= this.threshold && Math.abs(this.dX) <= this.slack) {
          this.swdir = (this.dY < 0) ? 'up' : 'down';
        }

        if (this.swdir === 'up') {
          this.scdir = this.swdir;
          this.scrollY(pan);
        } else if (this.swdir === 'down') {
          this.scdir = this.swdir;
          this.scrollY(pan);
        }
        e.preventDefault();
        e.stopPropagation();
      }
    },
    beforeEnter(el) {
      el.style.position = 'relative';
      el.style.top = '30vh';
      el.style.opacity = 0;
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 2,
        opacity: 1,
        top: 0,
        ease: 'power2.out',
        stagger: 0.2,
        onComplete: done
      });
    },
    subEnter(el, done) {
      gsap.to(el, {
        delay: 0.6,
        duration: 1.4,
        opacity: 1,
        top: 0,
        ease: 'power2.out',
        stagger: 0.2,
        onComplete: done
      });
    },
    leave(el, done) {
      gsap.to(el, {
        duration: 0.7,
        top: '30vh',
        ease: 'elastic.inOut(2.5, 1)'
      })
      gsap.to(el, {
        duration: 0.2,
        opacity: 0,
        onComplete: done
      });
    },
  },
};
</script>
