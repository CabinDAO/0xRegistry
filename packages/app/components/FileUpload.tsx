import Box from "@components/Box";
//import {} from "@cabindao/topo"

interface iFileUploadProps {
  label: string;
  value: string;
  onChange: Function;
  accept?: string;
}

const FileUpload = (props: iFileUploadProps) => {
  return (
    <Box>
      <input id="registry-logo" type="file" name={props.label} {...props} />
    </Box>
  );
};

export default FileUpload;
