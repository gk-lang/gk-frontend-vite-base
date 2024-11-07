import { ElSubMenu, ElMenuItem } from "element-plus";
import { hasOneShowingChild } from "../helper";
import { isUrl } from "@/utils/is";
import { useRenderMenuTitle } from "./useRenderMenuTitle";
// import { pathResolve } from '@/utils/routerHelper'
const pathResolve = (parentPath, path) => {
  if (isUrl(path)) return path;
  const childPath = path.startsWith("/") || !path ? path : `/${path}`;
  return `${parentPath}${childPath}`.replace(/\/\//g, "/").trim();
};
const { renderMenuTitle } = useRenderMenuTitle();

export function useRenderMenuItem() {
  const renderMenuItem = (routers, parentPath = "/") => {
    return routers
      .filter((v) => !v.meta?.hidden)
      .map((v) => {
        const meta = v.meta ?? {};
        if (!v.children?.length) {
          return (
            <ElMenuItem index={v.path}>
              {{
                default: () => renderMenuTitle(meta),
              }}
            </ElMenuItem>
          );
        } else {
          return (
            <ElSubMenu index={v.path}>
              {{
                title: () => renderMenuTitle(meta),
                default: () => renderMenuItem(v.children, v.path),
              }}
            </ElSubMenu>
          );
        }
      });
  };

  return {
    renderMenuItem,
  };
}
