/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/LI/Upload',
    name: 'LI Upload Page',
    view: 'LI/Upload'
  },
  {
    path: '/GI/Upload',
    name: 'GI Upload Page',
    view: 'GI/Upload'
  },
  {
    path: '/table-list',
    name: 'Summary',
    view: 'TableList'
  },
  {
    path: '/typography',
    name:'Received',
    view: 'Typography'
  },
  {
    path: '/icons',
    name:'Payout',
    view: 'Icons'
  },
  {
    path: '/maps',
    name:'Payment',
    view: 'Maps'
  },
  {
    path: '/notifications',
    name:'PaidS',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  }
]
