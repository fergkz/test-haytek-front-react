import { Pack } from "../../structs/Pack";
import PackBox from "../PackBox/PackBox"

type Props = {
    pack: Pack;
    blockType: string;
};

const PackBlock = (props: Props) => {

    const pack = props.pack;

    return (
        <>
            <div className="container my-4 rounded-3 border shadow-lg">
                <div className="row p-4 pb-3 pe-lg-0 border-bottom">
                    <div className="col-sm-12">
                        <div className="row">

                            {props.blockType == "carrier" ? (
                                <div className="col-md-3 col-sm-12 text-md-start py-md-0 text-center text-sm-center py-3 py-sm-3">
                                    <h6 className="">Expedição: </h6>
                                    <div className="form-text fs-5">
                                        {(() => {
                                            const splitDate = pack.DeliveryDate.split('-');
                                            return splitDate[2] + '/' + splitDate[1] + '/' + splitDate[0];
                                        })()}
                                    </div>
                                </div>
                            ) : (
                                <div className="col-md-3 col-sm-12 text-md-start py-md-0 text-center text-sm-center py-3 py-sm-3">
                                    <h6 className="">Transportadora: </h6>
                                    <div className="form-text">
                                        {pack.CarrierName}
                                    </div>
                                </div>
                            )}

                            <div className="col-md-7 col-sm-12 text-md-start py-md-0 text-center text-sm-center py-3 py-sm-3">
                                <h6 className="">Endereço: </h6>
                                <div className="form-text">
                                    {pack.AddressStreet ? pack.AddressStreet + ", " : null}
                                    {pack.AddressComplement ? pack.AddressComplement + ", " : null}
                                    {pack.AddressNeighborhood ? pack.AddressNeighborhood + ", " : null}
                                    {pack.AddressZipCode ? pack.AddressZipCode + ", " : null}
                                    {pack.AddressCity ? pack.AddressCity + ", " : null}
                                    {pack.AddressState ? pack.AddressState : null}
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-12 py-md-0 text-center py-sm-3">
                                <h6 className="">Itens:
                                    <div className="form-text fs-4">
                                        {pack.Boxes.reduce((acc, box) => acc + box.ItemsQuantity, 0)}
                                    </div>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row p-4 pb-4 pe-lg-4">
                    {pack.Boxes.map((box, index) => {
                        return (
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pb-4" key={index}>
                                <PackBox box={box} />
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default PackBlock
