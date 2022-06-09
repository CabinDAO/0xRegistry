import Link from "next/link";
import { Button } from "@cabindao/topo";
import Box from "./Box";

export interface iButtonRowProps {
  prev?: RowButton;
  next?: RowButton;
}

export type RowButton = {
  text: string;
  href: string | LinkObject;
};

export type LinkObject = {
  pathname: string;
  query?: {};
};

const ButtonRow = ({ prev, next }: iButtonRowProps) => {
  return (
    <Box
      css={{
        display: "flex",
        marginTop: "$20",
      }}
    >
      {prev && (
        <Link href={prev.href} passHref>
          <Button type="link" as="a">
            {prev.text}
          </Button>
        </Link>
      )}

      {next && (
        <Link href={next.href} passHref>
          <Button css={{ ml: "auto" }} type="primary" as="a" tone="wheat">
            {next.text}
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default ButtonRow;
