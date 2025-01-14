import { ReactNode } from 'react';
import { ClockIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { SectionHeader } from '@/components';
import { LocationIcon } from '../../../../../public/icons';

function DetailsCard({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div>{icon}</div>
      <h2>{title}</h2>
      <p className="text-xl font-medium">{value}</p>
    </div>
  );
}

export default function Details() {
  return (
    <div className="w-full lg:w-3/5 lg:py-16">
      <SectionHeader
        main="You Will Grow, You Will Succeed. We Promise That"
        sub="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi laborum odit laboriosam praesentium cupiditate in aspernatur voluptatibus quidem?"
      />

      <div className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2">
        <DetailsCard
          icon={<PhoneIcon className="h-6 w-6 text-theme" />}
          title="Call for inquiry"
          value="+257 388-6895"
        />
        <DetailsCard
          icon={<MailIcon className="h-6 w-6 text-theme" />}
          title="Send us email"
          value="kramulous@sbcglobal.net"
        />
        <DetailsCard
          icon={<ClockIcon className="h-6 w-6 text-theme" />}
          title="Opening hours"
          value="Mon - Fri: 10AM - 10PM "
        />
        <DetailsCard
          icon={<LocationIcon className="h-6 w-6 text-theme" />}
          title="Office"
          value="19 North Road Piscataway, NY 08854"
        />
      </div>
    </div>
  );
}
