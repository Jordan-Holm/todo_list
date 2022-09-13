import { useState, useEffect } from 'react';

const ListForm = ({ addList, id, title, desc, updateList, setEdit }) => {
  const [list, setList] = useState({ title: '', desc: '' })

  useEffect( () => {
    if (id) {
      setList({ title, desc })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateList(id, list)
      setEdit(false)
    } else {
      addList(list)
    }
    setList({ title: '', desc: '' })
  }

  return (
    <>
      <h1>{ id ? 'Edit' : 'Create'} List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name='title'
          value={list.title}
          onChange={(e) => setList({ ...list, title: e.target.value })}
          required
          placeholder='List name'
        />
        <textarea
          name='desc'
          value={list.desc}
          onChange={(e) => setList({ ...list, desc: e.target.value })}
          required
          placeholder='description'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ListForm;