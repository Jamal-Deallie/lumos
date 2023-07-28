import { LinkProps } from 'next/link';
import { ReactNode, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IBaseButton {
  size?: 'sm' | 'md' | 'lg';
  classes?: string;
  variant?: string;
  block?: boolean;
  hoverTxt?: string;
  txtClr?: string;
}

export interface ILinkButtonProps extends IBaseButton, LinkProps {
  href: string;
  children: ReactNode;
}

export interface IButtonProps
  extends IBaseButton,
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface IProjectProps {
  _id: number;
  img: string;
  client_name: string;
  project_name: string;
  services_received: string;
  location: string;
  date_completed: string;
  summary: string;
  slug: string;
}

export interface IHeadingProps {
  title: string;
  desc?: string;
  button?: boolean;
  href?: string;
  label?: string;
}

export interface SEOResults {
  title?: string;
  description?: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
  keywords?: string | undefined;
}
