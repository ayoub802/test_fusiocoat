import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  return (
    <ReactQuill
      className='border border-input h-64 rounded-md'
      value={value}
      onChange={onChange}
    />
  );
};

export default RichTextEditor;