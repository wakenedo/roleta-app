const TenantSectionMarker = ({ markerTitle }: { markerTitle: string }) => {
  return (
    <div className="cursor-default border border-[#84e9e4] bg-[#84e9e4]  py-2">
      <span className="px-2 text-md tracking-widest font-bold line-clamp-1 text-white text-shadow-2xs">
        {markerTitle}
      </span>
    </div>
  );
};
export default TenantSectionMarker;
