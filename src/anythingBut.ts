import RawExpression from "./types/raw-expression";
import Expression from "./types/expression";
import exprToRaw from "./util/expr-to-raw";

function anythingBut(exp: Expression): RawExpression {
  const raw = exprToRaw(exp);

  return new RawExpression(`[^${raw}]*`);
}

export default anythingBut;
