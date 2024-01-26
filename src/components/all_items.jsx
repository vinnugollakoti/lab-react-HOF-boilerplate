function Map(prop) {
    return(
        <>
        {prop.data.map(item=>
             <div key={item.id} className="allitems">
                <span className="id">Id: {item.id}</span>
                <span className="name">Name : {item.name}</span>
                <span className="type">User Type: {item.type}</span>
           </div>
        )}
        </>
    )
}
export default Map