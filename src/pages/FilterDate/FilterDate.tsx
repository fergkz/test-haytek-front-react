import { useState } from 'react';
import Filter from "../sections/Filter/Filter"
import Menu from "../sections/Menu/Menu"
import Results from "../sections/Results/Results"

const FilterDate = () => {

    const [date, setDate] = useState<string>('');

    const handleFiltroChange = (date: string) => {
        setDate(date);
    };

    return (
        <>
            <Menu />
            <Filter filterType="date" onFilterChange={handleFiltroChange} />
            {date ? <Results filterType="date" date={date} /> : null}
        </>
    )
}

export default FilterDate
