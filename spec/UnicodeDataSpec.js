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
 * @fileoverview Spec of UnicodeData.
 * @author yuhta.nakajima@gmail.com (ynakajima)
 */
(function(global) {

  // require
  var UnicodeData = (typeof require !== 'undefined') ?
    require('../data/unicodedata.js') :
    global.UnicodeData;

  // spec
  describe('UnicodeData', function() {

    it('is Object', function() {
      expect(UnicodeData).toEqual(jasmine.any(Object));
    });

    it('has unicodeVersion', function() {
      expect(UnicodeData.unicodeVersion).toBeDefined();

    });

    it('has characterNameList', function() {
      expect(UnicodeData.characterNameList).toEqual(jasmine.any(Array));
    });
    

  });

  describe('UnicodeData.characterNameList', function() {

    it('has CJK UNIFIED IDEOGRAPH and HANGUL SYLLABLE', function() {
      expect(UnicodeData.characterNameList).toContain('3400;<CJK UNIFIED IDEOGRAPH EXTENSION A, First>');
      expect(UnicodeData.characterNameList).toContain('4E00;<CJK UNIFIED IDEOGRAPH, First>');
      expect(UnicodeData.characterNameList).toContain('AC00;<HANGUL SYLLABLE, First>');
      expect(UnicodeData.characterNameList).toContain('20000;<CJK UNIFIED IDEOGRAPH EXTENSION B, First>');
      expect(UnicodeData.characterNameList).toContain('2A700;<CJK UNIFIED IDEOGRAPH EXTENSION C, First>');
      expect(UnicodeData.characterNameList).toContain('2B740;<CJK UNIFIED IDEOGRAPH EXTENSION D, First>');
    });

  });

})(this);
