<template>
<v-card class="mx-auto" width="300">
    <v-navigation-drawer id="app-drawer" v-model="inputValue" app dark floating persistent mobile-break-point="991" width="260">
        <v-layout class="fill-height dark-blue" tag="v-list" column>
            <v-list-tile avatar>
                <v-list-tile-avatar color="white">
                    <v-img :src="logo" height="34" contain />
                </v-list-tile-avatar>
                <v-list-tile-title class="title">
                    ganesh
                </v-list-tile-title>
            </v-list-tile>
            <!-- <v-divider/> -->
            <v-list-tile active-class="color" to="/">
               
                <v-list-tile-title>
                    <v-icon>fa fa-th-large</v-icon>
                    Dashboard
                </v-list-tile-title>
            </v-list-tile>
            
                <LifeBiz></LifeBiz>
                  
                <GIBiz></GIBiz>
                

           

        </v-layout>
    </v-navigation-drawer>
</v-card>
</template>

<script>
import LifeBiz from '../helper/LI/LifeBiz'
import GIBiz from '../helper/GI/GIBiz'
import LI_CompanyName from '../helper/LI/LI_CompanyName'
import {
    mapMutations,
    mapState
} from 'vuex'

export default {
    components: {
    LifeBiz,
    GIBiz,
    LI_CompanyName
  },
    props: {
        opened: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        // logo: 'favicon.ico',
        //   active: false,
        // lifebizs: [

            
        //     // {
        //     //   to: '/',
        //     //   icon: 'mdi-view-dashboard',
        //     //   text: 'Dashboard'
        //     // },
        //     {    
        //         to: '/LI/Upload',
        //         icon: 'mdi-account',
        //         text: 'Upload'
        //     },
        //     {
        //         to: '/table-list',
        //         icon: 'mdi-clipboard-outline',
        //         text: 'Table List'
        //     },
        //     {
        //         to: '/typography',
        //         icon: 'mdi-format-font',
        //         text: 'Typography'
        //     },
        //     {
        //         to: '/icons',
        //         icon: 'mdi-chart-bubble',
        //         text: 'Icons'
        //     },
        //     {
        //         to: '/maps',
        //         icon: 'mdi-map-marker',
        //         text: 'Maps'
        //     },
        //     {
        //         to: '/notifications',
        //         icon: 'mdi-bell',
        //         text: 'Notifications'
        //     }
        // ],
        //  gibizs: [

            
        //     // {
        //     //   to: '/',
        //     //   icon: 'mdi-view-dashboard',
        //     //   text: 'Dashboard'
        //     // },
        //     {    
        //         to: '/GI/Upload',
        //         icon: 'mdi-account',
        //         text: 'Upload'
        //     },
        //     {
        //         to: '/table-list',
        //         icon: 'mdi-clipboard-outline',
        //         text: 'Table List'
        //     },
        //     {
        //         to: '/typography',
        //         icon: 'mdi-format-font',
        //         text: 'Typography'
        //     },
        //     {
        //         to: '/icons',
        //         icon: 'mdi-chart-bubble',
        //         text: 'Icons'
        //     },
        //     {
        //         to: '/maps',
        //         icon: 'mdi-map-marker',
        //         text: 'Maps'
        //     },
        //     {
        //         to: '/notifications',
        //         icon: 'mdi-bell',
        //         text: 'Notifications'
        //     }
        // ]
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
