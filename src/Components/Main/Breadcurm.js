const Breadcurm = (props) => {
    const { title, image } = props.bread
    const Breadcumstyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    return (
        <>
            <div className="breadcrum" style={Breadcumstyle}>
                <div className="cover-wall" style={{ backgroundColor: "#171785a3", padding: "60px 0", color: "white" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h3>{title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcurm