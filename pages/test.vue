<template class="main__template">
  <div class="test__box">
    <h1>이곳은 테크니컬 테스트 페이지입니다.</h1>
    <div>
      <v-file-input label="파일 업로드 테스트" @change="onChange($event)"/>
    </div>
    <div class="output">
      <v-textarea background-color="grey lighten-2" color="black" rows="25" row-height="25" outlined readonly />
    </div>
  </div>
</template>

<style scoped>
.main__template {
  width: 100%;
  height: 100%;
}
.test__box {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.output {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  border: 1px solid black;
  margin: 0 50px;
  padding: 0 50px;
}
</style>

<script>
export default {
  layout: 'TestLayout',
  data() {
    return {
      
    };
  },
  methods: {
    async onChange(e) {
      const fileFormData = new FormData();
      if (e != null) {
        // fileFormData.append('fileKey', e);
      } else {
        console.log("e is null");
      }
    }
  }
};
</script>
