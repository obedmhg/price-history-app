import React, { Component } from 'react';
import './SitesPicker.css';
import SiteIcon from '../SiteIcon/SiteIcon';

class SitesPicker extends Component {

  state = {sites : [
    {id: 'amazon', name: 'Amazon', iconImageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Amazon-icon.png"},
    {id: 'liverpool', name: 'Liverpool', iconImageUrl: "https://i.pinimg.com/originals/92/e9/24/92e924688777a9bc4b102e16dd184b47.png"},
    {id: 'mercadoLibre', name: 'Mercado Libre', iconImageUrl: "https://dojiw2m9tvv09.cloudfront.net/4/1/MercadoLibre.png?3487"},
    {id: 'linio', name: 'Linio', iconImageUrl: "https://avatars3.githubusercontent.com/u/11468134?s=280&v=4"}
  ]};

  render() {
    const siteIcons = (
        <div>
            {this.state.sites.map(site => {
                return <SiteIcon name={site.name} iconImageUrl={site.iconImageUrl} key={site.id}/>;
            })}
        </div>
      );
    return (
  <div className="sitePicker">
       {siteIcons}
  </div>
  );
}
}

export default SitesPicker;