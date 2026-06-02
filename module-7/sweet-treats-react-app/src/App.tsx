import "./styles.css";
import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

export default function App() {
  const [category, setCategory] = useState("Cake");
  const [cakeView, setCakeView] = useState(true);
  const [cookieView, setCookieView] = useState(false);

  const handleCakeClick = () => {
    setCakeView(true);
    setCookieView(false);
    setCategory("Cake");
  };
  const handleCookieClick = () => {
    setCookieView(true);
    setCakeView(false);
    setCategory("Cookie");
  };

  return (
    <div className="App">
      <h1>Sweet Treats</h1>
      <div class="nav-container gap-3 mx-4">
        <Button
          children="Cake"
          color={cakeView ? "primary" : "outline-primary"}
          onClick={handleCakeClick}
        />
        <Button
          children="Cookie"
          color={cookieView ? "primary" : "outline-primary"}
          onClick={handleCookieClick}
        />
      </div>
      {category === "Cake" && (
        <Card
          title="Butter Cake"
          category={category}
          imageUrl="/assets/cake.jpg"
          imageAlt="Butter cake with icing"
        />
      )}
      {category === "Cookie" && (
        <Card
          title="Sugar Cookie"
          category={category}
          imageUrl="/assets/cookie.jpg"
          imageAlt="Sugar cookies"
        />
      )}
    </div>
  );
}
