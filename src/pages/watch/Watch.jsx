import React from 'react'
import "./watch.scss"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
const Watch = () => {
  return (
    <div className='watch'>
      <div className="back">
        <ArrowBackOutlinedIcon/>
        Home
      </div>
      <video 
       className="video"
       autoPlay

       controls
       src="https://i.vimeocdn.com/video/1607678763-5b7c31497388aa1ee2201f96766b3c48e8ac7f36b12d2f5e04fec2c4143ce001-d?mw=1200&mh=675&q=70" />
    </div>
  )
}

export default Watch
