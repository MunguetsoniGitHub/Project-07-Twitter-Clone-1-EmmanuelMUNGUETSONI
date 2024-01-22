


export default function SearchTwitter(props) {
  const {
    // searchTwitter,
    // searchTwitterLoading,
    // searchTwitterError,
    // searchTwitterData,
    searchTwitterInput,
    searchTwitterInputChange,
    searchTwitterInputSubmit,
  } = props;

  return (
    <div className="searchTwitter">
      {/* <div className="searchTwitter__header">
        <h2>Search Twitter</h2>
      </div> */}
      {/* <div className="searchTwitter__body"> */}
        {/* <div className="searchTwitter__body__input"> */}
          <input
            type="text"
            placeholder="Search Twitter"
            value={searchTwitterInput}
            onChange={searchTwitterInputChange}
            onKeyPress={searchTwitterInputSubmit}
          />
        {/* </div> */}
        {/* <div className="searchTwitter__body__results">
          {searchTwitterLoading && <p>Loading...</p>}
          {searchTwitterError && <p>Error: {searchTwitterError}</p>}
          {searchTwitterData && (
            <div className="searchTwitter__body__results__list">
              {searchTwitterData.map((item, index) => (
                <div className="searchTwitter__body__results__list__item" key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>

                </div>
              ))}
            </div>
          )}
        </div> */}
      {/* </div> */}

    </div>
  );
}
  
                  