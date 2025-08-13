import { createContext, useState } from "react";

export const animalsContext = createContext({
    state: { animals: [] },
    actions: { insert: () => { }, remove: () => { } }
});

export const AnimalsProvider = ({ children }) => {
    const [animals, setAnimals] = useState(['누렁이', '점박이', '야옹이'])
    const value = {
        state: { animals: animals },
        actions: {
            insert: () => {
                animals.map((data, i) => {
                    <button key={i}>
                        setAnimals(data)
                    </button>
                })
            },
            remove: (index) => { setAnimals(animals.filter((_, i) => index !== i)) }
        }
    }

    return (
        <animalsContext.Provider value={value}>
            {children}
        </animalsContext.Provider>
    )
}