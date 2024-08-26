import React, { useEffect, useState } from 'react'


const List = ({submit}) => {
    const [ious, setIOUs] = useState([])

    useEffect(() => {
        const fetchIOUs = async () => {
            const response = await fetch("http://localhost:5001/api/ious")
            const data = await response.json()
    
            setIOUs(data)
        }
        fetchIOUs()
    }, [])

  return (
    <div>
        <h3>List</h3>
        <ul>
            {ious.map((iou) => (
                <li key={iou._id}>
                    {iou.name} - {iou.sku}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default List