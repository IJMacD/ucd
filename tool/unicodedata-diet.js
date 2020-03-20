/**
 * @license Released under the MIT license.
 *
 * <pre>
 * Copyright (c) 2013 ynakajima <yuhta.nakajima@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * </pre>
 *
 * @fileoverview Diet UnicodeData.
 * @author yuhta.nakajima@gmail.com (ynakajima)
 */

// require
var fs = require('fs'),
    util = require('util'),
    path = require('path');

var filename;
var version;

if (process.argv.length > 3) {
  filename = process.argv[2];
  version = process.argv[3];
} else {
  version = process.argv[2];
  filename = path.join(__dirname, "../unicode", version, "ucd/UnicodeData.txt");
}

fs.readFile(filename, 'utf-8', function(err, data) {

  // UnicodeData
  var UnicodeData = {};

  // Unicode version
  UnicodeData.unicodeVersion = version;
  
  // characterNameList
  UnicodeData.characterNameList = [];

  /* データを１行づつ読む */

  // 行を配列に分割
  var lines = data.toString().split('\n');

  for (var i = 0, l = lines.length; i < l; i++) {

    // 行を取得
    var line = lines[i];

    // セミコロンで分割
    var charData = line.split(';');

    // データを切り出して UnicodeData に格納
    if (charData.length >= 2) {
      var charCode = charData[0];
      var charName = charData[1].replace('CJK Ideograph', 'CJK UNIFIED IDEOGRAPH').replace('Extension', 'EXTENSION').replace('Hangul Syllable','HANGUL SYLLABLE');
      if (charName === "<control>") {
        charName = charData[10];
      }
      UnicodeData.characterNameList.push(charCode + ';' + charName);
    }

  }

  // ダイエットされたコードを出力
  var resultCode = util.format(
    'var UnicodeData = %s;',
    JSON.stringify(UnicodeData, null, ' ')
  );

  var file = fs.openSync(path.join(__dirname, "../data/unicodedata.js"), "w");

  fs.writeSync(file, '/* Unicode Character Database v.' + UnicodeData.unicodeVersion + ' */\n');
  fs.writeSync(file, fs.readFileSync(path.join(__dirname, 'snippet/header.js'), 'utf-8').toString());
  fs.writeSync(file, resultCode);
  fs.writeSync(file, fs.readFileSync(path.join(__dirname, 'snippet/footer.js'), 'utf-8').toString());

  fs.closeSync(file);

});
