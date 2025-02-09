'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchPlants } from "../API/api";
import { Plant } from "../API/plant";
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import Link from "next/link"; // Import Link
import Navigation from "./nav/navigation";

export default function Home() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPlants = async () => {
      const data = await fetchPlants();
      setPlants(data);
      setLoading(false);
    };
    loadPlants();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
    <Navigation />
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority />
        <p>Welcome to the Hydropower Plant Dashboard</p>

        {/* Plant List Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <Card key={plant.id} className="w-80 p-4 shadow-lg rounded-lg border border-gray-200">
              <CardBody>
                <Typography variant="h5" className="text-blue-gray-900">
                  {plant.name}
                </Typography>
                <Typography variant="small" color="gray" className="opacity-75">
                  {plant.location}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link href={`/plants/${plant.id}`}>
                  <Button
                    variant="filled"
                    color="blue"
                    fullWidth
                    className="hover:scale-105 transition-transform"
                  >
                    See More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
    </>
  );
}
