import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import config from './config'
import BlogPostPreviewTemplate from './previewTemplates/BlogPostPreviewTemplate'

import './previewStyles.scss'

CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('blogPost', BlogPostPreviewTemplate)

CMS.init({ config })
