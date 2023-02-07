import React, { useState } from 'react'

export default function Form() {

    const [desc, setDesc] = useState('');
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState();



    let total = quantity * price






    return (
        < >
            <div className='flex sm:flex-row flex-col gap-8 mx-auto'>
                <select onChange={(e) => setDesc(e.target.value)} className="select select-info sm:w-full md:max-w-xs ">
                    <option disabled selected>Description</option>
                    <option>Cloth</option>
                    <option>Pant Piece</option>
                    <option>Shirt</option>
                    <option>Panjabi</option>
                </select>
                <input onChange={(e) => setQuantity(e.target.value)} type="number" placeholder="Quantity" className="input input-bordered input-info w-full" />
                <input onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" className="price input input-bordered input-info w-full " />
                <input value={total || 0} type="number" placeholder="Total" className="total input input-bordered input-info w-full " disabled />
            </div>
            <div className="divider"></div>
        </>
    )
}
