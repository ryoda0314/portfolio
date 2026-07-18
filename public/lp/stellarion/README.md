# STELLARION ― 七つ星の図譜 / A Catalogue of Seven Stars

架空の7人組アイドルグループ **STELLARION（ステラリオン）** の公式サイト（フィクション）。
コンセプトは **「アンティークの天体観測図録（星図）」**。ネオン宇宙でも無難ミニマルでもなく、
古い星座早見盤・天文カタログの体裁で7人を"標本"として綴じた一枚もの。
単一の `index.html` で完結（外部依存はGoogle Fontsのみ）。

> ⚠️ 実在しないアイドルを題材にした**デザイン制作サンプル**です。グループ名・メンバー・楽曲・日程・等級・座標・所属事務所はすべて創作で、実在の人物・団体とは関係ありません。

## 世界観の設計
- **古紙（生成りクリーム）× 濃紺インク × 朱（注釈の赤）**。紙の粒子(feTurbulence)・二重罫の図版枠・角のトンボ
- 書体：欧文見出し EB Garamond（イタリック）／和文 Shippori Mincho／データは IBM Plex Mono（座標・等級・カタログ番号の"計器"感）
- 7人に**バイエル符号 α〜η** を付与（センター天音ひかり = α）。各メンバーは *等級・赤経赤緯・初観測(生年月日)・出身* を持つ**カタログ標本**
- 温度は「天文学者の余白メモ」で。朱色イタリックの手書き注釈（例：α「最初に見つかる、いちばん明るい星。」）

## 目玉のインタラクション
- ヒーロー（フロントピース）の**星図**：7人を座標にプロットし、視界に入るとインクの線で星座が描かれる（stroke-dashoffset）。星にホバーで氏名が浮かぶ

## 構成（図版立て）
PLATE 0 星図(Hero) → PLATE I Observation Log(News) → PLATE II The Group(About/REGISTER) → PLATE III Stellar Catalogue(Member×7) → PLATE IV Recorded Works(Discography) → PLATE V Almanac(Tour) → PLATE VI Plates(Gallery) → Join(Fanclub・反転図版) → Colophon(Footer)

## 実装メモ
- 横スクロールなし検証済み（`scrollWidth == innerWidth`：PC 1280/1280・SP 390/390）
- `prefers-reduced-motion` / JS無効時フォールバック（星座線は即描画・内容は消えない）
- スマホは全画面の反転メニュー（Esc・リンクタップで閉じる／`aria-expanded`更新）
- データ（STARS/MEMBERS/NEWS/DISCS/ALM/PLATES）は `index.html` 末尾 `<script>` の配列を編集して差し替え

## 実写真の差し込み場所
写真は現状、明朝の仮名やスターマークを置いた図版フレーム。差し替え箇所：

| 箇所 | 現状 | 差し替え |
|---|---|---|
| Hero `.chart` | インタラクティブ星図 | そのまま活かす or 集合写真に星をオーバーレイ |
| About `.about-fig .plate` | スターマーク | 集合写真（縦3:4） |
| Member `.entry .fig` | 大きな仮名 | メンバー個別カット（正方形） |
| Works `.rec .jk` | スターマーク＋タイトル | 正方形ジャケット |
| Plates `.pl-cell` | スターマーク | ライブ/オフショット等 |
