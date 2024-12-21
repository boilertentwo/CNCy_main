export default function sitemap() {
    return [
      {
        url: 'https://cncy.in',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://cncy.in/postbox',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      }
      
    ]
  }