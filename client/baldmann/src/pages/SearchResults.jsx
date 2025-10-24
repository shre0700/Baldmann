import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function normalize(str) {
  return (str || '').toLowerCase();
}

function matches(entry, terms) {
  const haystack = [
    entry.title,
    entry.excerpt,
    ...(entry.keywords || [])
  ].join(' ').toLowerCase();
  // All terms must be present (AND). Change to OR by using some()
  return terms.every(t => haystack.includes(t));
}

export default function SearchResults() {
  const q = useQuery().get('q') || '';
  const [index, setIndex] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const terms = useMemo(() => normalize(q).split(/\s+/).filter(Boolean), [q]);

  useEffect(() => {
    let cancelled = false;
    async function loadIndex() {
      setLoading(true);
      try {
        const res = await fetch('/searchIndex.json');
        if (!res.ok) throw new Error('Failed to load search index');
        const data = await res.json();
        if (!cancelled) setIndex(Array.isArray(data) ? data : []);
      } catch (e) {
        if (!cancelled) setError(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    loadIndex();
    return () => { cancelled = true; };
  }, []);

  const results = useMemo(() => {
    if (!terms.length) return [];
    return index
      .filter(e => matches(e, terms))
      .slice(0, 50); // cap results
  }, [index, terms]);

  return (
    <div style={{ paddingTop: 120, paddingBottom: 40, width: '90%', margin: '0 auto', color: '#fff' }}>
      <h2 style={{ marginBottom: 16 }}>Search results for "{q}"</h2>
      {loading && <p>Loading search index…</p>}
      {error && <p style={{ color: '#f66' }}>Error: {error}</p>}
      {!loading && !error && results.length === 0 && (
        <p>No results found. Try different keywords.</p>
      )}
      <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 16 }}>
        {results.map((r, i) => (
          <li key={`${r.path}-${i}`} style={{ marginBottom: 16, background: '#3b2e3a77', padding: 12, borderRadius: 12 }}>
            <a href={r.path} style={{ color: '#fff', textDecoration: 'none', fontWeight: 700 }}>{r.title}</a>
            {r.excerpt && <p style={{ margin: '6px 0 0', color: '#ddd' }}>{r.excerpt}</p>}
            {Array.isArray(r.keywords) && r.keywords.length > 0 && (
              <div style={{ marginTop: 6, fontSize: 12, color: '#ccc' }}>
                {r.keywords.slice(0, 8).map((k, idx) => (
                  <span key={idx} style={{ marginRight: 8, background: '#ffffff22', padding: '2px 6px', borderRadius: 8 }}>#{k}</span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)} style={{ marginTop: 12, padding: '8px 12px', borderRadius: 8, border: 'none', background: '#f7c948', color: '#000', cursor: 'pointer', fontWeight: 700 }}>Back</button>
    </div>
  );
}
