import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const snippetHighlighterTheme = {
  ...atomOneDark,
  hljs: {
    ...atomOneDark.hljs,
    background: "var(--bg-table-row-alt)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-mono)",
    fontSize: "12px",
    lineHeight: "1.5",
    padding: "12px",
  },
  "hljs-keyword": {
    ...atomOneDark["hljs-keyword"],
    color: "#ff7b72",
  },
  "hljs-string": {
    ...atomOneDark["hljs-string"],
    color: "#a5d6ff",
  },
  "hljs-number": {
    ...atomOneDark["hljs-number"],
    color: "#79c0ff",
  },
  "hljs-comment": {
    ...atomOneDark["hljs-comment"],
    color: "var(--text-muted)",
    fontStyle: "italic",
  },
  "hljs-function": {
    ...atomOneDark["hljs-function"],
    color: "#d2a8ff",
  },
};
