---
title: "【テスト】Markdown表示スタイルの確認"
date: "2026-05-20"
tags: ["Test", "Markdown"]
excerpt: "見出し・リスト・コード・引用・テーブルなど、記事で使うMarkdown要素が正しく表示されるかを確認するためのテスト記事です。"
---

これは表示確認用のテスト記事です。公開前に削除してください。

## 見出しレベル2

本文の段落です。**太字**、*斜体*、`インラインコード`、[リンク](https://example.com)を含みます。日本語の文章では、句読点の間隔や行の高さが読みやすさを大きく左右します。

### 見出しレベル3

- 箇条書きの項目1
- 箇条書きの項目2
  - ネストした項目
- 箇条書きの項目3

1. 番号付きリスト
2. 2番目の項目
3. 3番目の項目

## コードブロック

```ts
type Post = {
  slug: string;
  title: string;
  date: string;
};

export function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

## 引用

> 引用ブロックのテストです。長めの引用文を書いたときに、左のボーダーと文字色がどう見えるかを確認します。

## テーブル

| 機能 | 対応ブラウザ | 状態 |
|------|-------------|------|
| Summarizer API | Chrome 138+ | ✅ |
| View Transitions | Chrome 126+ | ✅ |
| animation-timeline | Chrome 115+ | ✅ |

## 水平線

---

以上、表示確認おわり。
