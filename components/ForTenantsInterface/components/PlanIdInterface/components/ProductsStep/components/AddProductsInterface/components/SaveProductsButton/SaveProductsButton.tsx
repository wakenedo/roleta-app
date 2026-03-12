type SaveProductsButtonProps = {
  onClick: () => void;
};

const SaveProductsButton = ({ onClick }: SaveProductsButtonProps) => {
  return (
    <button onClick={onClick} className="bg-indigo-500 py-3 rounded-lg">
      Importar Produtos
    </button>
  );
};

export default SaveProductsButton;
