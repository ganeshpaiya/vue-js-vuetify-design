<template>

<v-list-group prepend-icon="" :value="false" >
                <v-list-tile slot="activator">
                    <v-icon></v-icon>
                    <!-- <i class="fa fa-heartbeat"></i> -->
                    <v-list-tile-title>Life Biz</v-list-tile-title>
                </v-list-tile>
                <v-list-tile v-for="(lifebiz, i) in lifebizs" :key="i" :to="lifebiz.to" :active-class="color" avatar class="v-list-item">
                    <!-- <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action> -->
                    <v-list-tile-title v-text="lifebiz.text" />
                </v-list-tile>
            </v-list-group>

            </template>
            
            <script>
// Utilities
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
        lifebizs: [

            
            // {
            //   to: '/',
            //   icon: 'mdi-view-dashboard',
            //   text: 'Dashboard'
            // },
            {    
                to: '/LI/Upload',
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
