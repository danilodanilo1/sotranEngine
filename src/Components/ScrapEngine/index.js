import React, { useState } from 'react'
import './styles.css'
import arrow from '../../Images/arrow.svg'
import action from '../../Images/action.svg'
export default function ScrapEngine({title}) {

  const [active, setActive] = useState(false)
  const mock = [
    {id:'1', empresa:'Todas', data: '10/08/21', status:'Concluído'},
    {id:'2', empresa:'Cargero', data: '10/08/21', status:'Processando'},
    {id:'3', empresa:'FreteBrás', data: '10/08/21', status:'Concluído'},
    {id:'4', empresa:'Vector', data: '10/08/21', status:'Concluído'},
    {id:'5', empresa:'Gabriel cargas', data: '10/08/21', status:'Concluído'},
    {id:'6', empresa:'Subiu', data: '10/08/21', status:'Falha'},
  ]

  const handleAction = (id) => {
    console.log("o id clicado foi o: ", id)
  }
  return (
      <div className="wrapperScrap">
        <div className='title' >
          {title}
        </div>
        <div className='content'>
          <div className='filtros'>
            <img onClick={() => setActive(!active)}className={`arrow${active? '-active' : ''}`} src={arrow} alt="arrow"/>
            <p onClick={() => setActive(!active)} id="filterP">Filtros</p>
          </div>
          <div className={`dropSearch${active? '-active' : '' }`}>
            <p>Empresa</p>
            <input className='searchCompany'/>
          </div>
          <div className='wrapperTable'>
            <table>
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Empresa Selecionada</td>
                  <td>Data de Início</td>
                  <td>Status</td>
                  <td>Ações</td>
                </tr>
              </thead>
              <tbody>
                 {
                   mock.map(item => {
                     return (
                       <>
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.empresa}</td>
                          <td>{item.data}</td>
                          <td ><div className={item.status}>{item.status}</div></td>
                          <td><img onClick={()=>handleAction(item.id)} className="action" src={action} alt="action" /></td>
                        </tr>
                       </>
                     )
                   })
                 }
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}
