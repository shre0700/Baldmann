import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "./SearchIcon";
import './ProjectSearch.css';

const ProjectSearch = ({ onResult }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  // Highlight visible text on the page
  const highlightClass = 'search-highlighted-text-copilot';
  function removeHighlights() {
    document.querySelectorAll('.' + highlightClass).forEach(el => {
      const parent = el.parentNode;
      parent.replaceChild(document.createTextNode(el.textContent), el);
      parent.normalize();
    });
  }

  function highlightTextOnPage(text) {
    if (!text) return;
    removeHighlights();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let found = false;
    let firstHighlight = null;
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (
        node.parentNode &&
        node.nodeValue &&
        node.nodeValue.trim() &&
        !['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'TEXTAREA', 'INPUT'].includes(node.parentNode.nodeName)
      ) {
        const idx = node.nodeValue.toLowerCase().indexOf(text.toLowerCase());
        if (idx !== -1) {
          found = true;
          const span = document.createElement('span');
          span.className = highlightClass;
          span.style.background = '#ffe066';
          span.style.color = '#222';
          span.style.borderRadius = '4px';
          span.style.padding = '0 2px';
          const before = node.nodeValue.slice(0, idx);
          const match = node.nodeValue.slice(idx, idx + text.length);
          const after = node.nodeValue.slice(idx + text.length);
          const afterNode = document.createTextNode(after);
          const matchNode = document.createTextNode(match);
          span.appendChild(matchNode);
          const parent = node.parentNode;
          parent.insertBefore(document.createTextNode(before), node);
          parent.insertBefore(span, node);
          parent.insertBefore(afterNode, node);
          parent.removeChild(node);
          if (!firstHighlight) firstHighlight = span;
        }
      }
    }
    if (firstHighlight) {
      setTimeout(() => {
        firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
    return found;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSearching(true);
    // Highlight visible text on the page
    highlightTextOnPage(query.trim());
    setSearching(false);
  };

  // Remove highlights when query is cleared
  useEffect(() => {
    if (!query) removeHighlights();
    // Remove highlights on unmount
    return () => removeHighlights();
    // eslint-disable-next-line
  }, [query]);

  const inputRef = useRef(null);
  return (
    <form
      className="project-search-bar responsive-search-bar"
      onSubmit={handleSearch}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        maxWidth: 600,
        marginTop: 40,
        marginBottom: 40,
        zIndex: 10,
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search project..."
        value={query}
        onChange={handleInput}
        className="responsive-search-input"
        style={{
          padding: '16px 56px 16px 24px',
          borderRadius: 32,
          border: '1.5px solid #ccc',
          minWidth: 350,
          fontSize: 20,
          width: '100%',
          boxSizing: 'border-box',
          background: '#fff',
          outline: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}
        disabled={searching}
      />
      <button
        type="submit"
        disabled={searching}
        aria-label="Search"
        style={{
          position: 'absolute',
          right: 18,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        tabIndex={-1}
      >
        <SearchIcon size={32} color={searching ? '#ccc' : '#888'} />
      </button>
    </form>
  );
};

export default ProjectSearch;
