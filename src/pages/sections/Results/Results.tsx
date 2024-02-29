import { useState, useEffect } from 'react';
import PackBlock from "../../../components/PackBlock/PackBlock"
import axios from 'axios';
import { Pack } from '../../../structs/Pack';

type Props = {
    filterType: string;
    carrierId?: string;
    date?: string;
};

const Results = (props: Props) => {

    const [loading, setLoading] = useState(false);
    const [allPacks, setAllPacks] = useState([] as Pack[]);

    useEffect(() => {
        setLoading(true);

        axios.get(`http://localhost:8089/v1/delivery-pack`, {
            headers: {
                'accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then((response) => {
                let responseAllPacks: Pack[] = [];

                for (let i = 0; i < response.data.length; i++) {
                    const row = response.data[i];

                    responseAllPacks.push(
                        {
                            DeliveryDate: row.deliveryDate,
                            CarrierId: row.carrier.id,
                            CarrierName: row.carrier.name,
                            AddressStreet: row.address.street,
                            AddressComplement: row.address.complement,
                            AddressNeighborhood: row.address.neighborhood,
                            AddressZipCode: row.address.zipCode,
                            AddressCity: row.address.city,
                            AddressState: row.address.state,
                            Boxes: row.boxes.map((box: any) => {
                                return {
                                    BoxType: box.boxType,
                                    ItemsQuantity: box.itemsQuantity,
                                    OrdersIds: box.orders.map((order: any) => {
                                        return order.id;
                                    })
                                }
                            })
                        }
                    );
                }

                responseAllPacks.sort((a, b) => {
                    if (a.DeliveryDate < b.DeliveryDate) {
                        return -1;
                    }
                    if (a.DeliveryDate > b.DeliveryDate) {
                        return 1;
                    }
                    return 0;
                });

                setAllPacks(responseAllPacks);

                setLoading(false);
            })
            .catch(() => {
                alert('Erro ao buscar os dados');
            });

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
            ) : null}

            {!loading ? (() => {
                const packsComponents: any[] = [];

                allPacks.map((pack) => {
                    if (props.filterType === 'carrier' && pack.CarrierId !== props.carrierId) {
                        return null;
                    }

                    if (props.filterType === 'date' && pack.DeliveryDate !== props.date) {
                        return null;
                    }

                    packsComponents.push(
                        <PackBlock pack={pack} blockType={props.filterType} />
                    )
                })

                if (packsComponents.length > 0) {
                    return packsComponents
                }

                return (
                    <div className="container my-4">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-text fs-4 text-center p-5">
                                    Nenhum registro encontrado
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })() : null}
        </>
    )
}

export default Results
