<template>
 <v-container
    fill-height
    fluid
    grid-list-xl
  >
   <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
    <v-expansion-panel>
      <v-expansion-panel-content style="cursor: pointer;background-color: #1c84c6; color:white;">
        <div slot="header" >
          <v-layout row>
            <v-flex xs8>
              Filter Options&nbsp;
              <v-icon slot="activator" class="color">$vuetify.icons.expand</v-icon>
            </v-flex>
            
          </v-layout>
        </div>
        
        <v-card>
          <v-card-text class="grey lighten-3">
            <v-toolbar-title>Company Name:</v-toolbar-title>
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        item-value="id"
        class="mx-2"
        flat
        hide-no-data
        hide-details
        label="Select an Option"
        solo-inverted
      ></v-autocomplete>

      
      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    </v-flex>
     <v-flex
        md12
      >
      <v-expansion-panel>
      <v-expansion-panel-content style="cursor: pointer;background-color:rgb(9, 57, 96); color:white;">
        <div slot="header" >
          <v-layout row>
            <v-flex xs8>
            Upload File Options&nbsp;
              <v-icon slot="activator" class="color">$vuetify.icons.expand</v-icon>
            </v-flex>
            
          </v-layout>
        </div>
        
        <v-card>
          <v-card-text class="grey lighten-3">
           <LICompanyName></LICompanyName>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
       </v-flex>
    </v-layout>
 </v-container>

  <!-- <v-container fluid 
    grid-list-xl
    fill-height>
    <v-layout
      justify-center
      align-center
    >
      <v-flex xs12>
         
        <material-card
          color="blue">
 
    <div>
    <div class="d-flex">
      <v-checkbox
        v-model="disabled"
        label="Disabled"
      ></v-checkbox>
    </div>

   
          
        </material-card> 
      </v-flex>
    </v-layout>
  </v-container> -->
</template>

<script>
import LICompanyName from '@/components/helper/LI/LI_CompanyName'
 export default {
    components: {
   
    LICompanyName
  },
    data () {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Federated States of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Island',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
      ],
    }
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections (v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
  },
 }
//   data: () => ({
//     color: null,
//     colors: [
//       'purple',
//       'info',
//       'success',
//       'warning',
//       'error'
//     ],
//     top: true,
//     bottom: false,
//     left: false,
//     right: false,
//     snackbar: false
//   }),

//   methods: {
//     snack (...args) {
//       this.top = false
//       this.bottom = false
//       this.left = false
//       this.right = false

//       for (const loc of args) {
//         this[loc] = true
//       }

//       this.color = this.colors[Math.floor(Math.random() * this.colors.length)]

//       this.snackbar = true
//     }
//   }
//}
</script>