const state = () => ({
   newFolder: false,
   newProject: false,
   newProjectFolderId: null,
   folders: [
      {
         name: 'Folder1',
         id: 1,
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
         id: 2,
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
         id: 3,
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
   ]
})

const getters = {}

const actions = {}

const mutations = {
   toggleNewFolder (state) {
      state.newFolder = !state.newFolder
   },
   addNewFolder(state, name) {
      state.folders = [
         ...state.folders, 
         {
            name,
            id: state.folders.length,
            projects: []
         }
      ]
      state.newFolder = false
   },
   addProjectToFolder (state, payload) {
      const index = state.folders.findIndex(folder => folder.id === state.newProjectFolderId)
      state.folders[index].projects.push(payload)
      state.newProject = false
      state.newProjectFolderId = null
   },
   toggleNewProject (state, folderId = null) {
      state.newProject = !state.newProject
      state.newProjectFolderId = folderId
   }
}

export default {
   state,
   getters,
   actions,
   mutations
}