import * as Blockly from 'blockly/core';
import { Shape } from 'blockly/core/renderers/common/constants';

const svgPaths = Blockly.utils.svgPaths;

export interface Rectangular {
  type: number;
  height: number;
  width: number;
  pathUp: string;
  pathDown: string;
};

export interface Semicircular {
  type: number;
  height: number;
  width: number;
  pathUp: string;
  pathDown: string;
};

export class CustomConstantProvider extends Blockly.blockRendering.ConstantProvider {
  // Set this.SHAPE_PRIMITIVE = 10
  constructor() {
    super();
  }

  override SHAPES = { PUZZLE: 1, NOTCH: 2, RECTANGULAR: 3, SEMICIRCULAR: 4 };
  
  RECTANGULAR_WIDTH: number = 6;
  RECTANGULAR_HEIGHT: number = 12;
  RECTANGULAR: Rectangular;

  SEMICIRCULAR_RADIUS: number = 7;
  SEMICIRCULAR: Semicircular;

  // Set this.SHAPE = this.makeShape()
  init(): void {
      super.init()
      this.RECTANGULAR = this.makeRectangular();
      this.SEMICIRCULAR = this.makeSemicircular();
  }

  protected makeRectangular(): Rectangular {
    const height = this.RECTANGULAR_HEIGHT;
    const width = this.RECTANGULAR_WIDTH;

    const makePath = (dir: number) => svgPaths.line([
      svgPaths.point(-width, 0),
      svgPaths.point(0, dir * height),
      svgPaths.point(width, 0)
    ])
    const pathUp = makePath(-1);
    const pathDown = makePath(1);

    return {type: this.SHAPES.RECTANGULAR, height, width, pathUp, pathDown};
  }

  protected makeSemicircular(): Semicircular {
    const radius = this.SEMICIRCULAR_RADIUS;
    const width = this.RECTANGULAR_WIDTH;


    const pathUp = `a ${radius} ${radius} 0 0 1 0,${-2 * radius}`;
    const pathDown = `a ${radius} ${radius} 0 0 0 0,${2 * radius}`;

    return {type: this.SHAPES.SEMICIRCULAR, height: 2 * radius, width: radius, pathUp, pathDown};
  }

  // Switch on connection type and return shape saved in init
  shapeFor(connection: Blockly.RenderedConnection): Shape {
    switch (connection.getCheck()?.[0]) {
      case 'name_intro':
        return this.RECTANGULAR
      case 'use':
        return this.SEMICIRCULAR
      default:
        return super.shapeFor(connection)
    }
  }
}