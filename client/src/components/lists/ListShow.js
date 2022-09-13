import { useState } from 'react';
import ListForm from './ListForm';

const ListShow = ({ id, title, desc, updateList }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ?
        <>
          <ListForm 
            updateList={updateList}
            id={id}
            title={title}
            desc={desc}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <div>
          <h1> {title} {desc}</h1>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button>Delete</button>
          <button>Todos</button>
        </div>
      }
      <hr />
    </>
  )
}

export default ListShow;