const state = () => ([
   {
      name: 'Folder1',
      projects: [
         {
            name: 'Group1TestProject1',
            color: 'royalblue',
            path: '/test1',
            icon: 'check'
         },
         {
            name: 'Group1TestProject2',
            color: 'red',
            path: '/test2',
            icon: 'star'
         },
         {
            name: 'Group1TestProject3',
            color: 'green',
            path: '/test3',
            icon: 'inbox'
         },
      ]
   },

   {
      name: 'Folder2',
      projects: [
         {
            name: 'Group2TestProject1',
            color: 'royalblue',
            path: '/test1',
            icon: 'check'
         },
         {
            name: 'Group2TestProject2',
            color: 'red',
            path: '/test2',
            icon: 'star'
         },
         {
            name: 'Group2TestProject3',
            color: 'green',
            path: '/test3',
            icon: 'inbox'
         },
      ]
   },

   {
      name: 'Folder3',
      projects: [
         {
            name: 'Group3TestProject1',
            color: 'royalblue',
            path: '/test1',
            icon: 'check'
         },
         {
            name: 'Group3TestProject2',
            color: 'red',
            path: '/test2',
            icon: 'star'
         },
         {
            name: 'Group3TestProject3',
            color: 'green',
            path: '/test3',
            icon: 'inbox'
         },
      ]
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