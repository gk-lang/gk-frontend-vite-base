<template>
  <div class="codemirror-editor">
    <div class="content">
      <codemirror
        class="codemirror"
        ref="cm"
        :autofocus="config.autofocus"
        :placeholder="config.placeholder"
        :indentWithTab="config.indentWithTab"
        :tabSize="config.tabSize"
        :disabled="config.disabled"
        :style="{ backgroundColor: config.backgroundColor }"
        :extensions="extensions"
        :phrases="config.phrases === 'en-us' ? {} : germanPhrases"
        :linter="linter"
        :lang="lang"
        v-model="editorContent"
        @update="handleStateUpdate"
        @ready="handleReady"
        @focus="consoleLog('focus', $event)"
        @blur="consoleLog('blur', $event)"
      />
    </div>
    <div class="divider"></div>
    <div class="footer">
      <div class="buttons">
        <button class="item" @click="handleUndo">Undo</button>
        <button class="item" @click="handleRedo">Redo</button>
      </div>
      <div class="infos">
        <span class="item">Selected: {{ state.selected }}</span>
        <span class="item">Cursor: {{ state.cursor }}</span>
        <span class="item">Spaces: {{ config.tabSize }}</span>
        <span class="item">Length: {{ state.length }}</span>
        <span class="item">Lines: {{ state.lines }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, shallowRef, computed, onMounted } from "vue";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import { markdown } from "@codemirror/lang-markdown";
import { oneDark } from "@codemirror/theme-one-dark";
import { Codemirror } from "vue-codemirror";
import { redo, undo } from "@codemirror/commands";
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
const state = reactive({
  lines: null,
  cursor: null,
  selected: null,
  length: null,
});
const themes = { oneDark };
const lang = json();
const linter = jsonParseLinter();

const languages = {
  javascript: javascript(),
  html: html(),
  json: json(),
  markdown: markdown(),
};

const consoleLog = console.log;
const editorContent = computed({
  get() {
    // if (props.modelValue) {
    //   return JSON.stringify(parseJsonString(props.modelValue), null, 2);
    // } else {
    //   return props.modelValue;
    // }
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
  },
});
const view = shallowRef();
const preview = shallowRef(false);
const togglePreview = () => {
  preview.value = !preview.value;
};

const cmView = shallowRef();
const handleReady = ({ view }) => {
  cmView.value = view;
};

const config = reactive({
  disabled: false,
  indentWithTab: true,
  tabSize: 4,
  autofocus: true,
  placeholder: "请输入",
  backgroundColor: "red",
  language: "json",
  theme: "oneDark",
  phrases: "en-us",
});

const extensions = computed(() => {
  const result = [];
  result.push(languages[config.language]);
  if (themes[config.theme]) {
    result.push(themes[config.theme]);
  }
  return result;
});
const handleUndo = () => {
  undo({
    state: cmView.value.state,
    dispatch: cmView.value.dispatch,
  });
};

const handleRedo = () => {
  redo({
    state: cmView.value.state,
    dispatch: cmView.value.dispatch,
  });
};

const handleStateUpdate = (viewUpdate) => {
  // selected
  const ranges = viewUpdate.state.selection.ranges;
  state.selected = ranges.reduce(
    (plus, range) => plus + range.to - range.from,
    0
  );
  state.cursor = ranges[0].anchor;
  // length
  state.length = viewUpdate.state.doc.length;
  state.lines = viewUpdate.state.doc.lines;
  // log('viewUpdate', viewUpdate)
};
onMounted(() => {
  console.log("mounted view:", view);
});

const germanPhrases = {
  // @codemirror/view
  "Control character": "Steuerzeichen",
  // @codemirror/commands
  "Selection deleted": "Auswahl gelöscht",
  // @codemirror/language
  "Folded lines": "Eingeklappte Zeilen",
  "Unfolded lines": "Ausgeklappte Zeilen",
  to: "bis",
  "folded code": "eingeklappter Code",
  unfold: "ausklappen",
  "Fold line": "Zeile einklappen",
  "Unfold line": "Zeile ausklappen",
  // @codemirror/search
  "Go to line": "Springe zu Zeile",
  go: "OK",
  Find: "Suchen",
  Replace: "Ersetzen",
  next: "nächste",
  previous: "vorherige",
  all: "alle",
  "match case": "groß/klein beachten",
  "by word": "ganze Wörter",
  replace: "ersetzen",
  "replace all": "alle ersetzen",
  close: "schließen",
  "current match": "aktueller Treffer",
  "replaced $ matches": "$ Treffer ersetzt",
  "replaced match on line $": "Treffer on Zeile $ ersetzt",
  "on line": "auf Zeile",
  // @codemirror/autocomplete
  Completions: "Vervollständigungen",
  // @codemirror/lint
  Diagnostics: "Diagnosen",
  "No diagnostics": "Keine Diagnosen",
};
</script>

<style lang="scss">
.codemirror-editor {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .toolbar {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
    display: none;
    .state {
      margin: 2rem 0;
      margin-right: 2rem;
      padding: 2em;
      border: 1px solid #ccc;
    }
    .config {
      display: flex;
    }
  }

  .content {
    display: flex;
    width: 100%;
    flex: 1;
    height: 0px;
    justify-content: center;

    .code {
      overflow: scroll;
    }

    .code,
    .codemirror .cm-editor {
      width: 100%;
      height: 100%;
      margin: 0px;
      border: 0px solid #0d1117;
    }
    .cm-scroller {
      $base-menu-background: #fff;
      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba($base-menu-background, 0.1);
        border: 3px solid transparent;
        border-radius: 7px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background-color: rgba($base-menu-background, 0.2);
      }
      &::-webkit-scrollbar-corner {
        // background-color: rgba($base-menu-background, 0.2);
      }
    }
  }
  .divider {
    height: 1px;
    width: calc(100% - 0px);
    background-color: #0d1117;
  }
  .footer {
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 90%;
    justify-content: space-between;
    background-color: #22272e;
    width: calc(100% - 0px);
    .buttons {
      margin-left: 20px;
      .item {
        margin-right: 1px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: 1px dashed #0d1117;
        font-size: 12px;
        color: rgba(173, 186, 199, 0.72);
        // color: $text-secondary;
        cursor: pointer;
        margin-left: 10px;
        .iconfont {
          margin-left: 5px;
        }
        &:hover {
          color: #adbac7;
          border-color: var(--el-border-color);
        }
      }
    }

    .infos {
      margin-right: 20px;
      .item {
        margin-right: 10px;
        display: inline-block;
        font-feature-settings: "tnum";
        color: rgba(173, 186, 199, 0.72);
      }
    }
  }
}
</style>
