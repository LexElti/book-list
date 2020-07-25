const baseUrl = 'https://www.googleapis.com/books/v1/volumes'
const key = 'AIzaSyDP3vanKoxKpkzwO7H01tSkIPy7FGPRDzE'
const accord = {
  title: 'intitle',
  author: 'inauthor',
  publisher: 'inpublisher',
  subject: 'subject'
}

export const checkAPIQuery = query => {
  const strQuery = Object.keys(query).map(key => query[key]).join('')
  
  if (!strQuery) {
    return 'Fill in at least one field'
  }
  return ''
}

const getStrQuery = query => {
  const strQuery = Object.keys(query).map(key => {
    if (!query[key].trim()) {
      return ''
    }
    return `${accord[key]}:${query[key].trim()}`
  })
    .filter(str => str !== '')
    .join('+')
  return strQuery
}

export const getAPIUrl = query => {
  const strQuery = getStrQuery(query)
  return `${baseUrl}?q=${strQuery}&maxResults=40&key=${key}`
}

export const parseAPIResponse = response => {
  const data = response.items.map(item => {
    const thumbnail = item.volumeInfo.imageLinks
      ? item.volumeInfo.imageLinks.thumbnail
      : ''

    return {
      id: item.id,
      title: item.volumeInfo.title,
      authors: [...item.volumeInfo.authors],
      description: item.volumeInfo.description,
      previewLink: item.volumeInfo.previewLink,
      thumbnail
    }
  })
  return data
}
