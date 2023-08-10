import { API_URL } from "./config";

//вывод отдельного блюда
//www.themealdb.com/api/json/v1/1/lookup.php?i=52772
const getMealById = async (mealId) => {
  const response = await fetch(API_URL + "lookup.php?i=" + mealId);
  return await response.json();
};

//вывод всех категорий
//www.themealdb.com/api/json/v1/1/categories.php
const getAllCategories = async () => {
  const response = await fetch(API_URL + "categories.php");
  return await response.json();
};

//фильтр категорий
//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
const getFilteredCategory = async (catName) => {
  const response = await fetch(API_URL + "filter.php?c=" + catName);
  return await response.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
