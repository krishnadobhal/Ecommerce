// Mock data using images from public folder
const mockProducts = [
  {
    id: "1",
    name: "Premium Pet Food",
    price: 29.99,
    description: "High-quality nutrition for your beloved pets. Made with natural ingredients and essential vitamins.",
    images: ["/1.jpg"],
    stock: 50,
    categories: ["Food", "Premium"],
    sellerId: "seller-1",
    seller: {
      id: "seller-1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      createdAt: new Date("2024-01-01"),
      profileImageURL: null
    }
  },
  {
    id: "2", 
    name: "Comfortable Pet Bed",
    price: 45.50,
    description: "Soft and cozy bed perfect for small to medium pets. Machine washable and durable.",
    images: ["/2.jpeg"],
    stock: 25,
    categories: ["Accessories", "Comfort"],
    sellerId: "seller-2",
    seller: {
      id: "seller-2",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      createdAt: new Date("2024-01-15"),
      profileImageURL: null
    }
  },
  {
    id: "3",
    name: "Interactive Pet Toy",
    price: 15.99,
    description: "Engaging toy that keeps your pet entertained for hours. Safe materials and fun design.",
    images: ["/3.webp"],
    stock: 100,
    categories: ["Toys", "Interactive"],
    sellerId: "seller-3",
    seller: {
      id: "seller-3",
      firstName: "Mike",
      lastName: "Johnson",
      email: "mike.johnson@example.com",
      createdAt: new Date("2024-02-01"),
      profileImageURL: null
    }
  }
];

export const useGetAllProducts = () => {
    return {
        data: { getAllProduct: mockProducts },
        product: mockProducts,
        isLoading: false,
        error: null
    }
}

export const useGetProductById = (id: string) => {
    const product = mockProducts.find(p => p.id === id);
    return {
        product: product || null,
        isLoading: false,
        error: product ? null : new Error('Product not found')
    }
}

export const useGetProductsBySearch = (searchQuery: string) => {
    if (!searchQuery || searchQuery.trim() === '') {
        return {
            data: { getProductsBySearch: mockProducts },
            product: mockProducts,
            isLoading: false,
            error: null
        }
    }

    const filteredProducts = mockProducts.filter(product => 
        (product.name?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.description?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.categories?.some(cat => cat?.toLowerCase().includes(searchQuery.toLowerCase())))
    );
    
    return {
        data: { getProductsBySearch: filteredProducts },
        product: filteredProducts,
        isLoading: false,
        error: null
    }
}