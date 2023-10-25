# Motion Canvas Table 

## Install library

```bash
npm install @juanddd/motion-canvas-table
```

## Using this library

```ts
import {Table, TableData, TableStyle} from '@cromasome/motion-canvas-table';
```

### Table structure

```ts
const table = createRef<Table>();

const data: TableData = {
  headers: [{ id:'name', label: 'Name'}, { id:'breed', label: 'Breed'}, { id:'age', label: 'Age'}],
  rows: [
    [{group: 'name', label: 'Fido'}, {group: 'breed', label: 'Labrador'}, {group: 'age', label: 3}],
    [{group: 'name', label: 'Spot'}, {group: 'breed', label: 'Poodle'}, {group: 'age', label: 2}],
    [{group: 'name', label: 'Rover'}, {group: 'breed', label: 'Retriever'}, {group: 'age', label: 4}],
    [{
      group: 'name',
      label: <Latex tex="{\Huge\color{white} {y^2} = {x^3} + 7}"></Latex>
    }]
  ]
};
```

### Table Style
```ts
const style: TableStyle = {
  background: '#555',
  gap: 5,
  headerStyle: {
    fill: '#111'
  },
  rowStyle: {
    fill: '#1a1a12',
    padding: 15
  }       
};
```

### Add to view

```ts
view.add(    
    <Table
      ref={table}
      data={data}
      style={style}
    />    
  );  
```

## Functions

### Add Row

```ts
yield* table().addRow([{ group: 'name', label: 'Roco'}, {group: 'breed', label: 'boxed'}, {group: 'age', label: 10 }], 0.5)
```

### Remove Row
// TODO:

### Add Column
// TODO:

### Remove Column
// TODO:

### Highlight Row
// TODO:

### Highlight Column
// TODO:

### Highlight Cell
// TODO: