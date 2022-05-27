<template>
  <div class="header">
    <b-card>
      <router-link to="/"><b-card-text>Home</b-card-text></router-link>
    </b-card>

  </div>
</template>

<script>

import {BCardText} from "bootstrap-vue-3";
export default {
  name: "HeaderCom",
  components: {BCardText},
  methods: {
  }
}
</script>

<style scoped>
.header {
  color: #666;
  border: 1px solid #211f1f;
}

a:link { /*링크 방문 전*/
  color: #244781;
}

a:visited { /*링크를 방문한 이후*/
  color: #244781;
}

a:hover { /*마우스를 올려놓을 때*/
  color: green;
}

a:active { /*클릭하는 순간*/
  color: yellow;
}
a {
  text-decoration: none;
}

</style>
