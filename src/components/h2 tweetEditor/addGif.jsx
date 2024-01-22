

export default function AddGif(props) {
  
  // const [gifUrl, setGifUrl] = useState("");
  // const [gifName, setGifName] = useState("");
  // const [gifDescription, setGifDescription] = useState("");

  return (
    <buttton className="addGif" alt="gif" onClick={props.onClick}>
      <img src="src/images/Top-gif.png" alt="Retweet" aria-hidden="true"/>
    </buttton>

  );
}

    