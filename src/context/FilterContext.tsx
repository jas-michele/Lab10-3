import React, { createContext, useState } from "react";

type Filter = "all" | "active" | "completed";

type FilterContextType = {
    filter: Filter;
    setFilter: (filter: Filter) => void;
}

export const FilterContext = createContext<FilterContextType>({
    filter: "all",
    setFilter: () => {}
})
type Props= {
    children: React.ReactNode;
}

export function FilterProvider({ children }: Props) {
    const [filter, setFilter] = useState<Filter>("all");

    return (
        <FilterContext.Provider value={{ filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}