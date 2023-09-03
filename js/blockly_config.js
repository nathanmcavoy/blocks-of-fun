

Blockly.defineBlocksWithJsonArray([
  {
    "type": "fun_if",
    "message0": "if %1 then %2 else %3",
    "args0": [
      {
        "type": "input_statement",
        "name": "BOOLEAN",
      },
      {
        "type": "input_statement",
        "name": "IF",
      },
      {
        "type": "input_statement",
        "name": "ELSE",
      },
    ],
    previousStatement: null,
  },
  {
    type: "fun_definition",
    message0: "%1 %2 = %3",
    "args0": [
      {
        "type": "field_input",
        "name": "name",
      },
      {
        "type": "input_statement",
        "name": "IF",
      },
      {
        "type": "input_statement",
        "name": "ELSE",
      },
    ],
    previousStatement: null,
    nextStatement: null
  },
  {
    type: "fun_var_intro",
    message0: "%1",
    args0: [{
      type: "field_input",
      name: "NAME"
    }],
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: "where",
    message0: "%1 where %2",
    "args0": [
      {
        "type": "input_statement",
        "name": "INFO",
      },
      {
        "type": "input_statement",
        "name": "DEFINITIONS",
      },
    ],
  },
  {
    type: "let",
    message0: "let %1 in %2",
    "args0": [
      {
        "type": "input_statement",
        "name": "LET",
      },
      {
        "type": "input_statement",
        "name": "IN",
      },
    ],
  }
]);

const toolbox = {
  "kind": "flyoutToolbox",
  "contents": [
    {
      "kind": "block",
      "type": "fun_definition"
    },
    {
      "kind": "block",
      "type": "fun_var_intro"
    },
    {
      "kind": "block",
      "type": "fun_if"
    },
    {
      "kind": "block",
      "type": "where"
    },
    {
      "kind": "block",
      "type": "let"
    },
    {
      "kind": "block",
      "type": "controls_if"
    },
    {
      "kind": "block",
      "type": "controls_repeat_ext"
    },
    {
      "kind": "block",
      "type": "logic_compare"
    },
    {
      "kind": "block",
      "type": "math_number"
    },
    {
      "kind": "block",
      "type": "math_arithmetic"
    },
    {
      "kind": "block",
      "type": "text"
    },
    {
      "kind": "block",
      "type": "text_print"
    },
  ]
}

const blocklyArea = document.getElementById('blocklyArea');
const blocklyDiv = document.getElementById('blocklyDiv');
const workspace = Blockly.inject(blocklyDiv,
    {toolbox: toolbox});
const onresize = function(e) {
  // Compute the absolute coordinates and dimensions of blocklyArea.
  let element = blocklyArea;
  let x = 0;
  let y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
