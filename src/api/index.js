import { client, q } from '../utils/db';

// export const getAllContacts;
// export const createContactItem;
// export const deleteContactItem;

export const getAllContacts = client
  .query(q.Paginate(q.Match(q.Ref('indexes/all_contacts'))))
  .then(response => {
    const contactRef = response.data;
    const getAllDataQuery = contactRef.map(ref => {
      return q.Get(ref);
    });
    return client.query(getAllDataQuery).then(data => data);
  })
  .catch(error => console.error('Error: ', error.message));

  export const createContactItem = name => client
    .query(
      q.Create(q.Collection('contacts'), {
        data: {
          "name":"Name",
          "lang":"fr",
          "email": "email@domain.fr"
        }
      })
    )
    .then(ret => ret)
    .catch(error => console.error('Error: ', error.message));