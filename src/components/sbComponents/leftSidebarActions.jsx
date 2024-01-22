import React from 'react';
//import List from '../../components/list.jsx';

function LeftSidebarActions(props) {
  return (
    <>
      {/* // <li className="left-sidebar-actions">
      //   <a className="lsb-actions-container"> */}
          <img src={props.image} alt={props.imgAlt} />
          <span>{props.title}</span>
        {/* // </a>
      //</li>            */}
    </>
  );
}

export default LeftSidebarActions;