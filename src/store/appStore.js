import {observable, action} from 'mobx'

class AppStore {
  @observable users = []  //模拟用户数据库
  @observable loginUser = {}  //当前登录用户信息

  @action initUsers() {
    const localUsers = localStorage['users']?JSON.parse(localStorage['users']):[]
    this.users = [{username: 'admin', password: 'admin'},...localUsers]
  }
}

export default new AppStore()