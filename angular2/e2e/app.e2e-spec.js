"use strict";
var protractor_1 = require("protractor");
describe('ag-grid-ng2-examples E2E Tests', function () {
    var expectedTabTitles = [
        'Rich Grid with Pure JavaScript',
        'Rich Grid with Declarative Markup',
        'Using Dynamic Components',
        'Using Dynamic Components - Richer Example',
        'Using Cell Editor Components',
        'Using Floating Row Renderers',
        'Using Full Width Renderers',
        'Using Group Row Renderers',
        'With Filters Components'
    ];
    beforeEach(function () {
        protractor_1.browser.get('');
    });
    it("should have " + expectedTabTitles.length + " Tab Titles", function () {
        var count = undefined;
        protractor_1.element.all(protractor_1.by.css('a[ng-reflect-router-link]')).count().then(function (val) {
            console.log(count);
        }).then(function () {
            expect(count).toEqual(expectedTabTitles.length);
        });
    });
    it("should display all expected " + expectedTabTitles.length + " Tab Titles", function () {
        var tabTitles = expectedTabTitles.slice(0);
        var anchors = protractor_1.element.all(protractor_1.by.css('a[ng-reflect-router-link]'));
        anchors.each(function (anchor) {
            anchor.getText().then(function (text) {
                var index = tabTitles.indexOf(text);
                if (index === -1) {
                    fail(text + " not in the list of expected titles");
                }
                tabTitles.splice(index, 1);
            });
        }).then(function () {
            expect(tabTitles).toEqual([], "The following Tab Titles were not found: " + tabTitles);
        });
    });
    it('Dynamic Components Example should have first two rows expected results', function () {
        protractor_1.element(protractor_1.by.css('a[ng-reflect-router-link="/from-component"]'))
            .click()
            .then(function () {
            protractor_1.element(protractor_1.by.css('div[row="0"] div[colid="row')).getText().then(function (text) {
                expect(text).toEqual("Row 0");
            });
        })
            .then(function () {
            protractor_1.element(protractor_1.by.css('div[row="0"] div[colid="square')).getText().then(function (text) {
                expect(text).toEqual("0");
            });
        })
            .then(function () {
            protractor_1.element(protractor_1.by.css('div[row="0"] div[colid="cube')).getText().then(function (text) {
                expect(text).toEqual("0");
            });
        })
            .then(function () {
            protractor_1.element(protractor_1.by.css('div[row="0"] div[colid="params')).getText().then(function (text) {
                expect(text).toEqual("Field: row, Value: Row 0");
            });
        })
            .then(function () {
            protractor_1.element(protractor_1.by.css('div[row="1"] div[colid="row')).getText().then(function (text) {
                expect(text).toEqual("Row 1");
            });
        })
            .then(function () {
            protractor_1.element(protractor_1.by.css('div[row="1"] div[colid="square')).getText().then(function (text) {
                expect(text).toEqual("1");
            });
        })
            .then(function () {
            protractor_1.element(protractor_1.by.css('div[row="1"] div[colid="cube')).getText().then(function (text) {
                expect(text).toEqual("1");
            });
        })
            .then(function () {
            protractor_1.element(protractor_1.by.css('div[row="1"] div[colid="params')).getText().then(function (text) {
                expect(text).toEqual("Field: row, Value: Row 1");
            });
        })
            .then(function () {
            protractor_1.element(protractor_1.by.css('div[row="2"] div[colid="row')).getText().then(function (text) {
                expect(text).toEqual("Row 2");
            });
        })
            .then(function () {
            protractor_1.element(protractor_1.by.css('div[row="2"] div[colid="square')).getText().then(function (text) {
                expect(text).toEqual("4");
            });
        })
            .then(function () {
            protractor_1.element(protractor_1.by.css('div[row="2"] div[colid="cube')).getText().then(function (text) {
                expect(text).toEqual("8");
            });
        })
            .then(function () {
            protractor_1.element(protractor_1.by.css('div[row="2"] div[colid="params')).getText().then(function (text) {
                expect(text).toEqual("Field: row, Value: Row 2");
            });
        });
    });
    it('Basic Editor Component Example Tests', function () {
        protractor_1.element(protractor_1.by.css('a[ng-reflect-router-link="/editor-component"]'))
            .click()
            .then(function () {
            protractor_1.element(protractor_1.by.css('div[row="0"] div[colid="name')).getText().then(function (text) {
                expect(text).toEqual("Bob");
            });
        })
            .then(function () {
            protractor_1.element(protractor_1.by.css('div[row="0"] div[colid="mood"] img')).getAttribute("src").then(function (src) {
                expect(src).toEqual("http://localhost:8080/images/smiley.png");
            });
        })
            .then(function () {
            protractor_1.element(protractor_1.by.css('div[row="0"] div[colid="mood')).sendKeys(protractor_1.protractor.Key.ENTER)
                .then(function () {
                protractor_1.element(protractor_1.by.css('div editor-cell div')).click().then(function () {
                    protractor_1.element(protractor_1.by.css('div editor-cell div')).sendKeys(protractor_1.protractor.Key.RIGHT)
                        .then(function () {
                        protractor_1.element(protractor_1.by.css('div editor-cell div')).sendKeys(protractor_1.protractor.Key.ENTER)
                            .then(function () {
                            protractor_1.element(protractor_1.by.css('div[row="0"] div[colid="mood"] img')).getAttribute("src").then(function (src) {
                                expect(src).toEqual("http://localhost:8080/images/smiley-sad.png");
                            });
                        });
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=app.e2e-spec.js.map