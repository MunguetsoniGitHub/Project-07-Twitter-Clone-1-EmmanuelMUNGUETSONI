
export default function UpLoadMedia(props) {
  return (

      <button className="upLoad-media" alt="Upload media" onClick={props.onFileChange}>
        <img src="src/images/Top-media.png" alt="Retweet" aria-hidden="true"/> 
      </button>

  );
}