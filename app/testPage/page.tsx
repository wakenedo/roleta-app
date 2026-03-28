"use client";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/Slots/components/SlotsGame/components/ProductCard";

const TestPage = () => {
  return (
    <>
      <Header />
      <div className="relative font-sans min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Foreground Content */}
        <div>
          <main className="flex flex-col justify-between  min-h-screen relative z-10 pt-4">
            <div className="flex flex-col   items-center  mt-10 mx-2">
              <div className="flex gap-1">
                <ProductCard
                  currentSpinId={""}
                  selectedProducts={[]}
                  product={{
                    id: "1",
                    name: "Sample Product - Long Name",
                    tier: "jackpot",
                    image: "",
                    url: "",
                    price: "0.00",
                    discountedPrice: "0.00",
                    campaign: {
                      campaignLink: "",
                      couponCode: "",
                      description: "",
                    },
                    discount: "0%",
                    store: "Sample Store",
                  }}
                />
                <ProductCard
                  currentSpinId={""}
                  selectedProducts={[]}
                  product={{
                    id: "1",
                    name: "Sample Product",
                    tier: "rare",
                    image: "",
                    url: "",
                    price: "0.00",
                    discountedPrice: "0.00",
                    campaign: {
                      campaignLink: "",
                      couponCode: "",
                      description: "",
                    },
                    discount: "0%",
                    store: "Sample Store",
                  }}
                />
                <ProductCard
                  currentSpinId={""}
                  selectedProducts={[]}
                  product={{
                    id: "1",
                    name: "Sample Product",
                    tier: "common",
                    image: "",
                    url: "",
                    price: "0.00",
                    discountedPrice: "0.00",
                    campaign: {
                      campaignLink: "",
                      couponCode: "",
                      description: "",
                    },
                    discount: "0%",
                    store: "Sample Store",
                  }}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default TestPage;
