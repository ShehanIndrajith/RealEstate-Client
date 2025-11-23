import BuilderProfile from '../../../Pages/BuilderProfile'

type BuilderPageProps = {
  params: {
    id: string
  }
}

export default function BuilderPage({ params }: BuilderPageProps) {
  return <BuilderProfile builderId={params.id} />
}

