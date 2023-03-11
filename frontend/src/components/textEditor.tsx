import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import typescript from "highlight.js/lib/languages/typescript";
import c from "highlight.js/lib/languages/c";
import ReactQuill, { Quill } from "react-quill";
import { ImageResize } from "quill-image-resize-module-ts";

// 이미지 리사이즈 모듈 설정하기..

Quill.register("modules/ImageResie", ImageResize);

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("c", c);

let modules = {
  ImageResize: {
    parchment: Quill.import("parchment"),
  },

  syntax: {
    highlight: (text: any) => hljs.highlightAuto(text).value,
  },
  toolbar: [
    [{ header: [1, 2, false] }, { header: "2" }, { font: [String] }],
    [{ size: [String] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video", "code-block"],
    ["clean"],
  ],
};
let formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code-block",
  "imageResize",
];
const TextEditor = (props: any) => {
  return (
    <>
      <ReactQuill
        modules={modules}
        formats={formats}
        theme={"snow"}
        value={props.content}
        placeholder={"Please Write a Content!"}
        onChange={(content, delta, source, editor) =>
          props.setContent(editor.getHTML())
        }
      />
    </>
  );
};
export default TextEditor;
