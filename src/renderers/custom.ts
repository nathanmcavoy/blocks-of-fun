import * as Blockly from 'blockly/core';
import { CustomConstantProvider } from './constants';
import { CustomRenderInfo } from './renderInfo';

export class CustomRenderer extends Blockly.blockRendering.Renderer {
  constructor() {
    //@ts-ignore
    super();
  }

  protected makeConstants_(): Blockly.blockRendering.ConstantProvider {
      return new CustomConstantProvider();
  }

  protected makeRenderInfo_(block: Blockly.BlockSvg): Blockly.blockRendering.RenderInfo {
      return new CustomRenderInfo(this, block);
  }
}

Blockly.blockRendering.register('custom_renderer', CustomRenderer);
