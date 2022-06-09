import { Heading } from "@cabindao/topo";

const PageTitle = ({ children, css, ...props }) => {
  return <Heading
    {...props}
    css={{
      ...css,
      color: "$forest",
      position: 'relative',
      "&:before": {
          content: '',
          position: "absolute",
          top: "110%",
          height: "$2",
          width: "15%",
          backgroundColor: "$sprout",
      }
    }}>{children}</Heading>;
};

export default PageTitle;
