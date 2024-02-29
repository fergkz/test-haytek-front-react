import { PackBox as PackBoxStruct } from "../../structs/Pack";
import "../../structs/Pack";

type Props = {
    box: PackBoxStruct;
};

const PackBox = (props: Props) => {

    const box = props.box;

    return (
        <>
            <div className="card ">
                <div className="card-body">
                    <h5 className="card-title">
                        Caixa {box.BoxType} - {box.ItemsQuantity} {box.ItemsQuantity > 1 ? 'itens' : 'item'}
                    </h5>
                    <strong>Pedidos</strong>
                    <ul className="list-group list-group-flush">
                        {box.OrdersIds.map((orderId, index) => {
                            return (
                                <li className="list-group-item" key={index}>{orderId}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PackBox
