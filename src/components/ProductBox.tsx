import React from 'react';

type ProductBoxProps = {
  id: string
  image: string
  model: string
  name: string
  price: string
}

const ProductBox = ({id, image, model, name, price}:ProductBoxProps) => {
  console.log(image)
  return (
    <div className='border flex flex-col items-center w-[250px] mx-10 py-10'>
      <img className='w-[150px]' src={image} alt={name} />
      <p>{name}</p>
      <p>{model}</p>
      <p>{price}</p>
    </div>
  )
}

export default ProductBox
