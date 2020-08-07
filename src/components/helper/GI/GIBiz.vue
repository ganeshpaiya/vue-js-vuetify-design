  <template>
  <v-list-group prepend-icon="" :value="false" >
                <v-list-tile slot="activator">
                    <v-icon>mdi mdi-car</v-icon>
                   
                    <v-list-tile-title>General & Group Biz</v-list-tile-title>
                </v-list-tile>
                <v-list-tile v-for="(gibiz, i) in gibizs" :key="i" :to="gibiz.to" :active-class="color" avatar class="v-list-item">
                    <v-list-tile-title v-text="gibiz.text" />
                </v-list-tile>
            </v-list-group>
            </template>

            <script>

import {
    mapMutations,
    mapState
} from 'vuex'

export default {
  
    props: {
        opened: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        logo: 'favicon.ico',
          active: false,
       
         gibizs: [

            
            // {
            //   to: '/',
            //   icon: 'mdi-view-dashboard',
            //   text: 'Dashboard'
            // },
            {    
                to: '/GI/Upload',
                icon: 'mdi-account',
                text: 'Upload'
            },
            {
                to: '/table-list',
                icon: 'mdi-clipboard-outline',
                text: 'Summary'
            },
            {
                to: '/typography',
                icon: 'mdi-format-font',
                text: 'Received'
            },
            {
                to: '/icons',
                icon: 'mdi-chart-bubble',
                text: 'Payout'
            },
            {
                to: '/maps',
                icon: 'mdi-map-marker',
                text: 'Payment'
            },
            {
                to: '/notifications',
                icon: 'mdi-bell',
                text: 'Paid'
            }
        ]
        //  LifeBizs: [
        //   {
        //     to: '/',
        //     icon: 'mdi-view-dashboard',
        //     text: 'Dashboard'
        //   },
        //  ]
    }),
    computed: {
        ...mapState('app', ['image', 'color']),
        inputValue: {
            get() {
                return this.$store.state.app.drawer
            },
            set(val) {
                this.setDrawer(val)
            }
        },
        items() {
            return this.$t('Layout.View.items')
        }
    },
    methods: {
        ...mapMutations('app', ['setDrawer', 'toggleDrawer'])
    }
}
</script>

<style lang="scss">
#app-drawer {
    .v-list__tile {
        border-radius: 4px;

        &--buy {
            margin-top: auto;
            margin-bottom: 17px;
        }
    }

    .dark-blue {
        background-color: #093960;
    }
}
</style>
