<template>
  <HeaderCom></HeaderCom>
  <router-view></router-view>
  <FooterCom></FooterCom>
</template>

<script>

import FooterCom from "@/components/FooterCom";
import HeaderCom from "@/components/HeaderCom";

export default {
  name: 'App',
  components: {
    FooterCom,
    HeaderCom,
  }
}
</script>

<style>
</style>
