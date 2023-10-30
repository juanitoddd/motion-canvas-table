import {
  Layout,
  NodeProps,
  Rect,
  Shape,
  ShapeProps,
  Txt,
  Node,
  FlexContent,
  FlexItems,
  Circle,
} from '@motion-canvas/2d';
import {SignalValue, all, createRef, makeRef} from '@motion-canvas/core';

export interface HeaderCell {
  id: string;
  label: Node | string | number;
}

export interface RowCell {
  group: string;
  label: Node | string | number;
}

export interface TableData {
  headers: HeaderCell[];
  rows: Array<RowCell[]>;
}

export interface TableStyle {
  background: string;
  gap: number;
  headerStyle?: {
    fill?: string;
    color?: string;
    padding?: number;
    alignItems?: FlexItems;
    justifyContent?: FlexContent;
  };
  rowStyle?: {
    fill?: string;
    color?: string;
    padding?: number;
    alignItems?: FlexItems;
    justifyContent?: FlexContent;
  };
}

export interface TableProps extends ShapeProps {
  data: TableData;
  style?: TableStyle;
  x?: SignalValue<number>;
  y?: SignalValue<number>;
}

export class Table extends Shape {
  // Table Attrs
  public rows: Array<RowCell[]> = [];
  public cols: Array<RowCell[]> = [];
  // Table Elems
  public container = createRef<Rect>();
  public colNodes: Node[] = [];
  public cells: Rect[] = [];

  public props: TableProps;
  public constructor(props: TableProps) {
    super(props);
    this.props = props;
    this.cols = props.data.headers.map((header: HeaderCell) =>
      props.data.rows.map((row: RowCell[]) =>
        row.find((cell: RowCell) => cell.group === header.id),
      ),
    );
    this.add(
      <Rect
        ref={this.container}
        width={props.width}
        height={props.height}
        fill={props.style?.background || '#fff'}
        {...props}
        layout
        padding={props.style?.gap || 30}
        gap={props.style?.gap || 30}
      >
        {props.data.headers.map((header: HeaderCell, i) => (
          <Layout direction="column" gap={props.style?.gap || 30}>
            <Rect
              fill={props.style?.headerStyle?.fill || '#444'}
              alignItems={props.style?.headerStyle?.alignItems || 'center'}
              justifyContent={
                props.style?.headerStyle?.justifyContent || 'center'
              }
              padding={props.style?.headerStyle?.padding || 10}
              width={'100%'}
            >
              {['string', 'number'].includes(typeof header.label) ? (
                <Txt fill={props.style?.headerStyle?.color || '#fff'}>
                  {header.label.toString()}
                </Txt>
              ) : (
                header.label
              )}
            </Rect>
            <Node ref={makeRef(this.colNodes, i)}>
              {this.cols[i].map((cell: RowCell) => (
                <Rect
                  width={'100%'}
                  height={'100%'}
                  fill={props.style?.rowStyle?.fill || '#444'}
                  alignItems={props.style?.rowStyle?.alignItems || 'center'}
                  justifyContent={
                    props.style?.rowStyle?.justifyContent || 'center'
                  }
                  padding={props.style?.rowStyle?.padding || 10}
                >
                  {cell ? (
                    ['string', 'number'].includes(typeof cell.label) ? (
                      <Txt fill={props.style?.headerStyle?.color || '#fff'}>
                        {cell.label.toString()}
                      </Txt>
                    ) : (
                      cell.label
                    )
                  ) : null}
                </Rect>
              ))}
            </Node>
          </Layout>
        ))}
      </Rect>,
    );
  }

  public *addRow(row: RowCell[], duration: number) {
    const cellRect: Rect[] = [];
    const cols: RowCell[] = this.props.data.headers.map((header: HeaderCell) =>
      row.find((cell: RowCell) => cell.group === header.id),
    );
    cols.map((cell: RowCell, j) =>
      this.colNodes[j].add(
        <Rect
          ref={makeRef(cellRect, j)}
          width={'100%'}
          fill={this.props.style?.rowStyle?.fill || '#444'}
          alignItems={this.props.style?.rowStyle?.alignItems || 'center'}
          justifyContent={
            this.props.style?.rowStyle?.justifyContent || 'center'
          }
          height={'100%'}
          padding={0}
          opacity={0}
        >
          {cell ? (
            ['string', 'number'].includes(typeof cell.label) ? (
              <Txt fill={this.props.style?.headerStyle?.color || '#fff'}>
                {cell.label.toString()}
              </Txt>
            ) : (
              cell.label
            )
          ) : null}
        </Rect>,
      ),
    );
    yield* all(
      ...cellRect.map((_rowRect: Rect) => _rowRect.opacity(1, duration)),
      ...cellRect.map((_rowRect: Rect) =>
        _rowRect.padding(this.props.style?.rowStyle?.padding || 10, duration),
      ),
    );
  }

  public *removeRow(rowIndex: number, duration: number) {
    // TODO:
  }

  public *addCol(col: Array<RowCell[]>, duration: number) {
    // TODO:
  }

  public *removeCol(colIndex: number, duration: number) {
    // TODO:
  }

  public *highlightRow(rowIndex: number, duration: number) {
    // TODO:
  }

  public *highlightCol(colIndex: number, duration: number) {
    // TODO:
  }

  public *highlightCell(colIndex: number, rowIndex: number, duration: number) {
    // TODO:
  }
}
