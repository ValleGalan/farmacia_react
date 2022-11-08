import React from "react";
import { Table, Image, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableFarmaciaAdmin.scss";
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import _ from 'lodash'
//import faker from 'faker'

//estado inicial
const initialState = {
  loading: false,
  results: [],
  value: '',
}
//acciones
function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}
export function TableFarmaciaAdmin(props) {
  //DENTRO
  const { farmacias, updateFarmacia,deleteFarmacia} = props;  

  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state

  const timeoutRef = React.useRef()

  const handleSearchChange = React.useCallback((e, data) => {
   
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.nombre)
      console.log(re);
      console.log(isMatch);
      //console.log(results);

       dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(farmacias,  
          function(o) {
            return o.nombre;
         }
          ),//isMatch
      })
      console.log(results);

    }, 300)
  }, [])
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])
  return (
   
   <div>
    <Search  
    loading={loading}
    placeholder="Buscar" 
    onResultSelect={(e, data) =>
      dispatch({ type: 'UPDATE_SELECTION', selection: data.result.nombre })
    }
    onSearchChange={handleSearchChange}
    results={farmacias}
    value={value}
    ></Search>

     <Table className="table-farmacia-admin">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nombre</Table.HeaderCell>
          <Table.HeaderCell>Ubicacion</Table.HeaderCell>
          <Table.HeaderCell>Localidad</Table.HeaderCell>
          <Table.HeaderCell>Telefono</Table.HeaderCell>
          <Table.HeaderCell>Fecha</Table.HeaderCell>
          <Table.HeaderCell>Hora Desde</Table.HeaderCell>
          <Table.HeaderCell>Hora Hasta</Table.HeaderCell>
          <Table.HeaderCell>Imagen</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {map(farmacias, (farmacia, index) => (
          <Table.Row key={index}>

            <Table.Cell>{farmacia.nombre}</Table.Cell>
            <Table.Cell>{farmacia.ubicacion}</Table.Cell>
            <Table.Cell>{farmacia.localidad}</Table.Cell>
            <Table.Cell>{farmacia.telefono}</Table.Cell>
            <Table.Cell>{farmacia.turno_date}</Table.Cell>
            <Table.Cell>{farmacia.turno_timeFrom}</Table.Cell>
            <Table.Cell>{farmacia.turno_timeTo}</Table.Cell>

            <Table.Cell width={2}> <Image src={farmacia.imagen} /> </Table.Cell>

            <Actions
              farmacia={farmacia}
              updateFarmacia={updateFarmacia}
              deleteFarmacia={deleteFarmacia}
            />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
   </div>
  );
}

function Actions(props) {
  const { farmacia, updateFarmacia,deleteFarmacia} = props; 
  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => updateFarmacia(farmacia)}> <Icon name="pencil" />  </Button>
      <Button icon negative onClick={() => deleteFarmacia(farmacia)}>
        <Icon name="close" />
      </Button>

    </Table.Cell>
  );
}
