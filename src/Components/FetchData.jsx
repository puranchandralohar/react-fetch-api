import axios from 'axios';
import React, { useEffect, useState } from 'react';

export function FetchData(){

    const [value, setValue] = useState("");
    const [comment, setComment] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
   

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then((response)=>{
                console.log(response.data);
                setComment([comment,...response.data]);
                setFilteredData([comment,...response.data])
            })
    }, [])


  useEffect(() => {
    const afterFilterData = filteredData.filter((post) => {
      if (post.name) {
        return post.name.includes(value.toLowerCase());
      }
    });
    setFilteredData(afterFilterData);
  }, [value]);


    const handleText=(e)=>{
       setValue(e.target.value)
    }

    console.log(comment);


    return(
        <>
            <input type="text" name='search' value={value} onChange={handleText} />
            {filteredData.map((item)=>{
                return(
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.email}</p>
                   </div>

                )
            })}
        </>
       
    );

}