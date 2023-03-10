import dynamic from "next/dynamic";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import typescript from "highlight.js/lib/languages/typescript";
import c from "highlight.js/lib/languages/c";

// 이미지 리사이즈 모듈 설정하기..
const Quill_NoSSR = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("c", c);

const modules = {
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

const formats = [
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
];

const TextEditor = (props: any) => {
  const { content, setContent } = props;
  return (
    <Quill_NoSSR
      modules={modules}
      formats={formats}
      theme={"snow"}
      value={content}
      placeholder={"Please Write a Content!"}
      onChange={(content, delta, source, editor) =>
        setContent(editor.getHTML())
      }
    />
  );
};
export default TextEditor;
