import {Table,Segment, Container} from 'semantic-ui-react';
import React from 'react';
class App extends React.Component {
  render(){
  return (
    <Container fluid style={{padding:20}}>
      <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>S.No</Table.HeaderCell>
        <Table.HeaderCell>Date Created</Table.HeaderCell>
        <Table.HeaderCell>Brand</Table.HeaderCell>
        <Table.HeaderCell>Part No.</Table.HeaderCell>
        <Table.HeaderCell>Available Stock</Table.HeaderCell>
        <Table.HeaderCell>App-Age</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>19-jan-2021</Table.Cell>
        <Table.Cell>Schiender</Table.Cell>
        <Table.Cell>ABC-1021</Table.Cell>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>5 Amp 220 v Relay</Table.Cell>
        <Table.Cell>open</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>19-jan-2021</Table.Cell>
        <Table.Cell>Schiender</Table.Cell>
        <Table.Cell>ABC-1021</Table.Cell>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>5 Amp 220 v Relay</Table.Cell>
        <Table.Cell>Open</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>19-jan-2021</Table.Cell>
        <Table.Cell>Schiender</Table.Cell>
        <Table.Cell>ABC-1021</Table.Cell>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>5 Amp 220 v Relay</Table.Cell>
        <Table.Cell>Open</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>4</Table.Cell>
        <Table.Cell>19-jan-2021</Table.Cell>
        <Table.Cell>Schiender</Table.Cell>
        <Table.Cell>ABC-1021</Table.Cell>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>5 Amp 220 v Relay</Table.Cell>
        <Table.Cell>Open</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>5</Table.Cell>
        <Table.Cell>19-jan-2021</Table.Cell>
        <Table.Cell>Schiender</Table.Cell>
        <Table.Cell>ABC-1021</Table.Cell>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>5 Amp 220 v Relay</Table.Cell>
        <Table.Cell>Open</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>6</Table.Cell>
        <Table.Cell>19-jan-2021</Table.Cell>
        <Table.Cell>Schiender</Table.Cell>
        <Table.Cell>ABC-1021</Table.Cell>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>5 Amp 220 v Relay</Table.Cell>
        <Table.Cell>Open</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </Container>
  );
  }
}

export default App;
