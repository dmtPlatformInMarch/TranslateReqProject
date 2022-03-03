const LANGUAGES_KO = ['한국어', '영어', '중국어(간체)', '중국어(번체)', '일본어', '독일어', '프랑스어', '스페인어', '포르투갈어', '이탈리아어', '러시아어', '베트남어', '기타 언어'];
const LANGUAGES_EN = ['Korean', 'English', 'Chinese(Simplified)', 'Chinese(Traditional)', 'Japanese', 'German', 'French', 'Spanish', 'Portuguese', 'Italian', 'Russian', 'Vietnamese', 'Other languages'];
const FIELDS_KO = ['일반', '비즈니스', '경제/경영', '법률/행정', '정치/외교', 'IT/정보통신', '기술/산업', '의료/바이오', '인문/사회', '엔터테인먼트(미디어,컨텐츠)', '스포츠/예술', '홈페이지/웹사이트'];
const FIELDS_EN = ['Common', 'Business', 'Economy/Management ', 'Legal/Administrative', 'Politics/Diplomacy ', 'IT/IC ', 'Technology/Industry ', 'Medical/Bio ', 'Humanities/Society', 'Entertainment', 'Sports/Arts', 'Homepage/Web'];

export default ({ app, store }, inject) => {
    inject('LANGUAGES_KO', LANGUAGES_KO)
    inject('LANGUAGES_EN', LANGUAGES_EN)
    inject('FIELDS_KO', FIELDS_KO)
    inject('FIELDS_EN', FIELDS_EN)
    // 기본 비용 계산 알고리즘 (분량은 따로 계산해서 곱해줘야함)
    inject('CALC_COST', (req, grant, field) => {
        let UNIT_COST = 1;
        // 언어 선택
        switch (req) {
            case '한국어':
            case 'Korean':
                switch (grant) {
                    case '영어':
                    case 'English':
                        UNIT_COST = 180;
                        break;
                    case '중국어(간체)':
                    case 'Chinese(Simplified)':
                    case '일본어':
                    case 'Japanese':
                        UNIT_COST = 150;
                        break;
                    case '중국어(번체)':
                    case 'Chinese(Traditional)':
                        UNIT_COST = 200;
                        break;
                    case '독일어':
                    case 'German':
                    case '프랑스어':
                    case 'French':
                    case '스페인어':
                    case 'Spanish':
                        UNIT_COST = 230;
                        break;
                    case '포르투갈어':
                    case 'Portuguese':
                    case '이탈리아어':
                    case 'Italian':
                    case '러시아어':
                    case 'Russian':
                    case '베트남어':
                    case 'Vietnamese':
                        UNIT_COST = 280;
                        break;
                    case '기타 언어':
                    case 'Other languages':
                        UNIT_COST = 1;
                        break;
                    default:
                        UNIT_COST = 0;
                }
                break;
            case '영어':
            case 'English':
                UNIT_COST = 100;
                break;
            case '중국어(간체)':
            case 'Chinese(Simplified)':
                UNIT_COST = 40;
                break;
            case '중국어(번체)':
            case 'Chinese(Traditional)':
                UNIT_COST = 60;
                break;
            case '일본어':
            case 'Japanese':
                UNIT_COST = 40;
                break;
            case '독일어':
            case 'German':
            case '프랑스어':
            case 'French':
            case '스페인어':
            case 'Spanish':
                UNIT_COST = 200;
                break;
            case '포르투갈어':
            case 'Portuguese':
            case '이탈리아어':
            case 'Italian':
            case '러시아어':
            case 'Russian':
            case '베트남어':
            case 'Vietnamese':
                UNIT_COST = 250;
                break;
            case '기타 언어':
            case 'Other languages':
                UNIT_COST = 1;
                break;
            default:
                UNIT_COST = 0;
        }
        // 분야
        switch (field) {
            case '비즈니스':
            case 'Business':
            case '경제/경영':
            case 'Economy/Management':
            case 'IT/정보통신':
            case 'IT/IC':
            case '인문/사회':
            case 'Humanities/Society':
                UNIT_COST = UNIT_COST * 1.3;
                break;
            case '기술/산업':
            case 'Technology/Industry':
            case '엔터테인먼트(미디어,컨텐츠)':
            case 'Entertainment':
            case '스포츠/예술':
            case 'Sports/Arts':
            case '홈페이지/웹사이트':
            case 'Homepage/Web':
                UNIT_COST = UNIT_COST * 1.6;
                break;
            case '법률/행정':
            case 'Legal/Administrative':
            case '정치/외교':
            case 'Politics/Diplomacy':
            case '의료/바이오':
            case 'Medical/Bio':
                UNIT_COST = UNIT_COST * 1.8;
                break;
            default:
                UNIT_COST;
        }
        store.commit('requests/setExcost', UNIT_COST);
    })
}