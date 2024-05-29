import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mt-20 mb-20 mx-auto ">
      <Slider className="mx-auto bg-slate-900 h-96 flex items-center shadow-lg rounded-sm" {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <img src={testimonial.Image} alt={testimonial.title} className="w-24 rounded-full shadow-lg mx-auto" />
            <h2 className="text-4xl text-center mb-3 mt-4 text-white font-semibold">{testimonial.title}</h2>
            <p className="text-center text-slate-100 mb-4">{testimonial.message}</p>
            <p className="text-center text-xl text-white">- {testimonial.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

Testimonial.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Testimonial;
