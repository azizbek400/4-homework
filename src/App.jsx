import './App.css'

import { useState, useEffect } from 'react';
import axiosAsos from './api';

function App() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        let response = await axiosAsos("/shows")
        setData(response.data)
      }

      catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  console.log(data);
  return (
    <div className='container' style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
      {
        data.map(product => {
          return <div key={product.id}>
            <img style={{ marginTop: "5%", borderRadius: "20px", width: "250px" }} src={product.image.medium} alt="" />
            <h3 style={{ fontSize: "23px", color: "brown" }}>{product.name}</h3>
          </div>
        })
      }

      {
        loading && <p>Loadind...</p>
      }
    </div>
  )
}

export default App
