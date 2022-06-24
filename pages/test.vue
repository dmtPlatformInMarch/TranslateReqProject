<template class="main__template">
  <div class="test__box">
    <h1>이곳은 테크니컬 테스트 페이지입니다.</h1>
    <div class="test__up">
      <v-file-input label="파일 업로드 테스트" @change="onChange($event)" @click:clear="onClearFile" />
    </div>
    <div class="test__down">
      <v-btn 
        block 
        :href="
          ( this.$store.state.test.file != undefined ) ?
          `http://localhost:3085/test/file/download/${this.$store.state.test.file.name}`
          : ''
        "
        :disabled="this.$store.state.test.file == undefined"
      >
        다운로드
        <v-icon right>mdi-file</v-icon>
      </v-btn>
    </div>
    <div class="output">
      <v-textarea 
        v-model="watchFileText"
        background-color="grey lighten-2" 
        color="black" 
        rows="25" 
        row-height="25" 
        outlined 
        readonly
      />
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
.test__up {
  margin: 0 50px;
}
.test__down {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 50px;
}
.output {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  border: 1px solid black;
  margin: 0 50px;
  padding: 25px;
}
</style>

<script>
export default {
  layout: 'TestLayout',
  data() {
    return {
      // readToExtract: S3에 파일이 업로드 완료됨을 알리는 트리거
      // 이게 없다면 파일을 올리면서 올라가지도 않을 파일을 불러옴.
      readToExtract: false,
    };
  },
  computed: {
    watchFileText: function() {
      return this.$store.state.test.fileText;
    }
  },
  watch: {
    async readToExtract(value) {
      try {
        if (value) {
          await this.$store.dispatch('test/extract');
          this.readToExtract = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    watchFileText(value) {
      
    }
  },
  methods: {
    async onChange(e) {
      const fileFormData = new FormData();
      if (e != null) {
        try {
          fileFormData.append('fileKey', e);
          const preSignedUrl = await this.$store.dispatch('test/signedURL', fileFormData);
          const response = await fetch(
            new Request(preSignedUrl, {
              method: "PUT",
              headers: {
                'Content-Type': 'application/octest-stream',
                'Content-Disposition': `attachment; filename=${encodeURI(e.name)}`
              },
              body: e,
            }),
          );
          if (response.status === 200) {
            this.readToExtract = true;
          } else {
            // onError!!
            console.log("Upload Error");
            this.readToExtract = false;
            return;
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("e is null");
      }
    },
    onClearFile() {
      this.$store.dispatch('test/deleteFile');
      this.readToExtract = false;
    }
  }
};
</script>
