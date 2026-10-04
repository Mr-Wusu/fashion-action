import { getPrisma } from "@/lib/db";
import Cloth from "./Cloth";
export default async function ClothCardList() {
  
  const clothes = await getPrisma().cloth.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="grid place-items-center gap-12 md:grid-cols-2 md:gap-x-0 md:w-[45rem] lg:grid-cols-3 lg:w-full mx-auto">
      {clothes.map((cloth) => (
        <Cloth key={cloth.id} cloth={cloth}/>
      ))}
    </div>
  );
}
