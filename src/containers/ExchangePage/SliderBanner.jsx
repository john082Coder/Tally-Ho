import Slider from 'react-slick';
import banner1 from '../../assets/images/banners/Slideshow.jpg';
import banner2 from '../../assets/images/banners/TallyApp.jpg';
import banner3 from '../../assets/images/banners/TallyRaffle.jpg';

const SliderBanner = () => {
    return (
        <section className=' bg-gradient-to-b from-white to-[#dbdbdb] p-6'>
            <div className='container mx-auto max-w-6xl'>
                <Slider
                    infinite={true}
                    autoplay
                    arrows={false}
                    slidesToScroll={1}
                    speed={300}
                    swipe
                    slidesToShow={3}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                    ]}
                    swipeToSlide={true}
                    draggable
                    className='mx-auto w-3/4 xl:w-11/12'
                >
                    <div className='mx-auto max-w-xs'>
                        <img src={banner1} alt='banner 1' className='mx-auto' />
                    </div>
                    <div className='mx-auto max-w-xs'>
                        <img src={banner2} alt='banner 2' className='mx-auto' />
                    </div>
                    <div className='mx-auto max-w-xs'>
                        <img src={banner3} alt='banner 3' className='mx-auto' />
                    </div>
                    <div className='mx-auto max-w-xs'>
                        <img src={banner2} alt='banner 2' className='mx-auto' />
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default SliderBanner;
