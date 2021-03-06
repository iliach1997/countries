import { useState } from 'react'
import productsData from '../../products.json'
import { ProdactsItem } from './ProdactsItem';
import { Button, TextInput, Form } from '../../atoms';
import { Collapsible } from '../../components/collapsible';

export const Products=()=>{
 const [stokeOnly, setstokeOnly]=useState(false);
 const [filterTerm, setfilterTerm]=useState('');


const renderProducts=()=>{
    let data=productsData.slice();
    if(stokeOnly){
        data= data.filter((item)=>item.stoke)
    }
  if(filterTerm && filterTerm.length>2){
      data= data.filter((item)=>item.name.includes(filterTerm))
  }
    return data.map((item, index)=>{
     return <ProdactsItem prodact={item} key={index}/>
    })

}
    return(
        <div className="row shedow-sm">
           <h3>Products</h3>
           <Form>

              <div className='mb-3 row'>   
            
                  <div className='col-8'>
                 
                   <TextInput value={filterTerm} onChange={({target})=>{
                       setfilterTerm(target.value);
                   }} placeholder="sarch..."/>
                  </div>
                  <div className='col-4'>
          <Button className="btn btn-outline-primary" onClick={()=>setstokeOnly(!stokeOnly)}>
       
          {stokeOnly ? "๐แแแฉแแแแ แกแ แฃแแ แ แแแฃแฅแชแแ":"๐แแแฉแแแแ แแแ แแแจแ แแงแแคแ แแ แแแฃแฅแชแแ"}
              </Button>
          </div>
          
          </div>

        
        </Form>
        
        
        <Collapsible openedTitle="damale producti" closedTitle='macvene producti'>
            <div className='d-flex flex-wrap justify-content'>{renderProducts()}</div>
             </Collapsible>
        
       
        </div>
    )
}