function Hof2(prop) {
    const d=prop.data.filter(item=>{
        return item.type=="Designer"
    })
  return (
    <>
    <h1>Display based on user type</h1>
    {d.map(item=>
             <div key={item.id} className="allitems">
                <span className="id">Id: {item.id}</span>
                <span className="name">Name : {item.name}</span>
                <span className="type">User Type: {item.type}</span>
           </div>
        )}
    </>
  )
}

export default Hof2