function Hof4(prop) {
    let d=prop.data.filter(i=>{
        return i.type="Designer"
      })
    let total = 0
    d.forEach(item=>{
        total+=item.age
    })
    console.log(d)
  return (
    <>
    <h1>Find the total years of the Designers</h1>
    <div className="allitems">
        
        <p>{total}</p>
    </div>
    </>
  )
}

export default Hof4
