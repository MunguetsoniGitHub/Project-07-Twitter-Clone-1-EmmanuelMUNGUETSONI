// import React from 'react';
// import {useState } from 'react';

export default function Poll(props) {

  // const [poll, setPoll] = useState(props.poll);
  // const [pollOptions, setPollOptions] = useState(poll.options);
  // const [pollVotes, setPollVotes] = useState(poll.votes);
  // const [pollVoted, setPollVoted] = useState(false);
  // const [pollVotedOption, setPollVotedOption] = useState(null);
  // const [pollVotedOptionIndex, setPollVotedOptionIndex] = useState(null);

  // const [pollVotedOptionVotes, setPollVotedOptionVotes] = useState(null);
  // const [pollVotedOptionVotesTotal, setPollVotedOptionVotesTotal] = useState(null);

  // return (
  //   <div className="poll">
  //     <h2>{poll.question}</h2>
  //     <div className="poll-options">
  //       {pollOptions.map((option, index) => (
  //         <div key={index} className="poll-option">
  //           <button
  //             onClick={() => {
  //               setPollVotedOption(option);
  //               setPollVotedOptionIndex(index);
  //               setPollVoted(true);
  //             }}

  //           >
  //             <img src="src/images/Top-poll.png" alt="Retweet" aria-hidden="true"/> 
  //             {option}
  //           </button>
  //         </div>
  //       ))}
  //     </div>
  //     <div className="poll-votes">
  //       {pollVotes.map((vote, index) => (
  //         <div key={index} className="poll-vote">
  //           <span>{vote}</span>
  //         </div>
  //       ))}

  //     </div>
  //   </div>
  // );

  return (
    <buttton onclik={props.onVote }>
      <img src="src/images/Top-poll.png" alt="Retweet" aria-hidden="true"/>
      {/* {props.poll.question} */}

    </buttton>
  );

}

  