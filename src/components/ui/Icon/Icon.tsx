import { SVGAttributes } from 'react';
import GitHub from 'assets/icons/github.svg';
import Home from 'assets/icons/home.svg';
import JavaScript from 'assets/icons/javascript.svg';
import React from 'assets/icons/react.svg';
import TypeScript from 'assets/icons/typescript.svg';

const iconTypes = {
  github: GitHub,
  home: Home,
  javascript: JavaScript,
  react: React,
  typescript: TypeScript,
};

interface IconProps extends SVGAttributes<SVGElement> {
  name: string;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const Icon = iconTypes[name as keyof typeof iconTypes];
  if (!Icon) {
    throw new Error(`Unknown icon (${name})`);
  }
  return <Icon {...props} />;
};
