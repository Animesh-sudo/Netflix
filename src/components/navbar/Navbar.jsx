import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => {window.onscroll = null}
  }
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="container">
            <div className="left">
                <img src="https://www.lifewire.com/thmb/tspyUBw4tcHRcwfQfdG-ZoHhTvA=/2000x540/filters:no_upscale():max_bytes(150000):strip_icc()/Netflix_2014_logo.svg-57f7c9ca5f9b586c355f5904.png" alt="" />
                <span>Hompage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My list</span>
            </div>
            <div className="right">
                <SearchIcon className='icon'/>
                <span>KID</span>
                <NotificationsIcon className='icon'/>
                <img src="https://i.pinimg.com/originals/72/0f/fb/720ffb95beadb02485956538daf48b4d.jpg" alt="" />
                <div className="profile">
                  <ArrowDropDownIcon className='icon'/>
                  <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar