export const menus = [
  {
    title: '首页',
    icon: 'home',
    path: '/home'
  },
  {
    title: '输入组件',
    icon: 'edit',
    path: '/home/entry',
    children: [
      {
        path: '/home/entry/form',
        title: '表单',
        icon: '',
        children: [
          { path: '/home/entry/form/basic-form', title: '基础表单', icon: '' }
        ]
      },
      { path: '/home/entry/upload', title: '上传', icon: '' }
    ]
  }
]
export function getBreadcrumb(menus, path, targetList) {
  if (menus && menus.length > 0) {
    for(let item of menus) {
      if (item.path === path) {
        targetList.push(item);
        continue;
      } else {
        if (item.children && item.children.length > 0) {
          if (path.includes(item.path)) {
            targetList.push({title: item.title, path: item.path});
            getBreadcrumb(item.children, path, targetList);
          }
        }
      }
    }
  }
  return targetList
}

export function getPath(pathname) {
  var selectPaths = []
  var openPaths = []
  const rank = pathname.split('/')
  switch (rank.length) {
    case 2:
      selectPaths = pathname
      break;
    case 5 : //三级目录，要展开两个subMenu
    selectPaths = [pathname]
    openPaths = [rank.slice(0, 3).join('/'), rank.slice(0, 4).join('/')]
      break;
    default:
    selectPaths = [pathname]
    openPaths = [pathname.substr(0, pathname.lastIndexOf('/'))]
  }
  const path =  { selectPaths: selectPaths, openPaths: openPaths}
  return path
}