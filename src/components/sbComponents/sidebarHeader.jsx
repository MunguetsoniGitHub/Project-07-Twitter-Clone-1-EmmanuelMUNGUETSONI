

function SidebarHeader(props) {
  return (
    <div className="sidebar-header">
      <img src={props.image} alt={props.imgAlt} />
    </div>
    );
}

export default SidebarHeader;