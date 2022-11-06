import React from "react";
import { Table, Image, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableFarmaciaAdmin.scss";

export function TableFarmaciaAdmin(props) {

  const { farmacias, updateFarmacia,deleteFarmacia} = props;  

  return (
    <Table className="table-farmacia-admin">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nombre</Table.HeaderCell>
          <Table.HeaderCell>Ubicacion</Table.HeaderCell>
          <Table.HeaderCell>Localidad</Table.HeaderCell>
          <Table.HeaderCell>Fecha</Table.HeaderCell>
          <Table.HeaderCell>Hora</Table.HeaderCell>
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
            <Table.Cell>{farmacia.turno_date}</Table.Cell>
            <Table.Cell>{farmacia.turno_time}</Table.Cell>
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
