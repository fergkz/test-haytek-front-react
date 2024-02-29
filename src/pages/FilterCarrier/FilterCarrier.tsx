import { useState } from 'react';
import Filter from "../sections/Filter/Filter"
import Menu from "../sections/Menu/Menu"
import Results from "../sections/Results/Results"

const FilterCarrier = () => {

    const [filter, setFiltro] = useState<string>('');

    const handleFiltroChange = (novoFiltro: string) => {
        setFiltro(novoFiltro);
    };

    return (
        <>
            <Menu />
            <Filter filterType="carrier" onFilterChange={handleFiltroChange} />
            <Results filter={filter} />
        </>
    )
}

export default FilterCarrier
