export type Property = {
  id: string
  title: string
  price: string
  location: string
  bedrooms: number
  bathrooms: number
  area: string
  type: 'For Sale' | 'For Rent'
  image: string
  images: string[]
}

const baseGallery = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop',
]

const buildGallery = (image: string) => {
  const remaining = baseGallery.filter((img) => img !== image)
  return [image, ...remaining.slice(0, 4)]
}

export const properties: Property[] = [
  {
    id: 'modern-family-villa',
    title: 'Modern Family Villa',
    price: '$450,000',
    location: 'Colombo 7, Sri Lanka',
    bedrooms: 4,
    bathrooms: 3,
    area: '2,500 sq ft',
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    images: buildGallery(
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    ),
  },
  {
    id: 'luxury-apartment-galle',
    title: 'Luxury Apartment',
    price: '$2,800/mo',
    location: 'Galle, Sri Lanka',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,200 sq ft',
    type: 'For Rent',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    images: buildGallery(
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    ),
  },
  {
    id: 'beachfront-property-negombo',
    title: 'Beachfront Property',
    price: '$680,000',
    location: 'Negombo, Sri Lanka',
    bedrooms: 5,
    bathrooms: 4,
    area: '3,200 sq ft',
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    images: buildGallery(
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    ),
  },
  {
    id: 'urban-townhouse-kandy',
    title: 'Urban Townhouse',
    price: '$320,000',
    location: 'Kandy, Sri Lanka',
    bedrooms: 3,
    bathrooms: 2,
    area: '1,800 sq ft',
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop',
    images: buildGallery(
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop',
    ),
  },
  {
    id: 'contemporary-estate-mount-lavinia',
    title: 'Contemporary Estate',
    price: '$890,000',
    location: 'Mount Lavinia, Sri Lanka',
    bedrooms: 6,
    bathrooms: 5,
    area: '4,200 sq ft',
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    images: buildGallery(
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    ),
  },
  {
    id: 'city-center-apartment-colombo-3',
    title: 'City Center Apartment',
    price: '$1,500/mo',
    location: 'Colombo 3, Sri Lanka',
    bedrooms: 1,
    bathrooms: 1,
    area: '800 sq ft',
    type: 'For Rent',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
    images: buildGallery(
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
    ),
  },
  {
    id: 'garden-villa-nugegoda',
    title: 'Garden Villa',
    price: '$520,000',
    location: 'Nugegoda, Sri Lanka',
    bedrooms: 4,
    bathrooms: 3,
    area: '2,800 sq ft',
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074&auto=format&fit=crop',
    images: buildGallery(
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074&auto=format&fit=crop',
    ),
  },
  {
    id: 'penthouse-suite-colombo-2',
    title: 'Penthouse Suite',
    price: '$3,200/mo',
    location: 'Colombo 2, Sri Lanka',
    bedrooms: 3,
    bathrooms: 3,
    area: '2,100 sq ft',
    type: 'For Rent',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop',
    images: buildGallery(
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop',
    ),
  },
  {
    id: 'cozy-bungalow-moratuwa',
    title: 'Cozy Bungalow',
    price: '$275,000',
    location: 'Moratuwa, Sri Lanka',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,400 sq ft',
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop',
    images: buildGallery(
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop',
    ),
  },
]

export const getPropertyById = (id: string) =>
  properties.find((property) => property.id === id)

