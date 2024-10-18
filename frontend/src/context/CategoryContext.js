import { createContext, useContext, useState, useEffect } from 'react';
import { get_category_service, update_category_service } from "../services/category";

const CategoryContext = createContext({});

const CategoryProvider = (props) => {
	const [categories, setCategoris] = useState([]);

	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = async () => {
		try {
			const result = await get_category_service();
			if (result.status === 200) {
				setCategoris(result.data);
			}
		} catch (error) {
			console.log("error--in get method--", error);
			return error
		}
	}

	const updateCategory = async (data) => {
		try {
			const result = await update_category_service(data);
			if (result.status === 200) {
				await getCategories()
			}
		} catch (error) {
			console.log("error--in update--", error);
			return error
		}
	}

	const values = { categories, updateCategory };
	return (
		<CategoryContext.Provider value={values}>
			{props.children}
		</CategoryContext.Provider>
	)
}

const useCategoryContext = () => { return useContext(CategoryContext) }
export { CategoryProvider, useCategoryContext }