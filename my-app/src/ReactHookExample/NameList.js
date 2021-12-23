import React from 'react';

function NameList(){
    const names=['navya','deepthi','archana']
    const nameList= names.map(name=><h1>{name}</h1>)
    const Product=[{id:1, name:'TV', rate:890 },
                    {id:2, name:'mobile', rate:898 },
                {id:3, name:'laptop', rate:657 }]
const productList = Product.map(product=><h1>{product.id} {product.name} {product.rate}</h1>)
  return(
      <div>
          {nameList}
          {productList}
      </div>
  )

}

export default NameList;