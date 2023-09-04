import Blockly from 'blockly';

export const haskellGenerator = new Blockly.Generator('Haskell');

haskellGenerator.forBlock["function_definition"] = (block, generator) => {
  return `${block.getFieldValue("NAME")} ${generator.valueToCode(block, "ARGUMENTS", 0)} = ${generator.valueToCode(block, "BODY", 0)}`
}

haskellGenerator.forBlock["function_argument"] = (block, generator) => {
  return [`name ${generator.valueToCode(block, "NEXT", 0)}`, 0]
}

haskellGenerator.forBlock["brackets"] = (block, generator) => {
  return [`(${generator.valueToCode(block, "INTERNAL", 0)}) ${generator.valueToCode(block, "NEXT", 0)}`, 0]
}

haskellGenerator.forBlock["if"] = (block, generator) => {
  return [`if (${generator.valueToCode(block, "BOOLEAN", 0)}) then (${generator.valueToCode(block, "IF", 0)}) else (${generator.valueToCode(block, "IF", 0)})`, 0]
}

haskellGenerator.forBlock["where"] = (block, generator) => {
  return `{\n${generator.statementToCode(block, "EXTERNAL")}\n} where {\n${generator.statementToCode(block, "INTERNAL")}\n}`
}

haskellGenerator.forBlock["let"] = (block, generator) => {
  return `let {\n${generator.statementToCode(block, "LET")}\n} in {\n${generator.statementToCode(block, "IN")}\n}`
}