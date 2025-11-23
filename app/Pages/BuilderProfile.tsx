import { Header } from '../components/home/Header';
import { BuilderHero } from '../components/builder-profile/BuilderHero';
import { AboutBuilder } from '../components/builder-profile/AboutBuilder';
import { BuilderProjects } from '../components/builder-profile/BuilderProjects';
import { ProjectMedia } from '../components/builder-profile/ProjectMedia';
import { AmenitiesSpecialties } from '../components/builder-profile/AmenitiesSpecialties';
import { BuilderReviews } from '../components/builder-profile/BuilderReviews';
import { ContactBuilder } from '../components/builder-profile/ContactBuilder';
import { SimilarBuilders } from '../components/builder-profile/SimilarBuilders';

interface BuilderProfileProps {
  builderId?: string
}

const BuilderProfile = ({ builderId }: BuilderProfileProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <BuilderHero/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1 space-y-8">
              <AboutBuilder />
              <BuilderProjects />
              <ProjectMedia />
              <AmenitiesSpecialties />
              <BuilderReviews />
            </div>

            {/* Sidebar */}
            <div className="lg:w-96">
              <div className="sticky top-24">
                <ContactBuilder />
              </div>
            </div>
          </div>

          <SimilarBuilders />
        </div>
      </div>
    </div>
  );
};

export default BuilderProfile;
