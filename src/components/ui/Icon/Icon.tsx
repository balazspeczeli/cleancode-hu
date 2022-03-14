import { SVGAttributes } from 'react';
import GitHub from 'assets/icons/github.svg';
import Home from 'assets/icons/home.svg';
import ThemeDark from 'assets/icons/theme-dark.svg';
import ThemeLight from 'assets/icons/theme-light.svg';
import CSS from 'assets/icons/topics/css.svg';
import HTML from 'assets/icons/topics/html.svg';
import JavaScript from 'assets/icons/topics/javascript.svg';
import React from 'assets/icons/topics/react.svg';
import TypeScript from 'assets/icons/topics/typescript.svg';

const iconTypes = {
  github: GitHub,
  home: Home,
  'theme-dark': ThemeDark,
  'theme-light': ThemeLight,

  css: CSS,
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
