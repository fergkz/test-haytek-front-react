import PackBox from "../PackBox/PackBox"



const PackBlock = () => {

    return (
        <>
            <div className="container my-4 rounded-3 border shadow-lg">
                <div className="row p-4 pb-3 pe-lg-0 border-bottom">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-md-3 col-sm-12 text-md-start py-md-0 text-center text-sm-center py-3 py-sm-3">
                                <h6 className="">Transportadora: </h6>
                                <div className="form-text">
                                    JadLOG
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-12 text-md-start py-md-0 text-center text-sm-center py-3 py-sm-3">
                                <h6 className="">Endereço: </h6>
                                <div className="form-text">
                                    Rua das Flores, Apto 101, Centro, 12345-678, São Paulo, SPSão Paulo, SPSão Paulo, SPSão
                                    Paulo, SPSão Paul
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-12 py-md-0 text-center py-sm-3">
                                <h6 className="">Itens:
                                    <div className="form-text fs-4">
                                        64
                                    </div>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row  p-4 pb-4 pe-lg-4">
                    {[...Array(5)].map((_, index) => {
                        return (
                            <div className="col-sm-4 pb-4" key={index}>
                                <PackBox />
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default PackBlock
