import AppSvg from "@/components/app-svg/index.vue";
export function useRenderMenuTitle() {
  const renderMenuTitle = (meta) => {
    const { title = "Please set title", icon } = meta;

    return icon ? (
      <>
        {/* <div class="nav-bar"></div> */}
        {/* <Icon icon={meta.icon}></Icon> */}
        <AppSvg class="menu-icon" icon-name={meta.icon} size="16" />
        <span class="v-menu__title overflow-hidden overflow-ellipsis whitespace-nowrap">
          {title}
        </span>
      </>
    ) : (
      <>
        <div class="nav-bar"></div>
        <span class="v-menu__title overflow-hidden overflow-ellipsis whitespace-nowrap">
          {title}
        </span>
      </>
    );
  };

  return {
    renderMenuTitle,
  };
}
