<template>
  <div class="header">
    <b-button-group>
      <router-link to="/"><b-button class="mx-1" variant="outline-secondary">Home</b-button></router-link>
      <router-link to="/board"><b-button class="mx-1" variant="outline-secondary">Board</b-button></router-link>
      <router-link to="/"><b-button class="mx-1" variant="outline-secondary">Login</b-button></router-link>
    </b-button-group>
  </div>
</template>

<script>

export default {
  name: "HeaderCom",
  methods: {
  }
}
</script>

<style scoped>
.header {
  color: #666;
  /*border: 1px solid #211f1f;*/
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
