import * as Blockly from 'blockly/core';
import { CustomConstantProvider } from './constants';

class CustomRenderer extends Blockly.blockRendering.Renderer {
  constructor() {
    //@ts-ignore
    super();
  }

  protected makeConstants_(): Blockly.blockRendering.ConstantProvider {
      return new CustomConstantProvider();
  }
}

Blockly.blockRendering.register('custom_renderer', CustomRenderer);
