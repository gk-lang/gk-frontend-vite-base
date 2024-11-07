// import variables from "@/styles/variables.scss";

export const useDesign = () => {
  const lessVariables = {
    namespace:''
  };

  /**
   * @param scope 类名
   * @returns 返回空间名-类名
   */
  const getPrefixCls = (scope) => {
    return `${lessVariables.namespace}-${scope}`;
  };

  return {
    variables: lessVariables,
    getPrefixCls,
  };
};
