import React, { useState } from 'react'
import './object.css'


const ObjectConcept = () => {
    const [randomId, setRandomId] = useState(1)
    const [data, setData] = useState([
        
    ]);

    const [typeName, setTypeName] = useState();

    function handleData(){
        if(!data) return false;
        setRandomId(randomId + 1)
        setData((prev) => [...prev, {id: randomId, name: typeName, like: 0, dislike: 0}])
        setTypeName("")
    } 

    function handleDelete(id){
        setData(data.filter((item) => item.id !== id))
    }

    function handleLike(id, like){
        setData(data.map((item) => item.id === id ? ({...item, like: like+1}) : item))
    }

    function handleDisLike(id, dislike){
        setData(data.map((item) => item.id === id ? ({...item, dislike: dislike+1}) : item))
    }

    function handleSortByLike(){
        setData([...data].sort((a,b) => b.like - a.like))
    }

    function handleSortByDislike(){
        setData([...data].sort((a,b) => a.dislike - b.dislike))
    }

  return (
    <div className='parentDiv'>
        <h1>Playing with Object using Hooks</h1>
        <input type="text" onChange={(e) => setTypeName(e.target.value)} placeholder='Add Data'/>
        <button onClick={handleData}>Add</button>
        <div style={{margin: '12px'}}>
            <button onClick={handleSortByLike}>Sort By Like</button>
            <button onClick={handleSortByDislike}>Sort By dislike</button>
        </div>
        {
            data.map((elm) => {
                return (
                    <div key={elm.id} className='main_div'>
                        <h2>{elm.id}. {elm.name}</h2>
                        <span>Like: {elm.like}</span>
                        <span>dislike: {elm.dislike}</span>
                        <div style={{margin: '12px'}}>
                            <span><button onClick={() => handleDelete(elm.id)}>Delete</button></span>
                            <span><button onClick={() => handleLike(elm.id, elm.like)}>Like</button></span>
                            <span><button onClick={() => handleDisLike(elm.id, elm.dislike)}>DisLike</button></span>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ObjectConcept