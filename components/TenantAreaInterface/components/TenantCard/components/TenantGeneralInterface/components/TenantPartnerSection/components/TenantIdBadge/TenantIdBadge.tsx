const TenantIdBadge = ({ id }: { id: string }) => {
  return (
    <span className="tracking-widest inline-flex items-center rounded-full border border-blue-300 bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-800">
      {id}
    </span>
  );
};
export default TenantIdBadge;
