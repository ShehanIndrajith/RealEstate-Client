import PropertyDetails from '../../../Pages/PropertyDetails'

type PropertyPageProps = {
  params: {
    id: string
  }
}

export default function PropertyPage({ params }: PropertyPageProps) {
  return <PropertyDetails propertyId={params.id} />
}

