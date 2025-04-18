'use client';

import { useEffect } from 'react';

export default function PrismSetup() {
  useEffect(() => {
    // Import Prism and languages dynamically on the client side
    const Prism = require('prismjs');
    require('prismjs/components/prism-javascript');
    require('prismjs/components/prism-typescript');
    require('prismjs/components/prism-jsx');
    require('prismjs/components/prism-tsx');
    require('prismjs/components/prism-css');
    require('prismjs/components/prism-scss');
    require('prismjs/components/prism-json');
    require('prismjs/components/prism-markdown');
    require('prismjs/components/prism-bash');
    require('prismjs/components/prism-yaml');
    require('prismjs/components/prism-csharp');
    require('prismjs/components/prism-python');
    require('prismjs/components/prism-java');
    require('prismjs/components/prism-go');
    require('prismjs/components/prism-rust');
    require('prismjs/components/prism-sql');
    require('prismjs/components/prism-graphql');
    require('prismjs/components/prism-powershell');
    
    // Add language aliases
    Prism.languages.js = Prism.languages.javascript;
    Prism.languages.py = Prism.languages.python;
    Prism.languages.cs = Prism.languages.csharp;
    
    // Highlight all code blocks on the page
    if (typeof window !== 'undefined' && window.Prism) {
      window.Prism.highlightAll();
    }
  }, []);
  
  return null; // This component doesn't render anything
}