import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getCategories, getProducts } from './actions/products';
import ProductBox from './components/ProductBox';
import { useAppDispatch } from './hooks';
import { RootState } from './store';
import { Product } from './types';

function App() {
  const {products, categories} = useSelector((state: RootState) => state.reducer);
  const [filter, setFilter] = useState(categories[0])
  const dispatch = useAppDispatch();
  const filteredProducts = products.filter((product: Product)=>filter ? product.category === filter : true)
  
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
    <select className='block mx-auto my-[70px]' name="filter" id="filter" onChange={(e)=>setFilter(e.target.value)}>
      <option value={undefined} disabled>filter</option>
      <option value={categories[0]}>{categories[0]}</option>
      <option value={categories[1]}>{categories[1]}</option>
    </select>
    <div className='flex flex-wrap gap-20 ml-10 justify-center'>
      {filteredProducts.map((product: Product)=>
        <ProductBox 
        key={product._id} 
        id={product._id}
        image={product.image} 
        model={product.model} 
        name={product.name} 
        price={product.price}/>
        )}
      </div>
    </>
  )
}

export default App
