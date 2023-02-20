import React from 'react';
import sanitizeHTML from 'sanitize-html';

export const richTextString = (stringMsg = '') => {
  const htmlProp = {__html : sanitizeHTML(stringMsg)};
  return (<div dangerouslySetInnerHTML={htmlProp} /> );
};