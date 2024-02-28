import Filter from "./sections/Filter/Filter"
import Menu from "./sections/Menu/Menu"
import Results from "./sections/Results/Results"

const FilterCarrier = () => {

    return (
        <>
            <Menu />
            <Filter filterType="carrier" />
            <Results />
        </>
    )
}

export default FilterCarrier
