export const templateKey = (key: string) => ({
  label: 'Template Key',
  name: 'templateKey',
  widget: 'hidden',
  default: key,
})

export const published = {
  label: 'Published',
  name: 'published',
  widget: 'boolean',
  default: false,
}

export const title = {
  label: 'Title',
  name: 'title',
  widget: 'string',
}

export const markdownBody = {
  label: 'Body',
  name: 'body',
  widget: 'markdown',
}
