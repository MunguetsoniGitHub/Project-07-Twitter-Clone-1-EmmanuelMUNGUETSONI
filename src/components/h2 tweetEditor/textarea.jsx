

function Textarea({onChange}) {
  return (
      <textarea
        className="tweet-editor-input"
        
        onChange={onChange}
        placeholder="What's happening?"
        rows="3"
        required
        name="text"
      />
  );
}

export default Textarea;