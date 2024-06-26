import { Dispatch, SetStateAction, useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";

interface RangeInputFormRowProps {
  title: string;
  setValue: Dispatch<SetStateAction<number>>;
}

export default function RangeInputFormRow({
  title,
  setValue,
}: RangeInputFormRowProps) {
  const [valueB, setValueB] = useState(0);
  const [valueRangeA, setValueRangeA] = useState(0);
  const [valueRangeB, setValueRangeB] = useState(0);

  const valueA = useMemo(() => {
    return valueRangeB - valueRangeA;
  }, [valueRangeA, valueRangeB]);

  const total = useMemo(() => {
    setValue(valueA * valueB);
    return valueA * valueB;
  }, [setValue, valueA, valueB]);
  return (
    <TableRow>
      <TableCell>
        <Input value={valueA} disabled />
      </TableCell>
      <TableCell className="flex text-start px-3 items-center space-x-2">
        <p>{title}</p>
        <Input
          value={valueRangeA}
          className="min-w-16"
          onChange={(e) => setValueRangeA(+e.target.value)}
        />
        <p>-</p>
        <Input
          value={valueRangeB}
          onChange={(e) => setValueRangeB(+e.target.value)}
        />
      </TableCell>
      <TableCell>
        <Input value={valueB} onChange={(e) => setValueB(+e.target.value)} />
      </TableCell>
      <TableCell>{total}</TableCell>
    </TableRow>
  );
}
