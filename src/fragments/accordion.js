import { graphql } from 'gatsby'

const Accordion = () => {
    return 'accordion'
}

export const query = graphql`
fragment PrismicAccordionFragment on PrismicAccordion {
    data {
      accordion {
        title
        image {
          document {
            __typename
          }
          url
        }
        intro
        content {
          raw
        }
      }
    }
}
`

export default Accordion



  