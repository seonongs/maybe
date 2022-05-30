<template>
  <b-card>
    <div class="overflow-auto py-2">
      <b-table-simple hover small caption-top responsive>
        <colgroup>
          <col style="width: 10%"/>
          <col style="width: 50%"/>
          <col style="width: 20%"/>
          <col style="width: 30%"/>
        </colgroup>
        <b-thead head-variant="dark">
          <b-tr>
            <b-th :key="header.id" v-for="header in headers">{{ header.text }}</b-th>
            <!--
            <b-th>ID</b-th>
            <b-th>TITLE</b-th>
            <b-th>WRITER</b-th>
            <b-th>DATE</b-th>
            -->
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="item in items" v-bind:key="item.id">
            <b-th class="text-right">{{ item.id }}</b-th>
            <b-td>{{ item.title }}</b-td>
            <b-td>{{ item.writer }}</b-td>
            <b-td>{{ item.createdDate.replace('T', ' ') }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>

      <b-table-simple hover small caption-top responsive>
        <b-thead>
          <b-tr>
            <b-td>
              <b-button squared>WRITE</b-button>
              <b-button squared @click="list">LIST</b-button>
            </b-td>
            <b-td>
              <b-form-input v-model="keyword"></b-form-input>
            </b-td>
            <b-td>
              <b-button squared @click="search">SEARCH</b-button>
            </b-td>
            <b-td variant="secondary" class="text-center"> Total Rows: <b>{{ totalElements }}</b></b-td>
          </b-tr>
        </b-thead>
      </b-table-simple>

      <b-pagination
          v-model="currentPage"
          :total-rows="totalElements"
          :per-page="pageSize"
          align="center"
          page-class="customPage"
      >
      </b-pagination>



    </div>
  </b-card>
</template>

<script>

import {bbsList} from "@/api";
import {BFormInput, BTh, BThead} from "bootstrap-vue-3";

export default {

  name: "BbsListView",
  components: {BFormInput, BThead, BTh},
  data() {
    return {
      items: [],
      pageSize: 5,
      currentPage: 1,
      totalElements: 0,
      keyword: '',
      items1: [],
      headers: [
            {id:1, text:'ID'}
          , {id:2, text:'TITLE'}
          , {id:3, text:'WRITER'}
          , {id:4, text:'DATE'}
      ]
    }
  },
  computed: {},
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

        for(let i = 0; i < this.items.length; i++) {
          this.items1.push({id: this.items[i].id, title: this.items[i].title});
        }

        console.log(11)
        console.log(this.items1);

      }).catch(error => {
        alert(error)
      })
    },
    list() {
      this.keyword = '';
      this.search();
    }
  },

}

</script>

<style>
.customPage.page-item.active .page-link {
  background-color: black;
  border-color: black;
  color: white;
}
.customPage.page-item .page-link {
  background-color: white;
  border-color: black;
  color: black;
}
.customPage.page-link .disabled{
  background-color: white;
  border-color: black;
  color: black;
}
.customPage.active button{
  background-color: white;
  border-color: black;
  color: black;
}
.customPage button {
  background-color: white;
  border-color: black;
  color: black;
}
.customPage disabled{
  background-color: white;
  border-color: black;
  color: black;
}

</style>
