function Tag({ label }) {
  return (
    <div className="tag">
      <img src="icons/tag.svg" alt="" />
      <span>{label}</span>
    </div>
  );
}

export default Tag;
