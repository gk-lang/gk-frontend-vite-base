// import { pathResolve } from '@/utils/routerHelper'
import { isUrl } from '@/utils/is'
const pathResolve = (parentPath, path) => {
  if (isUrl(path)) return path;
  const childPath = path.startsWith("/") || !path ? path : `/${path}`;
  return `${parentPath}${childPath}`.replace(/\/\//g, "/").trim();
};
export const filterBreadcrumb = (
  routes,
  parentPath = ''
) => {
  const res = []

  for (const route of routes) {
    const meta = route?.meta
    if (meta.hidden && !meta.canTo) {
      continue
    }

    const data =
      !meta.alwaysShow && route.children?.length === 1
        ? { ...route.children[0], path: pathResolve(route.path, route.children[0].path) }
        : { ...route }

    // data.path = pathResolve(parentPath, data.path)

    if (data.children) {
      data.children = filterBreadcrumb(data.children, data.path)
    }
    if (data) {
      res.push(data)
    }
  }
  return res
}