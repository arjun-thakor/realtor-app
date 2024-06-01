
import { IHit, IHitResponse } from "@/interfaces";
import { promises as fs } from "fs"
import ListCard from "./ListCard";

async function getLocalData() {
    const file = await fs.readFile(process.cwd() + "/listing.json", "utf-8")
    const data: IHitResponse = JSON.parse(file)
    return data
}

export default async function Listing() {
    const data: IHitResponse = await getLocalData()
    return (
        <>
            {
                data.hits.map((hit: IHit )=> (
                    <ListCard key={hit.id} hit={hit}  />
                ))
            }
        </>
    );
  }
  