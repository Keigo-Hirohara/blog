import fs from 'fs';
import path from 'path';
import { v4 } from 'uuid';

// コマンドライン引数からファイルパスを取得
const filePath = process.argv[2];

if (!filePath) {
  console.error('ファイルパスを指定してください。');
  process.exit(1);
}

// UUIDを生成
const id = v4();

// front matterを作成
const frontMatter = `---
title: ""
description: ""
tags: []
date: "${new Date().toISOString()}"
coverImage: ""
---

`;

// ファイル名を作成（[id].md）
const fileName = `${id}.mdx`;

// 完全なファイルパスを作成
const fullPath = path.join(filePath, fileName);

// ファイルを作成し、front matterを書き込む
fs.writeFile(fullPath, frontMatter, (err) => {
  if (err) {
    console.error('ファイルの作成中にエラーが発生しました:', err);
    process.exit(1);
  }
  console.log(`ファイルが正常に作成されました: ${fullPath}`);
});
