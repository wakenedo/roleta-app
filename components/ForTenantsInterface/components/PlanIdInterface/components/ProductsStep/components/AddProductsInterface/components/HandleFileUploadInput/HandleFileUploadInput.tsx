const HandleFileUploadInput = ({
  handleFileUpload,
  fileName,
  errors,
}: {
  handleFileUpload: (file: File) => Promise<void>;
  fileName: string | null;
  errors: string[];
}) => {
  console.log("HandleFileUploadInput FileNAme", fileName);
  return (
    <div className="flex flex-col mt-4">
      <span className="text-sm">Escolha seu arquivo </span>
      <div className="border p-2 flex">
        <input
          type="file"
          accept=".json,.csv"
          onChange={(e) => {
            const file = e.target.files?.[0];
            console.log("HandleFileUploadInput", file);
            if (file) handleFileUpload(file);
          }}
        />
      </div>
      {fileName === null && (
        <div className="mb-2">
          <span className="text-xs">Formatos suportados</span>
          <div className="border ">
            <ul className="text-xs p-2 text-center">
              <li>JSON</li>
              <li>CSV</li>
            </ul>
          </div>
        </div>
      )}
      <div>
        {fileName && (
          <div className="text-xs mt-2">Arquivo carregado: {fileName}</div>
        )}
      </div>

      <div>
        {errors.length > 0 && (
          <div className="text-red-500 text-xs">
            {errors.map((err) => (
              <div key={err}>{err}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default HandleFileUploadInput;
