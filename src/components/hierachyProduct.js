// src/components/author.js
import React from 'react'
import { graphql } from 'gatsby'

const HierarchyProduct = ({ author_name, author_image }) => {
  return (
    <>
      <h3>{author_name}</h3>
      <img src={author_image.url} alt={author_image.alt} />
    </>
  )
}

export const query = graphql`
fragment HierachyProduct on PrismicProduct {
    uid
    data {
      title {
        text
      }
      parent {
        uid
        document {
          ... on PrismicProduct {
            prismicId
            uid
            data {
              title {
                text
              }
              parent {
                uid
                document {
                  ... on PrismicProduct {
                    prismicId
                    uid
                    data {
                      title {
                        text
                      }
                      parent {
                        uid
                        document {
                          ... on PrismicProduct {
                            prismicId
                            uid
                            data {
                              title {
                                text
                              }
                            }
                          }
                          ... on PrismicPage {
                            prismicId
                            uid
                            data {
                              title {
                                text
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  ... on PrismicPage {
                    prismicId
                    uid
                    data {
                      title {
                        text
                      }
                      parent {
                        uid
                        document {
                          ... on PrismicProduct {
                            prismicId
                            uid
                            data {
                              title {
                                text
                              }
                            }
                          }
                          ... on PrismicPage {
                            prismicId
                            uid
                            data {
                              title {
                                text
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PrismicPage {
            prismicId
            uid
            data {
              title {
                text
              }
              parent {
                uid
                document {
                  ... on PrismicProduct {
                    prismicId
                    uid
                    data {
                      title {
                        text
                      }
                      parent {
                        uid
                        document {
                          ... on PrismicProduct {
                            data {
                              title {
                                text
                              }
                            }
                            prismicId
                            uid
                          }
                          ... on PrismicPage {
                            data {
                              title {
                                text
                              }
                            }
                            prismicId
                            uid
                          }
                        }
                      }
                    }
                  }
                  ... on PrismicPage {
                    prismicId
                    uid
                    data {
                      title {
                        text
                      }
                      parent {
                        uid
                        document {
                          ... on PrismicProduct {
                            prismicId
                            uid
                            data {
                              title {
                                text
                              }
                            }
                          }
                          ... on PrismicPage {
                            prismicId
                            uid
                            data {
                              title {
                                text
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default HierarchyProduct