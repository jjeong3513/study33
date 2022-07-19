import React from 'react';
import './index.css';

const VideoItem = ({item}) => {
 
  
    return (
        <li className='videoItem videoItemGrid'>
          <img src={item.thumbnails.medium.url} alt='비디오썸네일' className='thubmnail-img'/>
          <div className='descriptionBox'>
              <div className='description'>
                <h2 className='videoTitle'>{item.title}</h2>
                <h3 className='channelTitle'>{item.channelTtitle}</h3>
              </div>
          </div>
        </li>
    );
};

export default VideoItem;