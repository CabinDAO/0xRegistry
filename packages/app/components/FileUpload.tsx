import Box from "@components/Box"
//import {} from "@cabindao/topo"

interface iFileUploadProps {
  label: string;
}

const FileUpload = (props: iFileUploadProps) => {
  return (
    <Box>
      <input id="registry-logo" type="file" name={props.label} />
    </Box>
  )
};

export default FileUpload;
