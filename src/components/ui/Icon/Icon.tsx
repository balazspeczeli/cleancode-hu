import { SVGAttributes } from 'react';
import CSS from 'assets/icons/css.svg';
import GitHub from 'assets/icons/github.svg';
import Home from 'assets/icons/home.svg';
import HTML from 'assets/icons/html.svg';
import JavaScript from 'assets/icons/javascript.svg';
import React from 'assets/icons/react.svg';
import TypeScript from 'assets/icons/typescript.svg';

const iconTypes = {
  css: CSS,
  github: GitHub,
  home: Home,
  html: HTML,
  javascript: JavaScript,
  react: React,
  typescript: TypeScript,
};

interface IconProps extends SVGAttributes<SVGElement> {
  name: string;
  className?: string;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const Icon = iconTypes[name as keyof typeof iconTypes];
  if (!Icon) {
    throw new Error(`Unknown icon (${name})`);
  }
  return <Icon {...props} />;
};
