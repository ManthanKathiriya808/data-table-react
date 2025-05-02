import DataTable from 'react-data-table-component';
import './App.css'

import { fetchApi } from '../Api/fetchApi';
import Table from './components/table';

function App() {
 
  const {loading,err,data} = fetchApi(`https://dummyjson.com/users`)


  

  

  

  // console.log(data)
  return (
    <>


        <div className='max-w-[1270px] mx-auto'>
        {
        <div className=' p-5 max-w-7xl mx-auto'>
          {
            loading ?  <img className="text-center  my-10 " src="https://media3.giphy.com/media/emySgWo0iBKWqni1wR/200w.gif?cid=6c09b952vy7tr3zgi2lg6un44xsqyrbotpidgnf73uu4xqhz&ep=v1_gifs_search&rid=200w.gif&ct=g"/>
            
            :err ? <h3 className="text-center text-4xl my-10 text-red-600">Something Went Wrong</h3>

            :
           <div className='shadow shadow-2xl p-4 '> 

   

   <Table data={data}/>
   </div>
          }
        </div>
      }
        </div>
		


    </>
  )
}

export default App
