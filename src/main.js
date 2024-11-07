import "vue/jsx";
import { createApp } from "vue";
import App from "./App.vue";
import dayjs from "dayjs";
import "./styles/index.scss";

import uploader from "vue-simple-uploader";
import "vue-simple-uploader/dist/style.css";

// 引入状态管理
import { setupStore } from "@/store";
// 引入element-plus
import { setupElementPlus } from "@/plugins/elementPlus";
// 路由
import { setupRouter } from "./router";
// 指令
import { setupDirectives } from "./directives";

import vContextmenu from "v-contextmenu";
import "v-contextmenu/dist/themes/default.css";

import { config } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import MarkExtension from 'markdown-it-mark';
import Anchor from 'markdown-it-anchor';
import LinkAttr from 'markdown-it-link-attributes';
import { lineNumbers } from '@codemirror/view';

config({
  markdownItPlugins(plugins) {
    return [
      ...plugins,
      {
        type: 'mark',
        plugin: MarkExtension,
        options: {}
      },
      {
        type: 'linkAttr',
        plugin: LinkAttr,
        options: {
          matcher(href) {
            return !href.startsWith('#');
          },
          attrs: {
            target: '_blank'
          }
        }
      },
      {
        type: 'anchor',
        plugin: Anchor,
        options: {
          // permalink: true,
          permalink: Anchor.permalink.headerLink(),
          // permalinkSymbol: '#',
          // permalinkBefore: false,
          // permalinkSpace: false,
          slugify(s) {
            return s;
          }
        }
      }
    ];
  },
  codeMirrorExtensions(theme, extensions) {
    const _exs = [...extensions, lineNumbers()];
    return _exs;
  },
  editorConfig: {
    languageUserDefined: {
    }
  },
  // editorExtensions: {
  //   highlight: {
  //     css: {
  //       atom: {
  //         light:
  //           'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/atom-one-dark.min.css',
  //         dark: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/atom-one-dark.min.css'
  //       }
  //     }
  //   }
  // }
});

// 创建实例
const setupAll = async () => {
  const app = createApp(App);

  setupStore(app);

  setupElementPlus(app);

  setupRouter(app);

  setupDirectives(app);

  app.use(uploader);
  app.use(vContextmenu);
  app.mount("#app");

  window.$dayjs = dayjs;
};

setupAll();
