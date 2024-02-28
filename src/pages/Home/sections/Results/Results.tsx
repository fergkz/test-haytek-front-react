import PackBlock from "../../../../components/PackBlock/PackBlock"

const Results = () => {

    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-text fs-4 text-center p-5">
                            Nenhum registro encontrado
                        </div>
                    </div>
                </div>
            </div>
            {[...Array(5)].map((_, index) => {
                return (
                    <PackBlock key={index} />
                )
            })}
        </>
    )
}

export default Results
