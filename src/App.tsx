import { useState } from "react";
import { ProductList } from "./components/products/product-list";
import {
  Body,
  Button,
  Header,
  LeftPanel,
  RightPanel,
  MainContainer,
  SearchProducts,
  Toolbar,
  Panel,
  SubHeader,
  SubText,
} from "./components/store-style";
import { ProductSchema } from "./validations/productSchema";
import { ProductSelected } from "./components/products/product-selected";
import { usePagination } from "./hooks/usePagination";
import product1 from "./assets/images/product1.jpeg";
import product2 from "./assets/images/product2.jpeg";
import product3 from "./assets/images/product3.jpeg";
import product4 from "./assets/images/product4.jpeg";
import product5 from "./assets/images/product5.jpeg";
import product6 from "./assets/images/product6.jpeg";
import product7 from "./assets/images/product7.jpeg";
import { ProductScroll } from "./components/products/product-scroll";
import { ProductSortBy } from "./components/products/product-sort-by";
import { ProductAdd } from "./components/products/product-add";
import { v4 as uuidv4 } from "uuid";
import { ProductSchemaAdding } from "./validations/productSchemaAdding";

function App() {
  const sortBy = ["Name", "Recently Added"];

  const [products, setProducts] = useState<ProductSchema[]>([
    {
      id: "177a8f7f-d0e8-4740-93aa-24c3f73e33eb",
      name: "Product 6",
      description: "Product 1 description",
      price: 30,
      creationDate: new Date(),
      image: product1,
    },
    {
      id: "6c356db4-86b3-457f-8d6c-bdbe7f3ade00",
      name: "Product 2",
      description: "Product 2 description",
      price: 40,
      creationDate: new Date(),
      image: product2,
    },
    {
      id: "b5b46b83-5bf8-4f75-ad1e-309a8730702f",
      name: "Product 3",
      description: "Product 3 description",
      price: 110,
      creationDate: new Date(),
      image: product3,
    },
    {
      id: "42b86129-29e9-46e9-a78b-0208c920edb5",
      name: "Product 4",
      description: "Product 4 description",
      price: 44,
      creationDate: new Date(),
      image: product4,
    },
    {
      id: "768bd386-90f0-47bb-a73a-bb4328b3dd7d",
      name: "Product 9",
      description: "Product 5 description",
      price: 126,
      creationDate: new Date(),
      image: product5,
    },
    {
      id: "f2739c95-dfa1-41e9-8d3f-226bca41ce66",
      name: "Product 1",
      description: "Product 6 description",
      price: 695,
      creationDate: new Date(),
      image: product6,
    },
    {
      id: "dc62f740-406b-4a58-a443-17ab59c5d60e",
      name: "Product 7",
      description: "Product 7 description",
      price: 730,
      creationDate: new Date(),
      image: product7,
    },
  ]);

  const [product, setProduct] = useState<ProductSchema | null>(null);
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [addProduct, setAddProduct] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>(sortBy[0]);

  const [formData, setFormData] = useState<{
    id: string;
    name: string;
    description: string;
    price: number;
  }>({
    id: "",
    name: "",
    description: "",
    price: 0,
  });

  const sortProducts = (
    filteredProducts: ProductSchema[],
    sortOption: string
  ) => {
    switch (sortOption) {
      case "Name":
        return [...filteredProducts].sort((a, b) => {
          const nameComparison = a.name.localeCompare(b.name);
          if (nameComparison !== 0) {
            return nameComparison;
          }
          return b.creationDate.getTime() - a.creationDate.getTime();
        });
      case "Recently Added":
        return [...filteredProducts].sort(
          (a, b) => b.creationDate.getTime() - a.creationDate.getTime()
        );
      default:
        return filteredProducts;
    }
  };

  const filteredProducts = () => {
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(searchProduct.toLowerCase());
    });

    const sortedProducts = sortProducts(filtered, sortOption);
    console.log("Filtered and Sorted Products:", sortedProducts); // הוספת שורת הדפסה
    return sortedProducts;
  };

  const { currentItems, previousPage, currentPage, maxPages, nextPage } =
    usePagination<ProductSchema>({
      items: filteredProducts(),
    });

  const openProduct = (product: ProductSchema) => {
    setProduct(product);
    setAddProduct(false);
    setFormData({
      id: product.id,
      name: product.name,
      description: product.description || "",
      price: product.price,
    });
  };

  const handleAdding = () => {
    setAddProduct(true);
    setProduct(null);
    setFormData({ id: uuidv4(), name: "", description: "", price: 0 });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(e.target.value);
  };

  const handleSave = (newProduct: ProductSchemaAdding) => {
    console.log("newProduct", newProduct);

    if (product) {
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === product.id ? { ...p, ...newProduct } : p
        )
      );
    } else {
      const id = uuidv4();
      const creationDate = new Date();
      const productWithId: ProductSchema = {
        ...newProduct,
        id,
        creationDate,
        image: newProduct.image || "",
      };

      setProducts((prevProducts) => [...prevProducts, productWithId]);
    }

    setAddProduct(false);
    setProduct(null);
    setFormData({ id: "", name: "", description: "", price: 0 });
  };

  const handleDelete = (e: React.MouseEvent, item: ProductSchema) => {
    e.stopPropagation();

    const deleteProduct = products.filter((product) => product.id !== item.id);
    setProducts(deleteProduct);

    if (product?.id === item.id || deleteProduct.length === 0) {
      setProduct(null);
      setFormData({ id: "", name: "", description: "", price: 0 });
    }
  };

  const handleSortChange = (option: string) => {
    console.log("Sort option selected:", option);
    setSortOption(option); // עדכון ה-state של sortOption
  };

  return (
    <>
      <Body />
      <Header>My Store</Header>
      <MainContainer>
        <Toolbar>
          <Button onClick={handleAdding}>Add</Button>
          <SearchProducts
            placeholder="Search products"
            onChange={handleSearch}
            value={searchProduct}
          />
          <SubHeader>Sort by</SubHeader>
          <ProductSortBy options={sortBy} onSortChange={handleSortChange} />
        </Toolbar>
        <Panel>
          <LeftPanel>
            <ProductList
              open={(e) => openProduct(e)}
              currentItems={currentItems()}
              products={currentItems()}
              onDelete={(e, item) => handleDelete(e, item)}
            />
          </LeftPanel>

          <RightPanel style={{ border: "4px solid black" }}>
            {addProduct ? (
              <ProductAdd onSave={handleSave} />
            ) : product !== null ? (
              <ProductSelected
                product={product}
                formData={formData}
                setFormData={setFormData}
              />
            ) : (
              <SubText>Please select a product</SubText>
            )}
          </RightPanel>
        </Panel>
        <ProductScroll
          currentPage={currentPage}
          maxPages={maxPages}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </MainContainer>
    </>
  );
}

export default App;
