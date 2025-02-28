const base = "/GuideBook/";
export default {
    base,
  // 站点级选项
  title: "GuideBook", // 网站标题
  description: "冰岩作坊招新指南", // 网站描述

  themeConfig: {
    search: {
      provider: "local",
    },
    head: [
      // 配置网站的图标（显示在浏览器的 tab 上）
      ["link", { rel: "icon", href: `/${base}favicon.ico` }],
    ],
    logo: "logo.png",
    // 主题级选项
    nav: [],
    sidebar: {},
  },
};
