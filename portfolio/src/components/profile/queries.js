import gql from 'graphql-tag';

const GET_PROFILE = gql`
  {
    social @client {
      github
      linkedin
      instagram
      email
    }
  }
`;

export default GET_PROFILE;


// query {
//   site {
//     siteMetadata {
//       social {
//         github
//         linkedin
//         instagram
//         email
//       }
//     }
//   }
//   allContentfulBasicPage(filter: { title: { eq: "About" } }) {
//     edges {
//       node {
//         content {
//           childContentfulRichText {
//             html
//           }
//         }
//         image {
//           fluid {
//             ...GatsbyContentfulFluid
//           }
//         }
//       }
//     }
//   }
// }
