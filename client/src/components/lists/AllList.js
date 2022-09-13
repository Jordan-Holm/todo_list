import ListShow from './ListShow';

const AllList = ({ lists, updateList }) => (
    <>
        {
            lists.map( l => 
                <ListShow 
                    key={l.id}
                    {...l}
                    updateList={updateList}
                />    
            )
        }
    </>
)

export default AllList