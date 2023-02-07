import React, { useEffect, useState } from 'react'
import Form from '../Components/Form'

export default function Home() {

    const [component, setComponent] = useState([<Form />])
    let [subTotal, setSubTotal] = useState(0)


    const handleAppend = () => {
        component.push(<Form />)
        setComponent([...component])

    }


    //get subtotal adding all total values of input with classname total on price input change

    useEffect(() => {
        let total = 0
        let totalArray = document.querySelectorAll('.total')
        totalArray.forEach((item) => {
            total += parseInt(item.value)
        })
        setSubTotal(total)
    }, [component])








    return (
        <div className='App'>
            <h1 className="text-3xl font-bold  text-info">
                Khalek Cloth Store
            </h1>
            <div className='container mx-auto px-4 mt-32 forms'>
                {
                    component.map((item, index) => {
                        return (
                            <div key={index} id={index}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
            <button className="btn btn-outline btn-info mt-8" onClick={handleAppend}>Add More Fields</button>
            <div>
                <h3>SUB-TOTAL: {subTotal || 0}</h3>
            </div>
        </div>
    )
}
