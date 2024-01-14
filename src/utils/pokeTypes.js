export const getPokemonTypeColor = (type) => {
  switch (type) {
    case "grass":
      return "bg-green-400 text-white";
    case "poison":
      return "bg-purple-400 text-white";
    case "fire":
      return "bg-red-400 text-white";
    case "flying":
      return "bg-sky-600 text-white";
    case "water":
      return "bg-blue-400 text-white";
    case "bug":
      return "bg-green-200 text-gray-700";
    case "normal":
      return "bg-gray-400 text-white";
    case "electric":
      return "bg-yellow-400 text-gray-700";
    case "ground":
      return "bg-amber-600 text-white";
    case "fairy":
      return "bg-pink-400 text-gray-700";
    case "fighting":
      return "bg-orange-400 text-white";
    case "psychic":
      return "bg-pink-200 text-gray-700";
    case "rock":
      return "bg-amber-900 text-white";
    case "steel":
      return "bg-gray-200 text-gray-700";
    case "ice":
      return "bg-blue-100 text-gray-700";
    case "ghost":
      return "bg-purple-200 text-gray-700";
    case "dragon":
      return "bg-indigo-700 text-white";
    default:
      return "bg-white text-gray-700";
  }
};
