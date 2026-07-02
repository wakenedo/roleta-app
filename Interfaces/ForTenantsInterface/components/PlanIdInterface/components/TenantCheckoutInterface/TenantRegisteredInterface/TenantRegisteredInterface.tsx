const TenantRegisteredInterface = ({
  name,
  email,
}: {
  name: string;
  email: string;
}) => {
  return (
    <div className="mt-1">
      <div className="mt-0">
        Parceiro
        <div className="border py-4 px-2">
          <div className="flex space-x-2 items-center">
            <span>Nome:</span>
            <span className="text-lg">{name}</span>
          </div>
          <div className="flex space-x-2 items-center">
            <span>Email:</span>
            <span>{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TenantRegisteredInterface;
