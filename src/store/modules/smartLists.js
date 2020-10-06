const state = () => ([
   {
      path: '/inbox', 
      name: 'Inbox', 
      icon: 'inbox',
      totalCount: 7,
      overdue: 2
   },
   {
      path: '/important',
      name: 'Important',
      icon: 'star',
      totalCount: 7,
      overdue: 2
   },
   {
      path: '/today',
      name: 'Today',
      icon: 'calendar',
      totalCount: 7,
      overdue: 2
   },
   {
      path: '/upcoming',
      name: 'Upcoming',
      icon: 'calendar-alt',
      totalCount: 7,
      overdue: 2
   },
   {
      path: '/done',
      name: 'Done',
      icon: 'check',
      totalCount: 7,
      overdue: 2
   }
])

const getters = {}

const actions = {}

const mutations = {}

export default {
   namespaced: true,
   state,
   getters,
   actions,
   mutations
}