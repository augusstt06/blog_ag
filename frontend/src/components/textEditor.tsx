import dynamic from "next/dynamic";

const Quill_NoSSR = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const modules = {
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
    ["link", "image", "video"],
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
