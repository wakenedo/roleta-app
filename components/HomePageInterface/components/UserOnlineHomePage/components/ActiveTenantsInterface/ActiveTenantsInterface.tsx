const ActiveTenantsInterface = () => {
  return (
    <div
      id="active-tenants"
      className="border-2 flex flex-col border-black md:mx-2 h-260"
    >
      <div>
        <span className="text-3xl">Active Tenants</span>
      </div>
      <div>
        This is the early interface for active tenants, it will be show only to
        users that are registered for discoverability. This interface can be
        broken down into multiple components, to later search, display and
        filter tenants that are active on the platform, and show relevant
        information about them, like: name, description, subscription mode, how
        much users are playing or played on the slots/ products brought etc.
      </div>
    </div>
  );
};
export default ActiveTenantsInterface;
