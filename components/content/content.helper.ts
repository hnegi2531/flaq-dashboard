export const getCreateContentPayload = (formik: any) => {
  const {
    image,
    title,
    description,
    contentType,
    videoLink,
    videoTitle,
    videoDescription,
    articleLogo,
    articleTitle,
    articleLink,
  } = formik.values
 
  const articles = [
    {
      url: articleLink,
      title: articleTitle,
      iconUrl: articleLogo,
    },
  ]
  let createContentPayload

  switch (contentType) {
    case 'Video':
      return (createContentPayload = {
        image,
        title,
        description,
        contentType,
        ytVideoUrl: videoLink,

      })

    case 'Articles':
      return (createContentPayload = {
        image,
        title,
        description1: description,
        description2:'',
        description3:'',
        contentType,
        articles,
      })
    case 'VideoAndArticles':
      return (createContentPayload = {
        image,
        title,
        description,
        contentType,
        ytVideoUrl: videoLink,
        articles,
      })
  }

  return createContentPayload
}