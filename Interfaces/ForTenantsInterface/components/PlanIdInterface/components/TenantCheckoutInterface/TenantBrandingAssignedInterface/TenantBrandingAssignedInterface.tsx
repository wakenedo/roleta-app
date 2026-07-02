const TenantBrandingAssignedInterface = ({
  logoUrl,
  primaryColor,
}: {
  logoUrl: string;
  primaryColor: string;
}) => {
  return (
    <>
      <div>
        <span className="md:text-sm">Branding</span>
      </div>
      <div className="border w-full flex justify-items-start items-center mb-2">
        <div className="border flex p-2 mx-2 my-1">
          <span className="p-2 text-slate-50">
            {logoUrl === "" ? "No Logo" : logoUrl}
          </span>
        </div>

        <div className="flex flex-col items-center  my-2">
          <div className="w-full text-left ml-3 -mt-2">
            <span className="text-slate-100 text-xs text-left">
              Cor primária
            </span>
          </div>
          <div className="border p-2 mx-2 flex">
            <div className="flex space-x-2 items-center">
              <div
                style={{ backgroundColor: primaryColor }}
                className="w-6 h-6 border"
              />
              <div>
                <span>{primaryColor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TenantBrandingAssignedInterface;
