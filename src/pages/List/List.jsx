import React from 'react'
import "./list.css"
import Header from '../../Components/Header/Header'
import ListSearch from '../../Components/ListSearch/ListSearch'
import ListResult from '../../Components/ListResults/ListResult'

const List = () => {
  return (
    <>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <ListSearch />
          <div className="listResult">
            <ListResult />
            <ListResult />
            <ListResult />
            <ListResult />
            <ListResult />
            <ListResult />
            <ListResult />
          </div>
        </div>
      </div>
    </>
  )
}

export default List
