/// <reference types="vite/client" />

declare module "lucide-react" {
  import { FC, ComponentProps } from "react";
  export interface IconProps extends ComponentProps<"svg"> {
    size?: number | string;
  }
  export const CupSoda: FC<IconProps>;
  export const Menu: FC<IconProps>;
  export const X: FC<IconProps>;
  export const ChevronDown: FC<IconProps>;
  export const ChevronRight: FC<IconProps>;
  export const ChevronLeft: FC<IconProps>;
  export const Cake: FC<IconProps>;
  export const Trophy: FC<IconProps>;
  export const Clock: FC<IconProps>;
  export const Heart: FC<IconProps>;
  export const Star: FC<IconProps>;
  export const Quote: FC<IconProps>;
  export const Mail: FC<IconProps>;
  export const Phone: FC<IconProps>;
  export const MapPin: FC<IconProps>;
  export const Instagram: FC<IconProps>;
  export const Facebook: FC<IconProps>;
  export const Twitter: FC<IconProps>;
  export const ArrowUp: FC<IconProps>;
  export const CheckCircle: FC<IconProps>;
}