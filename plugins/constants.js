const LANGUAGES_KO = ['한국어', '영어', '중국어(간체)', '중국어(번체)', '일본어', '독일어', '프랑스어', '스페인어', '포르투갈어', '이탈리아어', '러시아어', '베트남어', '기타 언어'];
const LANGUAGES_EN = ['Koran', 'English', 'Chinese(Simplified)', 'Chinese(Traditional)', 'Japanese', 'German', 'French', 'Spanish', 'Portuguese', 'Italian', 'Russian', 'Vietnamese', 'Other languages'];
const FIELDS_KO = ['일반', '비즈니스', '경제/경영', '법률/행정', '정치/외교', 'IT/정보통신', '기술/산업', '의료/바이오', '인문/사회', '엔터테인먼트(미디어,컨텐츠)', '스포츠/예술', '홈페이지/웹사이트'];
const FIELDS_EN = ['Common', 'Business', 'Economy/Management ', 'Legal/Administrative', 'Politics/Diplomacy ', 'IT/IC ', 'Technology/Industry ', 'Medical/Bio ', 'Entertainment', 'Sports/Arts', 'Homepage/Web'];
const EX_COST = 0;

export default (context, inject) => {
    inject('LANGUAGES_KO', LANGUAGES_KO)
    inject('LANGUAGES_EN', LANGUAGES_EN)
    inject('FIELDS_KO', FIELDS_KO)
    inject('FIELDS_EN', FIELDS_EN)
    inject('CALC_COST', (req, grant, words) => {
        // 비용 계산 알고리즘
        if (req) { }
        else EX_COST = 0;
    })
}