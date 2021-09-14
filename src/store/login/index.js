export default {
  state: {
    isLogin: false,
  },
  mutations: {
    changeLoginState(state) {
      console.log(state, '++')
      state.isLogin = true
    },
    exitLoginState(state) {
      state.isLogin = false
      // console,localStorage('qqqqqqq')
    }
  },
  actions: {
    // loginFun({commit, state  }, data) {
    //   console.log(state,'');
    //   console.log(data,'');
    //   const P = new Promise((result, reject) => {
    //     setTimeout(() => {
    //       const dataObj = { success: true, error: { msg: "出错啦" } };
    //       if (dataObj.success) {
    //         result(dataObj);
    //       } else {
    //         reject(dataObj.error)
    //       }
    //     }, 1000);
    //   });
    //   return P
    // },

    loginFun({state, commit}, data) {
      // setTimeout(() => {
        let pro = new Promise((result, reject)=>{
          let obj = { suc: true, error: { mess: '' }, data: null }
          if (obj.suc) {
            commit('changeLoginState')
            window.localStorage.setItem('isLogin',true)
            result(obj)
          } else {
            reject(obj.error)
          }
        })
        return pro
      // },0)
    },
    exitFun({state, commit}, data) {
      let p = new Promise((res, rej) => {
        let obj = { suc: true, error: { mess: '' } }
        if (obj.suc) {
          commit('exitLoginState')
          window.localStorage.clear()
          res(obj)
        }else {
          reject(obj.error)
        }
      })
      return p
    }
  },
  modules: {},
};
