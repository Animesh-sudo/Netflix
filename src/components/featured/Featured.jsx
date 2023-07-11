import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === 'movie' ? "Movie" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        {/* <img src="https://www.hdwallpaper.nu/wp-content/uploads/2018/03/stranger_things-3.jpg" alt="" /> */}
        <img src="https://images5.alphacoders.com/882/882383.jpg" alt="" />
        <div className="info">
            <img src="https://logosmarcas.net/wp-content/uploads/2020/05/Stranger-Things-Logo.png" alt="" />
            <span className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis recusandae sint, 
                ab ea corporis ducimus necessitatibus esse sunt dicta molestiae earum nemo dolorem ipsam? 
                Debitis tempore ex iure commodi aut?
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlinedIcon/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured