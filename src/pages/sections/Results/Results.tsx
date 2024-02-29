import { useState, useEffect } from 'react';
import PackBlock from "../../../components/PackBlock/PackBlock"

type Props = {
    filter: string;
};

const Results = (props: Props) => {

    // let [propsFilter] = useState<string>(props.filter);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 2000));
            setLoading(false);
        };
        fetchData();
    }, [props]);


    return (
        <>
            {loading ? (
                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-text fs-4 text-center p-5">
                                Carregando...
                            </div>
                        </div>
                    </div>
                </div>
            ) : (

                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-text fs-4 text-center p-5">
                                Nenhum registro encontrado
                                (Used Filter {props.filter})
                            </div>
                        </div>
                    </div>
                </div>

            )}


            {!loading ? [...Array(5)].map((_, index) => {
                return (
                    <PackBlock key={index} />
                )
            }) : null}
        </>
    )
}

export default Results
