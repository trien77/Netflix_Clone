import React,{useRef,useState} from 'react'
import "./List.scss";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from "../listItem/ListItem"

const List = () => {

  const listRef=useRef()
  const [slideNumber,setSlideNumber]=useState(0)
  const [isMoved,setisMoved]=useState(false)


  const handleClick=(direction)=>{
    setisMoved(true)
   
    let distance=listRef.current.getBoundingClientRect().x-50
    
    if(direction==="left" && slideNumber > 0){
      setSlideNumber(slideNumber-1)
        listRef.current.style.transform=`translateX(${230+distance}px)`
    }
    if(direction==="right" && slideNumber < 5){
      setSlideNumber(slideNumber+1)
        listRef.current.style.transform=`translateX(${-230+distance}px)`
    }
    console.log(distance)
  }
  return (
    <div className='list'>
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
         <ArrowBackIosNewIcon className='slideArrow left'onClick={()=>handleClick("left")} style={{display:!isMoved&&"none"}}/>
            <div className="container" ref={listRef}>
              <ListItem index={0}/>
              <ListItem index={1}/>
              <ListItem index={2}/>
              <ListItem index={3}/>
              <ListItem index={4}/>
              <ListItem index={5}/>
              <ListItem index={6}/>
              <ListItem index={7}/>
              <ListItem index={8}/>
              <ListItem index={9}/>
              <ListItem index={10}/>
              <ListItem index={11}/>
            </div>
         <ArrowForwardIosIcon className='slideArrow right' onClick={()=>handleClick("right")}/>
      </div>
    </div>
  )
}

export default List
