import slider from '../../assest/images/slider.jpg'
import japn from '../../assest/images/japan.jpg'


const Slider = (props) => {
    const slider = props.slider
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>

                <div className="carousel-inner">
                    {Object.keys(slider).length > 0 ? (<>
                        {slider.data.map((singleSlider, index) => (
                            <div key={index} className={index == 0 ? `carousel-item active` : 'carousel-item '}>
                                <img src={singleSlider.image} className="d-block w-100" alt="..." />
                            </div>
                        ))}
                    </>) : (
                        <>
                            <div className="carousel-item active">
                                <img src={japn} className="d-block w-100" alt="..." />
                            </div>
                        </>
                    )}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider