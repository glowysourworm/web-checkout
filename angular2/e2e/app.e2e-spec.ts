import {browser, element, by, protractor} from "protractor";

describe('ag-grid-ng2-examples E2E Tests', function () {

    let expectedTabTitles = [
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
        browser.get('');
    });

    it(`should have ${expectedTabTitles.length} Tab Titles`, function () {
        let count: number = undefined;
        element.all(by.css('a[ng-reflect-router-link]')).count().then(function (val) {
            console.log(count)
        }).then(() => {
            expect(count).toEqual(expectedTabTitles.length)
        });
    });

    it(`should display all expected ${expectedTabTitles.length} Tab Titles`, function () {
        let tabTitles = expectedTabTitles.slice(0);
        let anchors = element.all(by.css('a[ng-reflect-router-link]'));
        anchors.each((anchor) => {
            anchor.getText().then((text) => {
                let index = tabTitles.indexOf(text);
                if (index === -1) {
                    fail(`${text} not in the list of expected titles`);
                }
                tabTitles.splice(index, 1);
            })
        }).then(() => {
            expect(tabTitles).toEqual([], `The following Tab Titles were not found: ${tabTitles}`);
        });
    });

    it('Dynamic Components Example should have first two rows expected results', function () {
        element(by.css('a[ng-reflect-router-link="/from-component"]'))
            .click()
            // first row
            .then(() => {
                element(by.css('div[row="0"] div[colid="row')).getText().then((text) => {
                    expect(text).toEqual("Row 0");
                });
            })
            .then(() => {
                element(by.css('div[row="0"] div[colid="square')).getText().then((text) => {
                    expect(text).toEqual("0");
                });
            })
            .then(() => {
                element(by.css('div[row="0"] div[colid="cube')).getText().then((text) => {
                    expect(text).toEqual("0");
                });
            })
            .then(() => {
                element(by.css('div[row="0"] div[colid="params')).getText().then((text) => {
                    expect(text).toEqual("Field: row, Value: Row 0");
                });
            })
            // 2nd row
            .then(() => {
                element(by.css('div[row="1"] div[colid="row')).getText().then((text) => {
                    expect(text).toEqual("Row 1");
                });
            })
            .then(() => {
                element(by.css('div[row="1"] div[colid="square')).getText().then((text) => {
                    expect(text).toEqual("1");
                });
            })
            .then(() => {
                element(by.css('div[row="1"] div[colid="cube')).getText().then((text) => {
                    expect(text).toEqual("1");
                });
            })
            .then(() => {
                element(by.css('div[row="1"] div[colid="params')).getText().then((text) => {
                    expect(text).toEqual("Field: row, Value: Row 1");
                });
            })
            // 3rd row
            .then(() => {
                element(by.css('div[row="2"] div[colid="row')).getText().then((text) => {
                    expect(text).toEqual("Row 2");
                });
            })
            .then(() => {
                element(by.css('div[row="2"] div[colid="square')).getText().then((text) => {
                    expect(text).toEqual("4");
                });
            })
            .then(() => {
                element(by.css('div[row="2"] div[colid="cube')).getText().then((text) => {
                    expect(text).toEqual("8");
                });
            })
            .then(() => {
                element(by.css('div[row="2"] div[colid="params')).getText().then((text) => {
                    expect(text).toEqual("Field: row, Value: Row 2");
                });
            });
    });

    it('Basic Editor Component Example Tests', function () {
        element(by.css('a[ng-reflect-router-link="/editor-component"]'))
            .click()
            // first row
            .then(() => {
                element(by.css('div[row="0"] div[colid="name')).getText().then((text) => {
                    expect(text).toEqual("Bob");
                });
            })
            .then(() => {
                element(by.css('div[row="0"] div[colid="mood"] img')).getAttribute("src").then((src) => {
                    expect(src).toEqual("http://localhost:8080/images/smiley.png");
                });
            })
            .then(() => {
                element(by.css('div[row="0"] div[colid="mood')).sendKeys(protractor.Key.ENTER)
                    .then(() => {
                        element(by.css('div editor-cell div')).click().then(() => {
                            element(by.css('div editor-cell div')).sendKeys(protractor.Key.RIGHT)
                                .then(() => {
                                    element(by.css('div editor-cell div')).sendKeys(protractor.Key.ENTER)
                                        .then(() => {
                                            element(by.css('div[row="0"] div[colid="mood"] img')).getAttribute("src").then((src) => {
                                                expect(src).toEqual("http://localhost:8080/images/smiley-sad.png");
                                            });
                                        });
                                })
                        })
                    });
            });
    });
});
