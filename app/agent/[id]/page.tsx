import AgentProfile from '../../Pages/AgentProfile'

type AgentPageProps = {
  params: {
    id: string
  }
}

export default function AgentPage({ params }: AgentPageProps) {
  return <AgentProfile agentId={params.id} />
}

