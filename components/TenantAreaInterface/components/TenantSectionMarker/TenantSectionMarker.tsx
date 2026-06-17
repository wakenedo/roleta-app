const TenantSectionMarker = ({ markerTitle }: { markerTitle: string }) => {
  return (
    <div className="cursor-default border border-[#00EEFF] bg-[#00EEFF]  py-2">
      <span className="px-2 text-md tracking-widest font-bold line-clamp-1 text-white text-shadow-2xs">
        {markerTitle}
      </span>
    </div>
  );
};
export default TenantSectionMarker;
