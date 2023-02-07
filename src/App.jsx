
import { Chrono } from 'react-chrono'
import './App.css'
import test from './assets/test.jpg'

function App() {

  return (
    <section className='app'>
    <div className="container">
      <Chrono
        theme={{
          primary: 'red',
          secondary: 'white',
          cardBgColor: 'none',
          // cardForeColor: 'violet',
          titleColor: 'red',
          titleColorActive: 'red',
        }}
        hideControls
        timelineCircleDimension= '12'
        items={[
          {
            title: "2016",
          },
          {
            title: "2017",
          },
          {
            title: "2018",
          },
          {
            title: "2020",
          },
          {
            title: "2022",
          }]}
          mode="HORIZONTAL"
        >

        <section style={{ width: '100%', display: 'flex' }}>
          <img style={{ width: '45%' }} src={test} alt="svg" />
          <div style={{ display: 'flex', flexDirection: 'column', width: '55%', color: 'black', marginLeft: '30px' }}>
            <h2 style={{ color: 'red', margin: '10px', }} >Los inicios</h2>
            <p style={{lineHeight: '15px', marginTop: '10px', }}>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur</p>
          </div>
        </section>

        <section style={{ width: '100%', display: 'flex' }}>
          <img style={{ width: '45%' }} src={test} alt="svg" />
          <div style={{ display: 'flex', flexDirection: 'column', width: '55%', color: 'black', marginLeft: '30px' }}>
            <h2 style={{ color: 'red',  margin: '10px', }} >Licitación Publica Internacional e inicio de obra Paseo Turistico</h2>
            <p style={{lineHeight: '15px', marginTop: '10px', }}>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur</p>
          </div>
        </section>

        <section style={{ width: '100%', display: 'flex' }}>
          <img style={{ width: '45%' }} src={test} alt="svg" />
          <div style={{ display: 'flex', flexDirection: 'column', width: '55%', color: 'black', marginLeft: '30px' }}>
            <h2 style={{ color: 'red',  margin: '10px', }} >Inicio de obras de construcción del tramo norte del Anillo Vial</h2>
            <p style={{lineHeight: '15px', marginTop: '10px', }}>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur</p>
          </div>
        </section>

        <section style={{ width: '100%', display: 'flex' }}>
          <img style={{ width: '45%' }} src={test} alt="svg" />
          <div style={{ display: 'flex', flexDirection: 'column', width: '55%', color: 'black', marginLeft: '30px' }}>
            <h2 style={{ color: 'red',  margin: '10px', }} >Apertura del Anillo Vial Norte</h2>
            <p style={{lineHeight: '15px', marginTop: '10px', }}>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur</p>
          </div>
        </section>

        <section style={{ width: '100%', display: 'flex' }}>
          <img style={{ width: '45%' }} src={test} alt="svg" />
          <div style={{ display: 'flex', flexDirection: 'column', width: '55%', color: 'black', marginLeft: '30px' }}>
            <h2 style={{ color: 'red',  margin: '10px', }} >Estudio de planificación urbana, gestión patrimonial y turística</h2>
            <p style={{lineHeight: '15px', marginTop: '10px', }}>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur</p>
            <button className='button'>Descargar documento</button> 
          </div>
        </section>

        </Chrono>
    </div>
    </section>
  )
}

export default App
