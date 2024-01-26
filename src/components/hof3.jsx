function Hof3(prop) {
    const d = prop.data.filter(item=> {
         return item.name[0]=="J"
    })
    console.log(d)
  return (
    <>
    <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
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

export default Hof3