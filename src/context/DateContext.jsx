import { createContext, useEffect, useState } from "react";

export const DateContext = createContext()

export const DateContextProvider = ({ children }) => {
    const [date, setDate] = useState('')
    const [weekDay, setWeekDay] = useState("")

    useEffect(() => {
        const getDate = () => {
            const monthData = new Date().getMonth()
            const dayData = new Date().getDate()
            const month = monthData < 10 ? `0${monthData}`: monthData
            const day = dayData < 10 ? `0${dayData}` : dayData
            const date = `${day} / ${month}`
            setDate(date)

            const weekDayNum = new Date().getDay()

            switch (weekDayNum) {
                case 0:
                    setWeekDay("Domingo")
                    break;
                case 1:
                    setWeekDay("Segunda")
                    break;
                case 2:
                    setWeekDay("Terça")
                    break;
                case 3:
                    setWeekDay("Quarta")    
                    break;
                case 4:
                    setWeekDay("Quinta")
                    break;
                case 5:
                    setWeekDay("Sexta")
                    break;
                case 6:
                    setWeekDay("Sábado")
                    break;            
                default:
                    break;
            }
        }
        getDate()
    }, [])

    return (
        <DateContext.Provider value={{ date, weekDay }}>
            {children}
        </DateContext.Provider>
    )
}