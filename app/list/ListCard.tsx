import { IHit } from '@/interfaces'
import Image from 'next/image'
import React from 'react'

type IListCardProps = {
    hit: IHit
}

const ListCard: React.FC<IListCardProps> = ({ hit }) => {
  return (
    <section>
        <Image src={hit.coverPhoto.url} height={400} width={1200} alt='' />
        <h1>{hit.title}</h1>
        <p>{hit.rooms} bedroom {hit.baths} bathroom</p>
        <p>{hit.price}</p>
    </section>
  )
}

export default ListCard