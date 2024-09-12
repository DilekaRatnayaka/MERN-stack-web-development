import React from 'react'
import {shopItemsList} from './shopItemsList';

function shopPage() {
  return (
    <div className = "shopPage">
        <h1 className = "shopPageTitle">Shop at Us♡</h1>
        <div className = "shopItemsList">{shopItemsList.map((item, key) => {
            return <div>{item.name}</div>;
          })}
        </div>

      
    </div>
  )
}

export default shopPage
