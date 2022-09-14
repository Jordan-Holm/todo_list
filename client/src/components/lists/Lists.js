import { useState, useEffect } from 'react';
import axios from 'axios';
import ListForm from './ListForm';
import AllList from './AllList';

const Lists = () => {
  const [lists, setLists] = useState([])

  useEffect( () => {
    axios.get('/api/lists')
      .then( res => setLists(res.data))
      .catch( err => console.log(err))
  }, [])

  const addList = (list) => {
    axios.post('/api/lists', { list })
      .then( res => setLists([...lists, res.data]))
      .catch( err => console.log(err))
  }

  const updateList = (id, list) => {
    axios.put(`/api/lists/${id}`, { list })
      .then( res => {
        const newUpdatedLists = lists.map( l => {
          if (l.id == id) {
            return res.data
          }
          return l
        })
        setLists(newUpdatedLists)
      })
      .catch( err => console.log(err))
  }

  const deleteList = (id) => {
    axios.delete(`/api/lists/${id}`)
      .then( res => {
        setLists(lists.filter( l => l.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <ListForm addList={addList} />
      <h1>All Lists</h1>
      <AllList 
        lists={lists}
        updateList={updateList}
        deleteList={deleteList}
      />
    </>
  )
}

export default Lists;