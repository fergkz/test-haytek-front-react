type Props = {
    filterType: string;
};

const Filter = (props: Props) => {

    return (
        <>
            <div className="container px-0 py-2" id="icon-grid">
                <div className="row">
                    <div className="col">

                        {props.filterType === 'date' ? (
                            <div className="mb-0">
                                <label className="form-label">Selecione a Data de Separação</label>

                                <input type="date" className="form-control" id="datepicker" />

                                <div className="form-text">
                                    Ao selecionar a data, vamos listar todas as separações necessárias por transportadora e
                                    endereço.
                                </div>
                            </div>
                        ) : (
                            <div className="mb-0">
                                <label className="form-label">Selecione a Transportadora</label>

                                <select className="form-select">
                                    <option value="correios">Correios</option>
                                    <option value="correios">JadLog</option>
                                    <option value="correios">TAM</option>
                                </select>

                                <div className="form-text">
                                    Ao selecionar a transportadora, vamos listar todas as separações necessárias por dia.
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter
