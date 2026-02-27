const TenantError = ({ error }: { error: string }) => {
  return (
    <div className="flex flex-col gap-3 ">
      <hr className="border-t border-slate-300" />
      <div>
        <p>{error} =P</p>
      </div>
    </div>
  );
};
export default TenantError;
