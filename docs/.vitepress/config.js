const base = "/GuideBook/";
const url = "https://blog.bingyan.net/GuideBook/";
export default {
  base,
  // 站点级选项
  title: "GuideBook", // 网站标题
  description: "冰岩作坊招新指南", // 网站描述

  themeConfig: {
    footer: {
      message:
        'Built on <a href="https://vitepress.dev/zh/" target="_blank"> VitePress </a>.',
      copyright:
        'Copyright © 2025-present <a href="https://github.com/BingyanStudio" target="_blank"> Bingyan Studio </a>.',
    },
    search: {
      provider: "local",
    },
    head: [
      // 配置网站的图标（显示在浏览器的 tab 上）
      ["link", { rel: "icon", href: `${url}favicon.ico`}],
    ],
    logo: "logo.png",
    // 主题级选项
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/post/about" },
    ],
    sidebar: [
      { text: "关于", link: "/post/about" },
    ],
  },
};
