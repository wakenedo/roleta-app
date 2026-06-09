const TenantIdBadge = ({ id }: { id: string }) => {
  return (
    <span className="cursor-default tracking-widest inline-flex items-center rounded-full border border-[#84e9e4] bg-[#84e9e4] px-2 py-0.5 text-sm font-semibold text-blue-800">
      {id}
    </span>
  );
};
export default TenantIdBadge;
