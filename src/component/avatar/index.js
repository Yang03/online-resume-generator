import React from 'react'
import appContext from '../../appContext'

import './index.scss'

export default function Avatar({ data = {} }) {
  const [image, setImage] = React.useState('')
    function toDataURL(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
          callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
  }

  React.useEffect(() => {
    toDataURL(data.image, function(dataUrl) {
      setImage(dataUrl)
    })
  }, [data])
  return (<div className="avatar">
      <img src={image} />
    </div>)
}
