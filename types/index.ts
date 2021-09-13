export interface HomeProps {
  articles: any;
}

export interface HomeArticleProps {
  meta: string,
  title: string
  standfirst: string,
  image: string,
}

export interface HomeArticleResponse {
  meta: string,
  title: string
  standfirst: string,
  image: string,
  id: string,
}
