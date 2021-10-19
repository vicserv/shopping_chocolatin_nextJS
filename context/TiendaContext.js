import React, {useState} from 'react'

const Context = React.createContext()

export function TiendaContextProvider({children}) {

    const [Tienda, setTienda] = useState([])

    return <Context.Provider value={{Tienda, setTienda}}>
        {children}
    </Context.Provider>
}

export default Context