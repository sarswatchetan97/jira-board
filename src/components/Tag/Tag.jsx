import "./Tag.css";

const Tag = (props) => {
  const { tagName, selectedTag, selected } = props;
  const tagStyle = {
    DEV: { backgroundColor: "#1e91c7" },
    QA: { backgroundColor: "#c7801e" },
    PO: { backgroundColor: "#1ec73c" },
  };

  const tagKeyMap = {
    "DEV": "DEV",
    "QA": "QA",
    "Product Owner": "PO"
  }

  const key = tagKeyMap[tagName];

  return (
    <>
      <button
        type="button"
        className="tag"
        style = {selected ? tagStyle[key] : {}}
        onClick={() => {
          selectedTag(tagName);
        }}
      >
        {tagName}
      </button>
    </>
  );
};

export default Tag;
