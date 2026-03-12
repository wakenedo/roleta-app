import { TenantProduct } from "@/context/TenantContext/types";
import { SaveProductsButton } from "./components/SaveProductsButton";

const AddProductsInterface = ({
  products,
  onSave,
}: {
  products: TenantProduct[];
  onSave: (products: TenantProduct[]) => void;
}) => {
  return (
    <>
      <span className="text-sm">Produtos</span>
      <div className="border w-full p-2 mb-3">
        <div className="md:text-lg font-semibold">
          <span>Produtos Próprios </span>
        </div>
        <div className="md:text-xs">
          Use seus produtos ou pool de ofertas para gerar a experiência. Assim
          que seus produtos carregarem escolha as configurações dos Tiers e
          alavanque o engajamento de seus usuários !
        </div>
        <div>
          <span className="text-sm">Formatos suportados</span>
          <div className="border">
            <ul className="text-xs decoration-0">
              <li>Json</li>
              <li>Csv</li>
            </ul>
          </div>
        </div>
        <div>
          <span className="text-sm">Escolha seu arquivo </span>
          <div>
            <button className="text-xs border p-1 cursor-pointer">
              Subir para a plataforma
            </button>
          </div>
        </div>
      </div>
      <SaveProductsButton onSave={onSave} products={products} />
    </>
  );
};
export default AddProductsInterface;
