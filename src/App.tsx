import "./App.css";
import AlertBox from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";

function App() {
  // user object for userprofilecard
  const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl: "https://example.com/avatar.jpg",
  };

  // product object for ProductDispaly
  const product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: "https://example.com/headphones.jpg",
    inStock: true,
  };

  return (
    <>
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>

      <AlertBox type="error" message="Page not found">
        Try Again After sometime!.
      </AlertBox>
      <AlertBox type="warning" message="Invalid Crediential">
        Enter Valid Input
      </AlertBox>
      <AlertBox type="info" message="Login Successful:">
        This is our main session
      </AlertBox>
      {/* ///////////////////////////////////////////////// */}
      {/* Displaying UserProfileCard */}

      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}
      >
        <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
      </UserProfileCard>

      {/* ///////////////////////////////////////////////////// */}
      {/* Displaying ProductDisplay*/}
      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
      >
        <div className="text-sm text-gray-500">Free shipping available</div>
      </ProductDisplay>
    </>
  );
}

export default App;
