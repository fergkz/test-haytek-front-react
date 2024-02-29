import axios from 'axios';
import { ChangeEvent, useState, useEffect } from 'react';

type Props = {
    filterType: string;
    onFilterChange: (novoFiltro: string) => void;
};

type FilterCarrierType = {
    Id: string;
    Name: string;
};

const Filter = (props: Props) => {

    const [carriers, setCarriers] = useState([] as FilterCarrierType[]);

    let timeoutIfInputChange: any;
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        clearTimeout(timeoutIfInputChange);
        if (props.filterType === 'date') {
            timeoutIfInputChange = setTimeout(() => {
                props.onFilterChange(event.target.value);
            }, 1000);
        } else {
            props.onFilterChange(event.target.value);
        }
    };

    // Quando for montado pela primeira vez, disparamos a data atual
    useEffect(() => {
        if (props.filterType === 'date') {
            props.onFilterChange(new Date().toISOString().split('T')[0]);
        }
    }, []);

    // Quando alterar o tipo de filtro, carrega os dados
    useEffect(() => {
        if (props.filterType !== 'carrier' || carriers.length > 0) {
            return;
        }

        axios.get(`http://localhost:8089/api/v1/test-haytek-api/carriers`, {
            headers: {
                'accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then((response) => {
                let responseCarriers: FilterCarrierType[] = [];

                for (let i = 0; i < response.data.length; i++) {
                    responseCarriers.push(
                        {
                            Id: response.data[i].Id,
                            Name: response.data[i].name
                        }
                    );
                }
                setCarriers(responseCarriers);
                handleInputChange({ target: { value: responseCarriers[0].Id } } as ChangeEvent<HTMLSelectElement>);
            })
            .catch(() => {
                alert('Erro ao buscar os dados');
            });
    }, [props]);

    return (

        <>
            <div className="container px-0 py-2" id="icon-grid">
                <div className="row">
                    <div className="col">

                        {props.filterType === 'date' ? (
                            <div className="mb-0">
                                <label className="form-label">Selecione a Data de Separação</label>

                                <input type="date"
                                    onChange={handleInputChange}
                                    defaultValue={new Date().toISOString().split('T')[0]}
                                    className="form-control" id="datepicker" />

                                <div className="form-text">
                                    Ao selecionar a data, vamos listar todas as separações necessárias por transportadora e
                                    endereço.
                                </div>
                            </div>
                        ) : (
                            <div className="mb-0">
                                <label className="form-label">Selecione a Transportadora</label>

                                {carriers.length == 0 ? (
                                    <div className="form-text">
                                        Carregando...
                                    </div>
                                ) : (
                                    <select className="form-select" onChange={handleInputChange}>
                                        {carriers.map((carrier) => {
                                            return (
                                                <option key={carrier.Id} value={carrier.Id}>{carrier.Name}</option>
                                            )
                                        })}
                                    </select>
                                )}

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
