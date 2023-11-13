// pages/richtexteditor.js
import React from 'react';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';

const Notes = () => {
  return (
    <RichTextEditorComponent
      height="300px"
      toolbarSettings={{
        items: [
          'Bold',
          'Italic',
          'Underline',
          '|',
          'Formats',
          'Alignments',
          'OrderedList',
          'UnorderedList',
          '|',
          'CreateLink',
          'Image',
          '|',
          'SourceCode',
          'Undo',
          'Redo',
        ],
      }}
    >
      <Inject services={[Link, Image, HtmlEditor, Toolbar, QuickToolbar]} />
    </RichTextEditorComponent>
  );
};

export default Notes;
