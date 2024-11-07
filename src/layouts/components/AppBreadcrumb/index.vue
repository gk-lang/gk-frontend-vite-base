<script lang="jsx">
import { useRouter } from "vue-router";
import {
  ref,
  watch,
  computed,
  unref,
  defineComponent,
} from "vue";
import { ElBreadcrumb, ElBreadcrumbItem } from "element-plus";
import { filter, treeToList } from "@/utils/tree";
import { usePermissionStore } from "@/store/modules/permission";
import { useUserStoreWithOut } from "@/store/modules/user";
import AppSvg from "@/components/app-svg/index.vue";

export default defineComponent({
  name: "Breadcrumb",
  setup() {
    const router = useRouter();
    const { currentRoute } = router;
    const levelList = ref([]);

    const userStore = useUserStoreWithOut();
    const permissionStore = usePermissionStore();

    const menuRouters = computed(() => {
      const roleMenuList = userStore.getRoleMenuList;
      return roleMenuList;
    });

    const getBreadcrumb = () => {
      const currentPath = currentRoute.value.matched.slice(-1)[0].path;
      levelList.value = filter(unref(menuRouters), (node) => {
        return node.path === currentPath;
      });
      if (!levelList.value?.length) {
        // const allRoutes = router.getRoutes();
        // levelList.value = filter(allRoutes, (node) => {
        //   return node.path === currentPath;
        // });
        levelList.value = [currentRoute.value]
      }
    };

    const renderBreadcrumb = () => {
      const breadcrumbList = treeToList(unref(levelList));
      return breadcrumbList.map((v) => {
        const disabled = !v.redirect || v.redirect === "noredirect";
        const meta = v.meta;
        return (
          <ElBreadcrumbItem to={{ path: disabled ? "" : v.path }} key={v.name}>
            {meta?.icon ? (
              <>
                <AppSvg class="menu-icon" icon-name={v.meta.icon} size="16" />
                {v?.meta?.title || ""}
              </>
            ) : (
              v?.meta?.title || ""
            )}
          </ElBreadcrumbItem>
        );
      });
    };

    watch(
      () => currentRoute.value,
      (route) => {
        if (route.path.startsWith("/redirect/")) {
          return;
        }
        getBreadcrumb();
      },
      {
        immediate: true,
      }
    );

    return () => (
      <ElBreadcrumb separator="/">
        {/* <TransitionGroup appear enter-active-class="animate__animated animate__fadeInRight">
          {renderBreadcrumb()}
        </TransitionGroup> */}
        {renderBreadcrumb()}
      </ElBreadcrumb>
    );
  },
});
</script>
