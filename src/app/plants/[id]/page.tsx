'use client'; // ✅ Add this at the top

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // ✅ Use `next/navigation` instead of `next/router`
import { fetchPlants } from "../../../API/api";
import { Plant } from "../../../API/plant";

export default function PlantDetail() {
  const [plant, setPlant] = useState<Plant | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // ✅ Use `useParams()` for dynamic route parameters

  useEffect(() => {
    const loadPlantDetail = async () => {
      if (id) {
        const data = await fetchPlants();
        const plantDetail = data.find((p) => p.id === Number(id)); // ✅ Ensure `id` is converted to a number
        setPlant(plantDetail || null);
        setLoading(false);
      }
    };
    loadPlantDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!plant) return <p>Plant not found</p>;

  return (
    <div className="container p-6">
      <h1 className="text-4xl font-bold">{plant.name}</h1>
      <p className="text-xl text-gray-600">{plant.location}</p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p><strong>Capacity (MW):</strong> {plant.capacity_mw}</p>
        <p><strong>Status:</strong> {plant.status}</p>
        <p><strong>Water Flow Rate:</strong> {plant.water_flow_rate} m³/s</p>
      </div>
    </div>
  );
}
