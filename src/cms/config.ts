/* eslint-disable @typescript-eslint/camelcase */
import blogPost from './collections/blogPost'

const domain = process.env.GATSBY_ORIGIN || 'localhost:8000'

const config = {
  load_config_file: false,

  backend: {
    name: 'git-gateway',
    branch: 'master',
    accept_roles: ['admin'],
  },

  publish_mode: 'simple',
  public_folder: '/uploads',

  display_url: domain,
  logo_url: `${domain}/favicon.png`,

  media_folder: 'static/uploads',
  media_library: {
    name: 'cloudinary',
    config: {
      cloud_name: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.GATSBY_CLOUDINARY_CLOUD_KEY,
      output_filename_only: true,
    },
  },

  collections: [blogPost],
}

export default config
