// import Login from '../components/Login'
import { FC, useState } from 'react';
import styles from '../styles/Home.module.css';
import NavigationBar from '../components/NavigationBar';
import { TextField } from '@mui/material';
import GameForm from '../components/GameForm';
import List from '../components/metadata-list';


const Home = () => {

  let [data, setData] = useState({});

  const onReceiveData = (datos: object) => {
    console.log('data del index ->' + data);
    setData(datos);
  }

  return (

    
   
   
   <div >
      {Object.keys(data).length===0 ? <div className={styles.main} style={{ padding: '50px 0 100px 0' }}><GameForm onChange={(datas:object)=> onReceiveData(datas)}></GameForm> </div>: <div><List {...data}></List> </div>}
      {/* Añadir el List con operador ternario recibiendo por parametro data */}

    </div>

  )
}


export default Home