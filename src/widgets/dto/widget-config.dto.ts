export interface IWidgetConfig {
  id: number;
  label: string;
  type: string;
  theme: string | null;
  color: string | string[];
  props: any;
  layout: ILayout;
  queryData: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ILayout {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
  moved: boolean;
  static: boolean;
  isResizable: boolean;
}
