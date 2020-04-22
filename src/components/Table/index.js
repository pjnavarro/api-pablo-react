import React from 'react';

const Table = ({documents, headers}) => (
<table>
    <thead>
        {headers && headers.map(header => (<th>{header.label}</th>))}
    </thead>
    <tbody>
        {documents && headers && documents.map(document =>
          <tr>  {headers.map(header => (<td> {document[header.key]} </td>))} </tr>
            )}
    </tbody>
</table>
);

export default Table;