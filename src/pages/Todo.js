import React, { useState } from 'react'

const Todo = () => {
  const [activity, setActivity] = useState('')
  const [listData, setListdata] = useState([])

  const addActivity = () => {
    // setListdata([...listData, activity])
    // console.log(listData)
    setListdata((listData) => {
      const updatedList = [...listData, activity]
      console.log(updatedList)
      setActivity('')
      return updatedList
    })
  }

  const removeActivity = (i) => {
    const updatedListData = listData.filter((elem, id) => {
      return i !== id
    })
    setListdata(updatedListData)
  }

  const removeAll = () => {
    setListdata([])
  }

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input type='text' placeholder='Add your activities.' value={activity} onChange={(e) => { setActivity(e.target.value) }} />
        <button onClick={addActivity}>Add</button>
        <p className='list-heading'>Here is your Todo Lists :{')'}</p>
        {listData !== [] && listData.map((d, i) => {
          return (
            <>
              <p key={i}>
                <div className="listData">{d}</div>
                <div className="btn-position">
                  <button onClick={() => removeActivity(i)}>Remove</button>
                </div>
              </p>
            </>
          )
        })}
        {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}

      </div >
    </>
  )
}

export default Todo