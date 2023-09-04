import * as Blockly from "blockly";
import { CustomRenderer } from './custom';

export class CustomRenderInfo extends Blockly.blockRendering.RenderInfo {
  constructor(renderer: CustomRenderer, block: Blockly.BlockSvg) {
    super(renderer, block)
  }

  protected addInput_(input: Blockly.Input, activeRow: Blockly.blockRendering.Row): void {
      if (this.isInline
        && input.type == Blockly.inputTypes.VALUE
        && input === this.block_.inputList[this.block_.inputList.length - 1]) {
          activeRow.elements.push(
            new Blockly.blockRendering.ExternalValueInput(this.constants_, input)
          );
          activeRow.hasExternalInput = true;
        if (activeRow.align === null) {
          activeRow.align = input.align;
        }
      } else {
        super.addInput_(input, activeRow);
      }
  }
}