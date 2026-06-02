import IngredientsList from "./IngredientsList";
import MethodList from "./MethodList";

interface Props {
  title: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const Card = ({ title, category, imageUrl, imageAlt }: Props) => {
  return (
    <div class="p-4">
      <h2>{title}</h2>
      <img src={imageUrl} alt={imageAlt} />
      <div>
        <IngredientsList category={category} />
        <MethodList />
      </div>
    </div>
  );
};

export default Card;
