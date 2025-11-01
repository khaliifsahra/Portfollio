import './MyWork.css'; 
import  Arrow_icon from '../../assets/Imgs/Arrow_icon.svg'
import mywork_data from '..//../assets/mywork_data.js';
import  icon from '../../assets/Imgs/icon.svg'
import pp from '../../assets/Imgs/pp.png'
const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={pp} alt="Arrow Icon" />
      </div>
      
      <div className="mywork-container">
        {mywork_data.map((work, index ) =>{
          return <img key={index} src={work.w_img} alt="" />
        })}

      </div>
      <div className="mywork-showmore">
        <p>show more</p>
        <img src={icon} alt="Show More Icon" />
      </div>
     
    </div>
  )
}

export default MyWork;

