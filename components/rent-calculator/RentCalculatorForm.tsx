"use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

import InputFormRow from "./InputFormRow";
import RangeInputFormRow from "./RangeInputFormRow";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function RentCalculator() {
  const t = useTranslations("RentCalculator");

  const [rent, setRent] = useState(0);
  const [eBill, setEBill] = useState(0);
  const [wBill, setWBill] = useState(0);

  const total = useMemo(() => {
    return rent + eBill + wBill;
  }, [rent, eBill, wBill]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t("table.header.unit")}</TableHead>
          <TableHead>{t("table.header.detail")}</TableHead>
          <TableHead>{t("table.header.perUnit")}</TableHead>
          <TableHead>{t("table.header.total")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-center">
        <InputFormRow title={t("table.body.rent")} setValue={setRent} />
        <RangeInputFormRow title={t("table.body.ebill")} setValue={setEBill} />
        <RangeInputFormRow title={t("table.body.wbill")} setValue={setWBill} />
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>{t("table.header.total")}</TableCell>
          <TableCell className="text-center">{total.toLocaleString()}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
