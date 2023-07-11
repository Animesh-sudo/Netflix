import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { useState } from 'react';

const ListItem = ({ index }) => {

    const [isHovered, setIsHovered] = useState(false)
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
    
  return (
    <div className='listItem' 
         style = {{width: isHovered && 325, height: isHovered && 300, boxShadow: isHovered && '0px 0px 8px 5px rgb(255,255,255,0.1)', borderRadius: isHovered && '5px', position: isHovered && 'absolute', top: isHovered && -150, left: isHovered && index * 225 -50 + index * 2.5}} 
         onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)}>
        <img src="https://images.summitmedia-digital.com/preview/images/2022/02/22/a-business-proposal-nm.jpg" alt="" /> 
        {isHovered && 
        (<>
            <video src={trailer} autoPlay={true} loop muted />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrowIcon className='icon'/>
                    <AddIcon className='icon'/>
                    <ThumbUpOutlinedIcon className='icon'/>
                    <ThumbDownOutlinedIcon className='icon'/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hr 14 mins</span>
                    <span className='limit'>+16</span>
                    <span>2022</span>
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quas ad temporibus vero natus quod placeat. 
                </div>
                <div className="genre">Romantic Comedy</div>
            </div>
        </>)}
        
    </div>
  )
}

export default ListItem