// Documents
// settings
import button from './documents/settings/button'
const settingDocuments = [button]
// pages
import home from './pages/home'
const pages = [home]

// Objects
// seo
import seoHome from './objects/seo/home'
import description from './objects/seo/description'
const seoObjects = [description, seoHome]
//sections
import heroSlider from './objects/sections/heroSlider'
const sectionObjects = [heroSlider]
// blocks
import heroSliderSlide from './objects/blocks/heroSlider/slide'
const blockObjects = [heroSliderSlide]
// settings
import buttonStyle from './objects/settings/button'
const settingObjects = [buttonStyle]

const objects = [...seoObjects, ...sectionObjects, ...blockObjects]

export const schemaTypes = [...pages, ...settingDocuments, ...objects, ...settingObjects]
