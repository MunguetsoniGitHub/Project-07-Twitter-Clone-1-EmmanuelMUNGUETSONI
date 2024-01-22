import {trendsData} from '../../Data/trendsData.js';

function TrendsList({id, title, country, tweetVolume}) {
  return (
    <>
      {trendsData.map((trend) => (
      <li className="trends-item" key={trend.id}>
        <span className="counrty" > Trending in {trend.country.name} </span>
        <span className="trend-title"> #{trend.title} </span>
        <span className="trend-count"> {trend.tweetVolume} Tweets</span> 
      </li>
      ))} 
    </>
  );
}

export default TrendsList;