---
title: "2026年のブログは、ブラウザの中にAIがいる"
date: "2026-07-14"
tags: ["Web", "Built-in AI", "Next.js"]
excerpt: "サーバーもAPIキーも使わずに、要約・翻訳・読み上げができるブログを作った。Chrome内蔵のGemini Nanoと最新のWeb標準だけで、どこまでやれるか。"
---

このブログには、記事の上に「AI要約」「翻訳」「読み上げ」のボタンが付いている。よくあるAI機能に見えるが、実は**サーバーを一切使っていない**。要約も翻訳も、あなたのPCの中で完結している。

## ブラウザ内蔵AIという選択肢

ChromeにはGemini Nanoという小型のAIモデルが同梱されていて、Webページから標準APIとして呼び出せる。

- **Summarizer API** — テキストの要約(TL;DR、要点抽出など)
- **Translator API** — 言語ペアを指定した翻訳
- **Language Detector API** — 言語判定

これらは`fetch`や`localStorage`と同じ、ただのWeb標準APIだ。呼び出し側のコードはこれだけで動く。

```js
const summarizer = await Summarizer.create({ type: "tldr" });
const summary = await summarizer.summarize(articleText);
```

APIキーは不要。従量課金もない。そして記事の本文がどこかのサーバーに送信されることもない。**プライバシーとコストの問題を、モデルを手元に持ってくることで同時に解決する**——これが2026年のWebの面白いところだと思う。

## AIだけじゃない、CSSも進化している

このブログのページ遷移で記事タイトルがぬるっと移動するのは、**クロスドキュメントView Transitions**によるもの。JavaScriptは1行も書いていない。

```css
@view-transition {
  navigation: auto;
}
```

記事上部の読書進捗バーも、スクロールイベントを監視するJSではなく、CSSの`animation-timeline: scroll()`だけで動いている。数年前ならライブラリを入れて実装していたものが、いまはブラウザの標準機能になった。

## まとめ

「AI機能付きのブログ」と聞くと大掛かりに聞こえるが、実際にやったことは静的サイトにWeb標準のAPIを呼ぶボタンを置いただけだ。モデルの配布も実行もブラウザがやってくれる。

個人サイトという小さな場所は、こういう新しいWeb標準の実験場にちょうどいい。
