const ColorPickerDisplay = ({
  primaryColor,
  setPrimaryColor,
}: {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}) => {
  return (
    <div>
      <span className="text-sm ml-2">Escolha sua cor primária</span>

      <div className="p-2 flex items-center space-x-2">
        <input
          type="color"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        />

        <span style={{ color: primaryColor }}>{primaryColor}</span>
      </div>
    </div>
  );
};
export default ColorPickerDisplay;
