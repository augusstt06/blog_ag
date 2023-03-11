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
  // imageResize: {
  //   displayStyles: {
  //     backgroundColor: "black",
  //     border: "none",
  //     color: "white",
  //   },
  //   modules: ["Resize", "DisplaySize", "Toolbar"],
  // },
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
  // const { content, setContent } = props;
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
// const Quill = dynamic(() => import("react-quill"), {
//   ssr: false,
// });
// const TextEditor = ({ props }: any) => {
//   const { content, setContent } = props;

//   // const [enableEditor, setEnableEditor] = useState(false);

//   const loadQuill = async () => {
//     return new Promise(async (resolve, reject) => {
//       // const Quill = await require("react-quill").Quill;

//       const ImageResize = (await import("quill-image-resize-module-ts"))
//         .default;
//       resolve({ Quill, ImageResize });
//     }).then(({ Quill, ImageResize }: any) => {
//       Quill.register("modules/imageResize", ImageResize);
//       return;
//     });
//     // .then((value) => {
//     //   setEnableEditor(true);
//     // });
//   };

//   useEffect(() => {
//     loadQuill();
//   }, []);

//   return (
//     <>
//       <ReactQuill
//         value={content}
//         onChange={setContent}
//         modules={quillModules}
//         formats={quillFormat}
//       />
//     </>
//   );
// };
// export default TextEditor;

// const modules = {
//   syntax: {
//     highlight: (text: any) => hljs.highlightAuto(text).value,
//   },
//   toolbar: [
//     [{ header: [1, 2, false] }, { header: "2" }, { font: [String] }],
//     [{ size: [String] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [
//       { list: "ordered" },
//       { list: "bullet" },
//       { indent: "-1" },
//       { indent: "+1" },
//     ],
//     ["link", "image", "video", "code-block"],
//     ["clean"],
//   ],
// };

// const formats = [
//   "header",
//   "font",
//   "size",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
//   "video",
//   "code-block",
// ];
