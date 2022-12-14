/// <reference types="vite/client" />
/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}


declare module "*.md" {
  // "unknown" would be more detailed depends on how you structure frontmatter
  const attributes: Record<string, unknown>;

  // When "Mode.TOC" is requested
  const toc: { level: string; content: string }[];

  // When "Mode.HTML" is requested
  const html: string;

  // When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>
  import React from "react";
  const ReactComponent: React.VFC;

  // When "Mode.Vue" is requested
  import { ComponentOptions, Component } from "vue";
  const VueComponent: ComponentOptions;
  const VueComponentWith: (
    components: Record<string, Component>
  ) => ComponentOptions;

  const Markdown = {
    attributes,
    VueComponent,
  };
  export default Markdown;
}

declare module "*&imagetools" {
  const out;
  export default out;
}

 const GITVERSION:string
