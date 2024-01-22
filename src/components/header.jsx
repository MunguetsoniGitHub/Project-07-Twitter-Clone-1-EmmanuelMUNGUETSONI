


  
function Header(props) {
  return (
    <section className="header">
      <span className="page-title">{props.title}</span>
      <span className="top-tweets"><img src="src/images/Top-Tweets.png" alt="top-tweets"/> </span>
    </section>
  );
} 

export default Header;