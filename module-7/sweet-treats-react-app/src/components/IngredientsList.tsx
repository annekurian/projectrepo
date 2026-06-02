import { useState } from "react";
import Button from "./Button";

interface Props {
  category: string;
}

const IngredientsList = ({ category }: Props) => {
  const [unit, setUnit] = useState("cup");
  const handleCupsClick = () => {
    setUnit("cup");
  };
  const handleGramsClick = () => {
    setUnit("gram");
  };
  return (
    <div class="wrapper">
      <div class="col1">
        <h3 class="py-2">Ingredients</h3>
        <div class="btn-group" role="group" aria-label="Basic example">
          <Button
            children="Cups"
            color={unit == "cup" ? "primary" : "outline-primary"}
            onClick={handleCupsClick}
          />
          <Button
            children="Grams"
            color={unit == "gram" ? "primary" : "outline-primary"}
            onClick={handleGramsClick}
          />
        </div>
        {category === "Cake" && (
          <ul>
            <li>
              All-purpose flour - {unit === "cup" ? "1 1/4 cup" : "150 gm"}
            </li>
            <li>Butter - {unit === "cup" ? "2/3 cup" : "150 gm"}</li>
            <li>Sugar - {unit === "cup" ? "3/4 cup" : "150 gm"}</li>
            <li>Egg - 3</li>
            <li>Baking powder - 1 tsp</li>
            <li>Vanila essence - 1 tsp</li>
          </ul>
        )}

        {category === "Cookie" && (
          <ul>
            <li>
              All-purpose flour - {unit === "cup" ? "2 3/4 cup" : "330 gm"}
            </li>
            <li>Butter - {unit === "cup" ? "1 cup" : "227 gm"}</li>
            <li>Sugar - {unit === "cup" ? "1 1/2 cup" : "300 gm"}</li>
            <li>Egg - 1 large</li>
            <li>Baking powder - 1/2 tsp</li>
            <li>Baking soda - 1 tsp</li>
            <li>Vanila essence - 1 tsp</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default IngredientsList;
