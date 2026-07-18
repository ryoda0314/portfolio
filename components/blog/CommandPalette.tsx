"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PostMeta } from "@/lib/posts";
import { useLocale } from "@/lib/i18n";
import { ui } from "@/lib/ui";

// ⌘K / Ctrl+K で開く記事検索パレット。ヘッダーの検索ボタンからも開ける。

type Props = {
  posts: PostMeta[];
};

export function CommandPalette({ posts }: Props) {
  const { locale } = useLocale();
  const t = ui[locale];
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim()
    ? posts.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        );
      })
    : posts;

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const go = (slug: string) => {
    close();
    // View Transitionを効かせるためフルナビゲーションで遷移する
    window.location.href = `/blog/${slug}`;
  };

  return (
    <>
      <button
        className="search-btn"
        onClick={() => setOpen(true)}
        aria-label={t.searchAria}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.5" y2="16.5" />
        </svg>
        <kbd>⌘K</kbd>
      </button>
      {open && (
        <div className="cmdk-overlay" onClick={close}>
          <div
            className="cmdk"
            role="dialog"
            aria-label={t.searchAria}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={inputRef}
              className="cmdk-input"
              placeholder={t.searchPlaceholder}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setActive((a) => Math.min(a + 1, results.length - 1));
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setActive((a) => Math.max(a - 1, 0));
                } else if (e.key === "Enter" && results[active]) {
                  go(results[active].slug);
                }
              }}
            />
            <ul className="cmdk-results">
              {results.length === 0 && (
                <li className="cmdk-empty">{t.searchEmpty}</li>
              )}
              {results.map((p, i) => (
                <li key={p.slug}>
                  <button
                    className={`cmdk-item${i === active ? " active" : ""}`}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(p.slug)}
                  >
                    <span className="cmdk-item-title">{p.title}</span>
                    <span className="cmdk-item-meta">
                      {p.date} · {p.tags.join(" / ")}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
