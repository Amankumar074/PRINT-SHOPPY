import ProductSection from "@/components/home/ProductSection"

export default function NewIn() {
    return (
        <section>
            <ProductSection
                title="POPULAR PRODUCTS"
                products={popularProducts}
                bg="bg-red-100 w-11/12"
            />
        </section>
    )
}
