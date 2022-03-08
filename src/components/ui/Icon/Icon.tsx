import dynamic from 'next/dynamic';
import { SVGAttributes } from 'react';

interface IconProps extends SVGAttributes<SVGElement> {
  name: string;
}
export const Icon = ({ name, ...props }: IconProps) => {
  const Icon = dynamic(() => import(`assets/icons/${name}.svg`));
  return <Icon {...props} />;
};
