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

        axios.get(`http://localhost/v1/delivery-pack`, {
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
            ) : (allPacks.length == 0 ? (
                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-text fs-4 text-center p-5">
                                Nenhum registro encontrado
                            </div>
                        </div>
                    </div>
                </div>
            ) : null)}

            {!loading ? allPacks.map((pack) => {
                if (props.filterType === 'carrier' && pack.CarrierId !== props.carrierId) {
                    return null;
                }

                return (
                    <PackBlock pack={pack} blockType="s" />
                )
            }) : null}
        </>
    )
}

export default Results
