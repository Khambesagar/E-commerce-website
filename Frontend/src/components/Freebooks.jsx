// import React, { useEffect, useState } from 'react'
// import Slider from "react-slick";
// import axios from 'axios';

// //Slider
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Cards from './Cards';

// function Freebooks() {

//   const [book, setBook] = useState([]);
// // Using axios .. fetch data from backend to frontend
//   useEffect(() => {
//     const getBook = async () => {
//       try {
//         const bookData = await axios.get('http://localhost:4001/book');
//         // Only show free books data
//         const freedata = bookData.data.filter((data) => data.category === "free")
//         // const allProducts = allData.data.filter((data) => data.category === "mobile")
//         setBook(freedata )
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getBook();
//   })


//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//   return (
//     <>
//       <div className='max-w-screen-2xl container mt-8 mx-auto md:px-20 px-4  md:mt-10 '>
//         <div>
//           <h1 className='font-semibold text-xl pb-2'>Free Offerd Courses</h1>
//           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis obcaecati exercitationem, culpa qui ab, laudantium optio aperiam molestiae itaque libero accusantium nisi dolore con!</p>
//         </div>


//         <Slider {...settings}>
//           {book.map((item) => (
//             <Cards item={item} key={item.id} />
//           ))}
//         </Slider>
//       </div>
//     </>
//   )
// }

// export default Freebooks