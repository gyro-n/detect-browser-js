'use strict';
(function () {
  describe('On Chrome', function () {
    describe('isChrome', function () {
      it('should true on Chrome', function () {
        detectBrowser.isChrome.should.be.exactly(true);
      });
    });
    describe('isBlink', function () {
      it('should true on Chrome', function () {
        //detectBrowser.isBlink.should.exist(1);
        detectBrowser.isBlink.should.not.be.exactly(void 0);
        //should.exist(detectBrowser.isBlink)
      });
    });
    describe('isIE', function () {
      it('should false on Chrome', function () {
        detectBrowser.isIE.should.be.exactly(false);
      });
    });
    describe('ieVersion', function () {
      it('should void on Chrome', function () {
        should(detectBrowser.ieVersion).exactly(null);
      });
    });
    describe('isEmulatedIE', function () {
      it('should void on Chrome', function () {
        should(detectBrowser.isEmulatedIE).exactly(false);
      });
    });
    describe('isEdge', function () {
      it('should false on Chrome', function () {
        detectBrowser.isEdge.should.be.exactly(false);
      });
    });
    describe('isOpera', function () {
      it('should false on Chrome', function () {
        detectBrowser.isOpera.should.be.exactly(false);
      });
    });
    describe('isFirefox', function () {
      it('should false on Chrome', function () {
        detectBrowser.isFirefox.should.be.exactly(false);
      });
    });
    describe('isSafari', function () {
      it('should false on Chrome', function () {
        detectBrowser.isSafari.should.be.exactly(false);
      });
    });
  });
  describe('On PC or Mac', function () {
    describe('isMobileOrTablet', function () {
      it('should true on Chrome', function () {
        detectBrowser.isMobileOrTablet.should.be.exactly(false);
      });
    });
  });
})();