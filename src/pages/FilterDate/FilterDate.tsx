import { useState } from 'react';
import Filter from "../sections/Filter/Filter"
import Menu from "../sections/Menu/Menu"
import Results from "../sections/Results/Results"

const FilterDate = () => {

    const [filter, setFiltro] = useState<string>('');

    const handleFiltroChange = (novoFiltro: string) => {
        setFiltro(novoFiltro);
    };

    return (
        <>
            <Menu />
            <Filter filterType="date" onFilterChange={handleFiltroChange} />
            <Results filter={filter} />
        </>
    )
}

export default FilterDate
