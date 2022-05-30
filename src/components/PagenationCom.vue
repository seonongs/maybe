<template>
  <b-card>
    <div class="overflow-auto py-2">
      <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          first-text="⏮"
          prev-text="⏪"
          next-text="⏩"
          last-text="⏭"
          class="mt-4"
      ></b-pagination>
      Current page : {{ currentPage }}
    </div>
  </b-card>
</template>

<script>

export default {
  name: "PagenationCom",
  props: ['rows', 'perPage'],
  data() {
    return {
      currentPage: '',
    }
  },
}
</script>

<style scoped>

</style>
