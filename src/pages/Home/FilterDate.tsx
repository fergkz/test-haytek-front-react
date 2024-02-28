import Filter from "./sections/Filter/Filter"
import Menu from "./sections/Menu/Menu"
import Results from "./sections/Results/Results"

const FilterDate = () => {

    return (
        <>
            <Menu />
            <Filter filterType="date" />
            <Results />
        </>
    )
}

export default FilterDate
