import japan from '../../assest/images/japan.jpg'
const Places = () => {
    return (
        <>
            <div className="places">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box-container">
                                <img src={japan} className=" place-image" />
                                <p className="place-overlay">
                                    <span>Some thing Places</span> 
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-container">
                                <img src={japan} className=" place-image" />
                                <p className="place-overlay">
                                <span>Some thing Places</span> 
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-container">
                                <img src={japan} className=" place-image" />
                                <p className="place-overlay">
                                <span>Some thing Places</span> 
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-container">
                                <img src={japan} className=" place-image" />
                                <p className="place-overlay">
                                <span>Some thing Places</span> 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Places