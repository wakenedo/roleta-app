const SlotsLoading = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 w-full h-full">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-white/30 border-t-white" />
      <span className="text-base font-semibold uppercase tracking-wider text-white/70">
        Preparando...
      </span>
    </div>
  );
};

export default SlotsLoading;
