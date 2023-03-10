/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  export default content;
}
// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
