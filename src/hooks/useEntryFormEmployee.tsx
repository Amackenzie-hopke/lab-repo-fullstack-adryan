import { useEffect, useMemo, useState } from "react";
import * as RecipeService from "../services/recipeService";
import type { Recipe } from "../types/Recipe";
import { RecipeType } from "../types/RecipeType";

interface FilterOptions {
  searchTerm: string;
  recipeType: string;
}

export function useRecipes(dependencies: unknown[], filterFn?: ((recipe: Recipe) => boolean) | null) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>();
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: "",
    recipeType: "All",
  });

  const fetchRecipes = async () => {
    try {
      let result = await RecipeService.fetchRecipes();

      if (filterFn) {
        result = result.filter(filterFn);
      }

      setRecipes([...result]);
    } catch (errorObject) {
      setError(`${errorObject}`);
    }
  };


  const setSearchTerm = (searchTerm: string) => {
    setFilters((prev) => ({ ...prev, searchTerm }));
  };

  const setRecipeType = (recipeType: string) => {
    setFilters((prev) => ({ ...prev, recipeType }));
  };

  useEffect(() => {
    fetchRecipes();
  }, [...dependencies]);

  return {
    recipes,
    error,
    setSearchTerm,
    setRecipeType,
  };
}