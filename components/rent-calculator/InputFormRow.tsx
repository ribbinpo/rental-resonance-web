import { Dispatch, SetStateAction, useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";

interface InputFormRowProps {
  title: string;
  setValue: Dispatch<SetStateAction<number>>;
}

export default function InputFormRow({ title, setValue }: InputFormRowProps) {
  const [valueA, setValueA] = useState(1);
  const [valueB, setValueB] = useState(0);

  const total = useMemo(() => {
    setValue(valueA * valueB);
    return valueA * valueB;
  }, [setValue, valueA, valueB]);
  return (
    <TableRow>
      <TableCell>
        <Input value={valueA} onChange={(e) => setValueA(+e.target.value)} />
      </TableCell>
      <TableCell className="text-start px-3">{title}</TableCell>
      <TableCell>
        <Input value={valueB} onChange={(e) => setValueB(+e.target.value)} />
      </TableCell>
      <TableCell>{total}</TableCell>
    </TableRow>
  );
}
