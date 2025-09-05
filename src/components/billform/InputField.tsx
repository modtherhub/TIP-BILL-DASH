interface InputFieldProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, placeholder }) => {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type="number"
        className="border rounded p-2 w-full"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
