import React from "react";

function generateGroupedFieldCombinations(
  fields: string[],
  values: string[][]
): Record<string, string>[][] {
  if (fields.length !== values.length) {
    throw new Error("Fields and values length mismatch.");
  }

  const [primaryField, ...restFields] = fields;
  const [primaryValues, ...restValues] = values;

  return primaryValues!.map((primaryVal) => {
    // Her bir primaryVal için içteki kombinasyonları üret
    let group: Record<string, string>[] = [{}];

    for (let i = 0; i < restFields.length; i++) {
      const field = restFields[i];
      const fieldValues = restValues[i];

      group = group.flatMap((entry) =>
        fieldValues!.map((value) => ({
          ...entry,
          [field!]: value,
        }))
      );
    }

    // Hepsine primaryField değerini ekle
    return group.map((entry) => ({
      [primaryField!]: primaryVal,
      ...entry,
    }));
  });
}

type ComponentGeneratorProps = {
  fields: string[];
  values: string[][];
  children?: React.ReactNode;
  direction?: "horizontal" | "vertical";
};

export const ComponentGenerator = ({
  fields,
  values,
  children,
  direction = "horizontal",
}: ComponentGeneratorProps) => {
  const componentMap = generateGroupedFieldCombinations(fields, values);

  return (
    <div
      className={`flex ${direction === "horizontal" ? "flex-row" : "flex-col"} gap-2`}
    >
      {componentMap.map((group, index) => {
        return (
          <div
            key={index}
            className={`flex ${direction === "horizontal" ? "flex-col" : "flex-row"} gap-2`}
          >
            {group.map((props, subIndex) => {
              return React.cloneElement(children as React.ReactElement, {
                ...props,
                key: `${index}-${subIndex}`,
              });
            })}
          </div>
        );
      })}
    </div>
  );
};
