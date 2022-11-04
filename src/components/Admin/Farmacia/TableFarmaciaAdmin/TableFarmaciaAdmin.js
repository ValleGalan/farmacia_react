import React from "react";
import { Table, Image, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableFarmaciaAdmin.scss";

export function TableFarmaciaAdmin(props) {
  const { farmacias, updateFarmacia, deleteFarmacia } = props;

  return (
    <Table className="table-farmacia-admin">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Imagen</Table.HeaderCell>
          <Table.HeaderCell>Farmacia</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {map(farmacias, (farmacia, index) => (
          <Table.Row key={index}>
            <Table.Cell width={2}>
              <Image src={farmacia.image} />
            </Table.Cell>
            <Table.Cell>{farmacia.title}</Table.Cell>

            <Actions
              farmacias={farmacias}
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
  const { farmacia, updateFarmacia, deleteFarmacia } = props;

  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => updateFarmacia(farmacia)}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => deleteFarmacia(farmacia)}>
        <Icon name="close" />
      </Button>
    </Table.Cell>
  );
}