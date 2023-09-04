import * as Blockly from 'blockly/core';
import { Shape } from 'blockly/core/renderers/common/constants';

export class CustomConstantProvider extends Blockly.blockRendering.ConstantProvider {
  // Set this.SHAPE_PRIMITIVE = 10
  constructor() {
    super();
  }

  // Set this.SHAPE = this.makeShape()
  init(): void {
      super.init()
  }

  // Switch on connection type and return shape saved in init
  shapeFor(connection: Blockly.RenderedConnection): Shape {
      return super.shapeFor(connection);
  }
}