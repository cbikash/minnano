import counsilling from '../../assest/images/counselling.png'
import visaP from '../../assest/images/visa-processing.png'
import langC from '../../assest/images/language-classes.png'
import document from '../../assest/images/documentation.png'

const Offered = () => {
    return (
        <>
        <div className="section-4" style={{backgroundColor:"rgb(233, 233, 233)", paddingTop:"30px", paddingBottom:"30px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="primary-color" style={{textAlign:"center"}}>What We Offer?</h3>
                    </div>
                    <div className=''style={{marginTop: "50px"}}></div>
                    <div className="col-md-3">
                        <div className='img-container'>
                            <img src={counsilling} className="img-fluid" />
                        </div>

                        <div className='title-container'>
                            <p>counselling</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className='img-container'>
                            <img src={visaP} className="img-fluid" />
                        </div>
                        <div className='title-container'>
                            <p>Visa Processing</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className='img-container'>
                            <img src={langC} className="img-fluid" />
                        </div>
                        <div className='title-container'>
                            <p>Language Classes</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className='img-container'>
                            <img src={document} className="img-fluid" />
                        </div>
                        <div className='title-container'>
                            <p>Documentation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Offered