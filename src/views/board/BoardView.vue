<template>
  <b-card>
    <div class="overflow-auto py-2">


      <b-table
          id="my-table"
          :items="items"
          :per-page="pageSize"
          :current-page="currentPage"
          small
      ></b-table>
      <b-pagination
          v-model="currentPage"
          :total-rows="totalElements"
          :per-page="pageSize"
          class="mt-4"
          aria-controls="my-table"
          align="center"
      >
      </b-pagination>
      Current page : {{ currentPage }}
    </div>
  </b-card>
</template>

<script>

import {bbsList} from "@/api";

export default {

  name: "BbsListView",
  data() {
    return {
      items: [],
      pageSize: 5 ,
      currentPage: 1,
      totalElements: 0,
      keyword: '',
    }
  },
  computed: {

  },
  watch: {
    currentPage(newValue) {
      this.currentPage = newValue;
      this.search();
    }
  },
  created() {
    this.search();
  },
  methods: {
    search() {

      bbsList(this.currentPage, this.pageSize, this.keyword).then(response => {
        if (this.pageSize > response.data.totalElements) {
          this.pageSize = response.data.totalElements;
        }



        this.items = response.data.content;
        this.pageSize = response.data.size;

        this.totalElements = response.data.totalElements;
        console.log("R data: ", response.data)
        console.log(this.currentPage)
      }).catch(error => {
        alert(error)
      })
    },

  },


}

</script>
