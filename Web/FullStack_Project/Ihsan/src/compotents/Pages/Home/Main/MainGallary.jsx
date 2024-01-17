import { useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import "./MainGallery.css";

import LeftImg from "../../Gallary/Img/icons8-left-100.png";
import RightImg from "../../Gallary/Img/icons8-right-100.png";
import CloseImg from "../../Gallary/Img/icons8-close-100.png";

import Image1 from '../../Gallary/Img/ihsan_team1.jpg';
import Image2 from '../../Gallary/Img/ihsan_team2.jpg';
import Image3 from '../../Gallary/Img/ihsan_team3.jpg';
import Image4 from '../../Gallary/Img/ihsan_team4.jpg';
import Image5 from '../../Gallary/Img/ihsan_team5.jpg';
import Image6 from '../../Gallary/Img/ihsan_team6.jpg';
import Image7 from '../../Gallary/Img/ihsan_team7.jpg';
import Image8 from '../../Gallary/Img/ihsan_team8.jpg';
import Image9 from '../../Gallary/Img/ihsan_team9.jpg';
import Image10 from '../../Gallary/Img/ihsan_team10.jpg';
import Image11 from '../../Gallary/Img/ihsan_team11.jpg';
import Image12 from '../../Gallary/Img/ihsan_team12.jpg';
import Image13 from '../../Gallary/Img/ihsan_team13.jpg';
import Image14 from '../../Gallary/Img/ihsan_team14.jpg';

function shuffleArray(array) {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function MainGallary() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [isLonger, setIsLonger] = useState(true); 
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
  ];

  const modalRef = useRef(); 
  

  useEffect(() => {
    const shuffled = shuffleArray(images);
    setShuffledImages(shuffled);

  }, []);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  

  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-interval="10" style={{ width: "330px", height: "200px" }}>
      <div id="carouselExampleSlidesOnly" className="carousel slide p-1" data-bs-ride="carousel" data-interval="10" style={{ width: "300px", height: "150px" }}>
        <div className="carousel-inner rounded-5" style={{ width: "100%", height: "100%" }}>
          {shuffledImages.map((image, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <img
                src={image}
                className="d-block w-100"
                alt={`Image ${index + 1}`}
                style={{ objectFit: "", height: "100%" }}
                onClick={handleImageClick}
              />
            </div>
          ))}
        </div>

        <Link className="carousel-control-prev" href="#" role="button" onClick={handlePrevClick}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </Link>
        <Link className="carousel-control-next" href="#" role="button" onClick={handleNextClick}>
          <span className="carousel-control-next-icon" ariahidden="true"></span>
          <span className="visually-hidden">Next</span>
        </Link>
      </div>

      {isModalOpen && (
        <div
          ref={modalRef}
          className="modal"
          tabIndex="-1"
          style={{ display: 'block', zIndex: 1000 }}
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content rounded-5">
              <div className="modal-body d-flex justify-content-center p-0">
                <img
                className='image_container p-0 m-0  rounded-5'
                  src={shuffledImages[activeIndex]}
                  alt={`Image ${activeIndex + 1}`}
                  // style={{ width: '100%' }}
                />
              </div>
              <div className="modal-footer justify-content-center p-0 m-0">
                <div onClick={handlePrevClick} className='leftArrowStyles d-flex' title="Left"> <img className='w-50' src={LeftImg} alt="Left" /> </div>
                <div onClick={handleNextClick} className='rightArrowStyles d-flex'title="Reight"> <img className='w-50' src={RightImg} alt="Right" /> </div>
                <div onClick={handleModalClose} className="closeBtn" title="Close"> <img className='w-50' src={CloseImg} alt="Close" /> </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainGallary;