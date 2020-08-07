
<template>
 
      
          <v-card-text class="grey lighten-3">
            <v-toolbar-title>Company Name:</v-toolbar-title>
        <v-autocomplete
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          color="black"
          hide-no-data
          hide-selected
          item-text="BrokerName"
          item-value="InsuranceBrokerID"
          placeholder="Start typing to Search"
          return-object
        ></v-autocomplete>
         </v-card-text>
    
     
</template>

<script>
// Lib imports
import axios from 'axios'
export default {
  data: () => ({
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null,
  }),

  computed: {
    fields () {
      if (!this.model) return []

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || 'n/a',
        }
      })
    },
    items () {
      return this.entries.map(entry => {
        const BrokerName = entry.BrokerName.length > this.descriptionLimit
          ? entry.BrokerName.slice(0, this.descriptionLimit) + '...'
          : entry.BrokerName

        return Object.assign({}, entry, { BrokerName })
      })
    },
  },

   mounted() {
  axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(response => console.log(response))
},
    // created(){
    // this.$http.get('https://commtracking2uat.fa.com.sg/CommonScript/api/testing').then(function(data)
    // {
    //     console.log(JSON.parse(JSON.stringify(data)));
    // }).catch(err => {
    //       console.log(err)
    //      })
    // },
  watch: {
    search (val) {
      // Items have already been loaded
      if (this.items.length > 0) return

      // Items have already been requested
      if (this.isLoading) return

      this.isLoading = true
     
     
          axios.get('https://commtracking2uat.fa.com.sg/CommonScript/api/testing')
          .then(response => {
            console.log(response.data.results);
          //this.data_results = response.data.value;
         })
         .catch(err => {
          console.log(err)
         })
      
      // Lazily load input items {params: {searchquery: this.searchquery}}
      // fetch('https://commtracking2uat.fa.com.sg/CommonScript/api/testing')
      //   .then(response => response.json())
        //.then‌​(data=>{ console.log(data); })
        // .then(rsp => {
        //      console.log(rsp.response)
          // const { status, response } = rsp
          // this.InsuranceBrokerID = InsuranceBrokerID
          // this.BrokerName = BrokerName
          // .then(rsp=>rsp.json())

    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    //     .finally(() => (this.isLoading = false))
     },
  },
}
</script>