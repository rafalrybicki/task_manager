const state = () => ({
   grouped: [
      {
         name: 'Group1',
         projects: [
            {
               name: 'Group1TestProject1',
               color: 'royalblue',
               path: '/test1'
            },
            {
               name: 'Group1TestProject2',
               color: 'red',
               path: '/test2'
            },
            {
               name: 'Group1TestProject3',
               color: 'green',
               path: '/test3'
            },
         ]
      },

      {
         name: 'Group2',
         projects: [
            {
               name: 'Group2TestProject1',
               color: 'royalblue',
               path: '/test1'
            },
            {
               name: 'Group2TestProject2',
               color: 'red',
               path: '/test2'
            },
            {
               name: 'Group2TestProject3',
               color: 'green',
               path: '/test3'
            },
         ]
      }
   ],

   ungrouped: [
      {
         name: 'TestProject1',
         color: 'royalblue',
         path: '/test'
      },
      {
         name: 'TestProject2',
         color: 'red',
         path: '/test2'
      },
      {
         name: 'TestProject3',
         color: 'green',
         path: '/test3'
      }
   ]
})

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