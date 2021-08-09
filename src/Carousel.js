import { useState } from "react";

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo}
            src={photo}
            onClick={(e) => setActive(index)}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

// class Carousel extends Component {
//   state = {
//     active: 0,
//   };

//   static defaultProps = {
//     images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
//   };

//   render() {
//     const { active } = this.state;
//     const { images } = this.props;
//     return (
//       <div className="carousel">
//         <img src={images[active]} alt="animal" />
//         <div className="carousel-smaller">
//           {images.map((photo, index) => (
//             // eslint-disable-next-line
//             <img
//               key={photo}
//               src={photo}
//               className={index === active ? "active" : ""}
//               alt="animal thumbnail"
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default Carousel;
