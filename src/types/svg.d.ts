// svg.d.ts
declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}
// src/types/svg.d.ts
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * SVG Filter Primitive: FeBlend
       * The <feBlend> filter primitive blends two objects together using a popular
       * graphics software blending mode.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBlend
       */
      feBlend: React.SVGProps<SVGFEBlendElement>;
      /**
       * SVG Filter Primitive: FeColorMatrix
       * The <feColorMatrix> filter primitive applies a matrix transformation to
       * the R, G, B, A components of the input graphic.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix
       */
      feColorMatrix: React.SVGProps<SVGFEColorMatrixElement>;
      /**
       * SVG Filter Primitive: FeComponentTransfer
       * The <feComponentTransfer> filter primitive performs a component-wise
       * remapping of color components into new values.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComponentTransfer
       */
      feComponentTransfer: React.SVGProps<SVGFEComponentTransferElement>;
      /**
       * SVG Filter Primitive: FeComposite
       * The <feComposite> filter primitive performs the Porter-Duff alpha
       * compositing operation.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite
       */
      feComposite: React.SVGProps<SVGFECompositeElement>;
      /**
       * SVG Filter Primitive: FeConvolveMatrix
       * The <feConvolveMatrix> filter primitive performs a convolution operation
       * on the input graphic using a square matrix.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix
       */
      feConvolveMatrix: React.SVGProps<SVGFEConvolveMatrixElement>;
      /**
       * SVG Filter Primitive: FeDiffuseLighting
       * The <feDiffuseLighting> filter primitive creates a light source that
       * illuminates the input graphic.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting
       */
      feDiffuseLighting: React.SVGProps<SVGFEDiffuseLightingElement>;
      /**
       * SVG Filter Primitive: FeDisplacementMap
       * The <feDisplacementMap> filter primitive uses the pixels from one image
       * to spatially displace the pixels from another image.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap
       */
      feDisplacementMap: React.SVGProps<SVGFEDisplacementMapElement>;
      /**
       * SVG Filter Primitive: FeDistantLight
       * The <feDistantLight> filter primitive defines a distant light source.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDistantLight
       */
      feDistantLight: React.SVGProps<SVGFEDistantLightElement>;
      /**
       * SVG Filter Primitive: FeDropShadow
       * The <feDropShadow> filter primitive creates a drop shadow effect.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow
       */
      feDropShadow: React.SVGProps<SVGFEDropShadowElement>;
      /**
       * SVG Filter Primitive: FeFlood
       * The <feFlood> filter primitive fills the filter subregion with the
       * flood-color and flood-opacity attributes.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFlood
       */
      feFlood: React.SVGProps<SVGFEFloodElement>;
      /**
       * SVG Filter Primitive: FeFuncA
       * The <feFuncA> filter primitive defines a transfer function for the alpha
       * component.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncA
       */
      feFuncA: React.SVGProps<SVGFEFuncAElement>;
      /**
       * SVG Filter Primitive: FeFuncB
       * The <feFuncB> filter primitive defines a transfer function for the blue
       * component.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncB
       */
      feFuncB: React.SVGProps<SVGFEFuncBElement>;
      /**
       * SVG Filter Primitive: FeFuncG
       * The <feFuncG> filter primitive defines a transfer function for the green
       * component.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncG
       */
      feFuncG: React.SVGProps<SVGFEFuncGElement>;
      /**
       * SVG Filter Primitive: FeFuncR
       * The <feFuncR> filter primitive defines a transfer function for the red
       * component.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncR
       */
      feFuncR: React.SVGProps<SVGFEFuncRElement>;
      /**
       * SVG Filter Primitive: FeGaussianBlur
       * The <feGaussianBlur> filter primitive applies a Gaussian blur to the
       * input graphic.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feGaussianBlur
       */
      fegaussianblur: React.SVGProps<SVGFEGaussianBlurElement>;
      /**
       * SVG Filter Primitive: FeImage
       * The <feImage> filter primitive fetches an image from an external source
       * and uses it as input.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feImage
       */
      feImage: React.SVGProps<SVGFEImageElement>;
      /**
       * SVG Filter Primitive: FeMerge
       * The <feMerge> filter primitive combines filter results from different
       * filter primitives into a single result.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMerge
       */
      femerge: React.SVGProps<SVGFEMergeElement>;
      /**
       * SVG Filter Primitive: FeMergeNode
       * The <feMergeNode> filter primitive defines an input for the <feMerge>
       * filter primitive.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMergeNode
       */
      femergenode: React.SVGProps<SVGFEMergeNodeElement>;
      /**
       * SVG Filter Primitive: FeMorphology
       * The <feMorphology> filter primitive applies a morphological operation to
       * the input graphic.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMorphology
       */
      feMorphology: React.SVGProps<SVGFEMorphologyElement>;
      /**
       * SVG Filter Primitive: FeOffset
       * The <feOffset> filter primitive offsets the input graphic by a given
       * vector.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feOffset
       */
      feOffset: React.SVGProps<SVGFEOffsetElement>;
      /**
       * SVG Filter Primitive: FePointLight
       * The <fePointLight> filter primitive defines a point light source.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fePointLight
       */
      fePointLight: React.SVGProps<SVGFEPointLightElement>;
      /**
       * SVG Filter Primitive: FeSpecularLighting
       * The <feSpecularLighting> filter primitive creates a light source that
       * illuminates the input graphic.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpecularLighting
       */
      feSpecularLighting: React.SVGProps<SVGFESpecularLightingElement>;
      /**
       * SVG Filter Primitive: FeSpotLight
       * The <feSpotLight> filter primitive defines a spot light source.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpotLight
       */
      feSpotLight: React.SVGProps<SVGFESpotLightElement>;
      /**
       * SVG Filter Primitive: FeTile
       * The <feTile> filter primitive fills the filter subregion with a repeated
       * tiling of the input graphic.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTile
       */
      feTile: React.SVGProps<SVGFETileElement>;
      /**
       * SVG Filter Primitive: FeTurbulence
       * The <feTurbulence> filter primitive creates a turbulence effect.
       * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence
       */
      feTurbulence: React.SVGProps<SVGFETurbulenceElement>;
    }
  }
}