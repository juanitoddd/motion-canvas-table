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
    headers: [
      { id:'name', label: 'Name'}, 
      { id:'color', label: 'Color'}, 
      { id:'age', label: 'Age'}],
    rows: [
      [
        {group: 'name', label: 'Milo'}, 
        {group: 'color', label: <Circle width={100} height={100} fill="#2D8597"/>}, 
        {group: 'age', label: 3}
      ],
      [
        {group: 'name', label: 'Spot'}, 
        {group: 'color', label: <Circle width={100} height={100} fill="#ECA0E6"/>}, 
        {group: 'age', label: 2}
      ],
      [
        {group: 'name', label: 'Rover'}, 
        {group: 'color', label:<Circle width={100} height={100} fill="#CBB95B"/> }, 
        {group: 'age', label: <Latex tex="{\Huge\color{white} {y^2} = {x^3} + 7}"></Latex>}
      ],      
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
yield* table().addRow(
    [
      { group: 'name', label: 'Aldi'}, 
      {group: 'color', label: <Circle width={100} height={100} fill="#E16616"/>}, 
      {group: 'age', label: 10 }
    ], 0.5
  )
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