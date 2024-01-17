
import { useState , useEffect , useRef} from 'react';
import LeftImg from "./Img/icons8-left-100.png";
import RightImg from "./Img/icons8-right-100.png";
import CloseImg from "./Img/icons8-close-100.png";

import './Gallery.css';

import Img1 from "./Img/ihsan_team1.jpg";
import Img2 from "./Img/ihsan_team2.jpg";
import Img3 from "./Img/ihsan_team3.jpg";
import Img4 from "./Img/ihsan_team4.jpg";
import Img5 from "./Img/ihsan_team5.jpg";
import Img6 from "./Img/ihsan_team6.jpg";
import Img7 from "./Img/ihsan_team7.jpg";
import Img8 from "./Img/ihsan_team8.jpg";
import Img9 from "./Img/ihsan_team9.jpg";
import Img10 from './Img/ihsan_team10.jpg';
import Img11 from './Img/ihsan_team11.jpg';
import Img12 from './Img/ihsan_team12.jpg';
import Img13 from './Img/ihsan_team13.jpg';
import Img14 from './Img/ihsan_team14.jpg';





const Gallary = () => {
   let data = [
    {imgSrc: Img1},
    {imgSrc: Img2},
    {imgSrc: Img3},
    {imgSrc: Img4},
    {imgSrc: Img5},
    {imgSrc: Img6},
    {imgSrc: Img7},
    {imgSrc: Img8},
    {imgSrc: Img9},
    {imgSrc: Img10},
    {imgSrc: Img11},
    {imgSrc: Img12},
    {imgSrc: Img13},
    {imgSrc: Img14},
    {imgSrc: Img1},
    {imgSrc: Img2},
    {imgSrc: Img3},
    {imgSrc: Img4},
    {imgSrc: Img5},
    {imgSrc: Img6},
    {imgSrc: Img7},
    {imgSrc: Img8},
    {imgSrc: Img9},
    {imgSrc: Img10},
    {imgSrc: Img11},
    {imgSrc: Img12},
    {imgSrc: Img13},
    {imgSrc: Img14},
   ] 
   const [model, setModel] = useState(false);
   const [tempimgSrc, setTempImgSrc] = useState('');
   const [currentIndex, setCurrentIndex] = useState(0);


   const getImg = (imgSrc) => {
      setTempImgSrc(imgSrc);
      setModel(true);
   }

   const closeModel = () => {
    setModel(false);
  };
   const goToPrevious = () => {
    const previousIndex = (currentIndex - 1 + data.length) % data.length;
    setTempImgSrc(data[previousIndex].imgSrc);
    setCurrentIndex(previousIndex);
  }

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setTempImgSrc(data[nextIndex].imgSrc);
    setCurrentIndex(nextIndex);
  }
  const leftArrowRef = useRef();
  const rightArrowRef = useRef();
  const imgRef = useRef();


    useEffect(() => {
      // Event-Handler für den linken Pfeil
      const leftArrowHandler = (e) => {
        if (leftArrowRef.current && !leftArrowRef.current.contains(e.target)) {
          goToPrevious();
        }
      };
  
      // Event-Handler für den rechten Pfeil
      const rightArrowHandler = (e) => {
        if (rightArrowRef.current && !rightArrowRef.current.contains(e.target)) {
          goToNext();
        }
      };
      let closeModelHandler  = (e) => {
        if (imgRef.current && !imgRef.current.contains(e.target)) {
          setModel(true);
        }
      };
      document.addEventListener('mousedown', leftArrowHandler);
      document.addEventListener('mousedown', rightArrowHandler);
      document.addEventListener("mousedown", closeModelHandler );
  
      return () => {
        document.removeEventListener('mousedown', leftArrowHandler);
        document.removeEventListener('mousedown', rightArrowHandler);
        document.removeEventListener("mousedown", closeModelHandler );
      };
    });
return (
    <div className='gallery-container'>
      <div className={model ? "model open" : "model"}>
        <div ref={imgRef} onClick={goToPrevious} className='leftArrowStyles' title="Left"> <img src={LeftImg} alt="Left" /> </div>
        <img ref={imgRef} src={tempimgSrc} alt='' className="image_container" />
        <div ref={imgRef} onClick={goToNext} className='rightArrowStyles'title="Reight"> <img src={RightImg} alt="Right" /> </div>
        <div onClick={closeModel} className="btnStyle" title="Close"> <img src={CloseImg} alt="Close" /> </div>
      </div>
      <div className='gallery'>
        {data.map((item, index) => {
          return (
            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} style={{ width: "100%" }} alt='img' />
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Gallary;