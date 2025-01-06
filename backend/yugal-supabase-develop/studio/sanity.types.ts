/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type Footer = {
  _id: string
  _type: 'footer'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  logo?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    alt?: string
    _type: 'customImage'
  }
  label?: string
  sections?: Array<{
    title?: string
    links?: Array<{
      text?: string
      url?: string
      _key: string
    }>
    _key: string
  }>
  copyright?: string
  disclaimer?: string
}

export type Section = {
  _id: string
  _type: 'section'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  content?: Array<
    | ({
        _key: string
      } & HomeContentBlock)
    | ({
        _key: string
      } & HomeHeroSection)
    | ({
        _key: string
      } & StepsSection)
    | ({
        _key: string
      } & HomelastSection)
  >
}

export type Settings = {
  _id: string
  _type: 'settings'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  favicon?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    alt?: string
    _type: 'customImage'
  }
  header?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'header'
  }
}

export type Header = {
  _id: string
  _type: 'header'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  logo?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    alt?: string
    _type: 'customImage'
  }
  variant?: 'darkGreen'
  label?: string
}

export type HomelastSection = {
  _type: 'homelastSection'
  headline?: string
  btntext?: string
}

export type StepsSection = {
  _type: 'stepsSection'
  headline?: string
  steps?: Array<{
    stepNumber?: number
    icon?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      altText?: string
      _type: 'image'
    }
    title?: string
    asset?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    }
    description?: string
    _key: string
  }>
}

export type HomeContentBlock = {
  _type: 'homeContentBlock'
  backgroundImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  title?: string
  description?: string
  asset?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  altText?: string
}

export type HomeHeroSection = {
  _type: 'homeHeroSection'
  headline?: string
  description?: string
  coupleImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    altText?: string
    _type: 'image'
  }
  backgroundImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    altText?: string
    _type: 'image'
  }
  button1?: {
    label?: string
    link?: string
  }
  button2?: {
    label?: string
    link?: string
  }
}

export type LabelLink = {
  _type: 'labelLink'
  label?: string
  link?: Link
}

export type ImageWithLink = {
  _type: 'imageWithLink'
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    alt?: string
    _type: 'customImage'
  }
  link?: Link
}

export type Button = {
  _type: 'button'
  variant?: 'darkGreen'
  label?: string
  link?: Link
}

export type RichText = {
  _type: 'richText'
  custom_rich_text?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
        listItem?: 'bullet' | 'number'
        markDefs?: Array<{
          link?: Link
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        alt?: string
        _type: 'customImage'
        _key: string
      }
  >
}

export type Link = {
  _type: 'link'
  type?: 'reference' | 'externalReference' | 'sectionReference'
  page?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'page'
  }
  link?: string
  openTheLinkinANewWindow?: boolean
  anchor?: string
}

export type CustomImage = {
  _type: 'customImage'
  asset?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
  }
  hotspot?: SanityImageHotspot
  crop?: SanityImageCrop
  alt?: string
}

export type Page = {
  _id: string
  _type: 'page'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  pageBuilder?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'section'
  }>
  seo?: SeoMetaFields
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type MetaTag = {
  _type: 'metaTag'
  metaAttributes?: Array<
    {
      _key: string
    } & MetaAttribute
  >
}

export type MetaAttribute = {
  _type: 'metaAttribute'
  attributeKey?: string
  attributeType?: 'string' | 'image'
  attributeValueImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  attributeValueString?: string
}

export type SeoMetaFields = {
  _type: 'seoMetaFields'
  nofollowAttributes?: boolean
  metaTitle?: string
  metaDescription?: string
  metaImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  seoKeywords?: Array<string>
  openGraph?: OpenGraph
  additionalMetaTags?: Array<
    {
      _key: string
    } & MetaTag
  >
  twitter?: Twitter
}

export type Twitter = {
  _type: 'twitter'
  cardType?: string
  creator?: string
  site?: string
  handle?: string
}

export type OpenGraph = {
  _type: 'openGraph'
  url?: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  title?: string
  description?: string
  siteName?: string
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Footer
  | Section
  | Settings
  | Header
  | HomelastSection
  | StepsSection
  | HomeContentBlock
  | HomeHeroSection
  | LabelLink
  | ImageWithLink
  | Button
  | RichText
  | Link
  | CustomImage
  | Page
  | Slug
  | MetaTag
  | MetaAttribute
  | SeoMetaFields
  | Twitter
  | OpenGraph
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
export declare const internalGroqTypeReferenceTo: unique symbol
