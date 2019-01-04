import React from 'react';
import './SiteIcon.css';

const siteIcon = (props) => {
return (      <img width="50px" height="50px" className="siteIcon" src={props.iconImageUrl} alt={props.name} onClick={props.click}/>  );
}
export default siteIcon;