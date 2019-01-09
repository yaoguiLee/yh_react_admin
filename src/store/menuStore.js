import { action } from 'mobx'
import { menus } from '../tools/menuUtils'
class MenuStore {
  constructor() {
    this.menuList = menus
  }
  
  @action getMenuList() {
    return this.menuList
  }
}

export default new MenuStore()