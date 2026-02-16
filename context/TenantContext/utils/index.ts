let currentTenantId: string | null = null;

const setTenantId = (id: string | null) => {
  currentTenantId = id;
};

const getTenantId = () => currentTenantId;

export { setTenantId, getTenantId };
