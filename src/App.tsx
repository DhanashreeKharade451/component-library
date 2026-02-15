import "./App.css";
import  AlertBox from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";

function App() {
  return (
    <>
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
         onClose={() => alert("Alert closed")}
      >
     
        <p className="text-sm">
          You can now continue using the application.</p>
     
      </AlertBox>

      <AlertBox type="error" message="Page not found">
        Page not found
      </AlertBox>
      <AlertBox type="warning" message="GoodBye">
        GoodBye
      </AlertBox>
      <AlertBox type ="info" message="This is our main session">
        This is our main session
      </AlertBox>
      
      

    </>
  );
}

export default App;
