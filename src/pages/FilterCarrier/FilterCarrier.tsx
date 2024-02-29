import { useState } from 'react';
import Filter from "../sections/Filter/Filter"
import Menu from "../sections/Menu/Menu"
import Results from "../sections/Results/Results"

const FilterCarrier = () => {

    const [carrierId, setCarrierId] = useState<string>('');

    const handleFiltroChange = (carrierId: string) => {
        setCarrierId(carrierId);
    };

    return (
        <>
            <Menu />
            <Filter filterType="carrier" onFilterChange={handleFiltroChange} />
            {carrierId ? <Results filterType="carrier" carrierId={carrierId} /> : null}
        </>
    )
}

export default FilterCarrier
