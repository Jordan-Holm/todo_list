import ListShow from './ListShow';

const AllList = ({ lists, updateList, deleteList }) => (
    <>
        {
            lists.map( l => 
                <ListShow 
                    key={l.id}
                    {...l}
                    updateList={updateList}
                    deleteList={deleteList}
                />    
            )
        }
    </>
)

export default AllList