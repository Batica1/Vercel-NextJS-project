import { Plant } from "./plant";

const API_URL = "http://127.0.0.1:8000/plants/";

// Fetch all plants
export const fetchPlants = async (): Promise<Plant[]> => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch plants");
      return await res.json();
    } catch (error) {
      console.error("Error fetching plants:", error);
      return [];
    }
};


// Fetch plant by ID
export const fetchPlantById = async (id: number): Promise<Plant | null> => {
    try {
      const res = await fetch(`${API_URL}${id}/`);
      if (!res.ok) throw new Error("Failed to fetch plant");
      return await res.json();
    } catch (error) {
      console.error("Error fetching plant:", error);
      return null;
    }
  };
