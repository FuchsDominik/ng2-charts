import { BaseChartMetaConfig } from './base-chart-meta-config';
import { ScriptableIndexable } from './scriptable-indexable';
import { ChartColor } from './chart-color';
import { JoinStyleType } from './join-style-type';
import { PointStyle } from './point-style';
import { CapStyleType } from './cap-style-type';
import { ChartPointLineSparse } from './chart-point-line-sparse';
import { ChartPointImageType } from './chart-point-image-type';
import { ChartDataSetsBase } from './chart-data-sets-base';

export interface ChartDataSetsLineScatterBase<T extends BaseChartMetaConfig> extends ChartDataSetsBase {
  backgroundColor?: ChartColor;
  borderCapStyle?: CapStyleType;
  borderColor?: ChartColor;
  borderDash?: number[];
  borderDashOffset?: number;
  borderJoinStyle?: JoinStyleType;
  borderWidth?: number;
  cubicInterpolationMode?: 'default' | 'monotone';
  fill?: boolean | string;
  label?: string;
  lineTension?: number;
  pointBackgroundColor?: ScriptableIndexable<ChartColor, T>;
  pointBorderColor?: ScriptableIndexable<ChartColor, T>;
  pointBorderWidth?: ScriptableIndexable<number, T>;
  pointHitRadius?: ScriptableIndexable<number, T>;
  pointHoverBackgroundColor?: ScriptableIndexable<ChartColor, T>;
  pointHoverBorderColor?: ScriptableIndexable<ChartColor, T>;
  pointHoverBorderWidth?: ScriptableIndexable<number, T>;
  pointHoverRadius?: ScriptableIndexable<number, T>;
  pointRadius?: ScriptableIndexable<number, T>;
  pointRotation?: ScriptableIndexable<number, T>;
  pointStyle?: ScriptableIndexable<PointStyle | ChartPointImageType, T>;
  showLine?: boolean;
  spanGaps?: boolean;
  steppedLine?: 'before' | 'after' | 'middle' | boolean;
  xAxisID?: string;
  yAxisID?: string;
  data: number[] | ChartPointLineSparse[];
}